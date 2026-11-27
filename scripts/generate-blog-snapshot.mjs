import { neon } from "@neondatabase/serverless";
import fs from "node:fs";
import path from "node:path";

const DATABASE_URL = process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL;

if (!DATABASE_URL) {
  console.log("[generate-blog-snapshot] No DATABASE_URL found, skipping snapshot generation");
  // Create empty array so build doesn't fail
  const snapshotPath = path.resolve(process.cwd(), "src/data/blog-generated.json");
  fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
  if (!fs.existsSync(snapshotPath)) {
    fs.writeFileSync(snapshotPath, "[]", "utf-8");
  }
  process.exit(0);
}

const sql = neon(DATABASE_URL);

function stripHtml(html = "") {
  return String(html).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function readingTime(html = "") {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function slugify(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** A category with no usable slug would crash Astro's [categoria] route. */
function normalizeCategory(category, fallback = "") {
  const name = typeof category?.name === "string" ? category.name.trim() : "";
  const rawSlug =
    typeof category?.slug === "string" || typeof category?.slug === "number"
      ? String(category.slug)
      : "";
  const slug =
    slugify(rawSlug) || slugify(name) || slugify(fallback) || "general";

  return { name: name || "General", slug };
}

function normalizeCategories(row) {
  const seen = new Set();
  const categories = [];

  for (const category of Array.isArray(row.categories) ? row.categories : []) {
    const normalized = normalizeCategory(category, row.category_slug);
    if (seen.has(normalized.slug)) continue;
    seen.add(normalized.slug);
    categories.push(normalized);
  }

  if (categories.length === 0) {
    categories.push(
      normalizeCategory({
        name: row.category || "General",
        slug: row.category_slug || "",
      }),
    );
  }

  return categories;
}

try {
  console.log("[generate-blog-snapshot] Fetching published posts from DB...");
  const rows = await sql`
    SELECT slug, title, description, category, category_slug, categories,
           pub_date, updated_date, image, image_alt, image_width, image_height,
           author, reading_time, draft, body, html,
           seo_title, seo_description, canonical_url, noindex, og_image, keywords
    FROM posts 
    WHERE draft = false 
    ORDER BY pub_date DESC
  `;

  const posts = (rows || []).map((row) => {
    const categories = normalizeCategories(row);
    const primaryCategory = categories[0];

    return {
      slug: row.slug,
      title: row.title,
      description: row.description || "",
      category: typeof row.category === "string" && row.category.trim()
        ? row.category.trim()
        : primaryCategory.name,
      categorySlug: slugify(row.category_slug || "") || primaryCategory.slug,
      categories,
      pubDate: row.pub_date instanceof Date ? row.pub_date.toISOString() : row.pub_date,
      updatedDate: row.updated_date ? (row.updated_date instanceof Date ? row.updated_date.toISOString() : row.updated_date) : null,
      image: row.image || null,
      imageAlt: row.image_alt || "",
      imageWidth: row.image_width || null,
      imageHeight: row.image_height || null,
      author: row.author || "Professional Academy",
      readingTime: row.reading_time || readingTime(row.html || row.body),
      draft: false,
      html: row.html || row.body || "",
      body: row.body || row.html || "",
      seoTitle: row.seo_title || null,
      seoDescription: row.seo_description || null,
      canonicalUrl: row.canonical_url || null,
      noindex: row.noindex || false,
      ogImage: row.og_image || null,
      keywords: row.keywords || null,
    };
  });

  const snapshotPath = path.resolve(process.cwd(), "src/data/blog-generated.json");
  fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
  fs.writeFileSync(snapshotPath, JSON.stringify(posts, null, 2), "utf-8");
  
  console.log(`[generate-blog-snapshot] Done. Generated ${posts.length} posts`);
  process.exit(0);
} catch (err) {
  console.error("[generate-blog-snapshot] Error:", err.message);
  const snapshotPath = path.resolve(process.cwd(), "src/data/blog-generated.json");
  fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
  if (!fs.existsSync(snapshotPath)) {
    fs.writeFileSync(snapshotPath, "[]", "utf-8");
  }
  process.exit(0);
}
