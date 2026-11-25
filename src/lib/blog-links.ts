// Known CMS pages with verified equivalents in the current public router.
// Render-time only: the original stored HTML and editor source remain intact.
const cmsPaths: Record<string, string> = {
  "/": "/",
  "/blog": "/blog",
  "/paa": "/paa",
  "/paa-college-board": "/paa",
  "/toefl-ibt": "/toefl-ibt",
  "/sat": "/sat",
  "/gmat": "/gmat",
  "/gre": "/gre",
};

export function publicBlogLinks(html: string): string {
  return html.replace(/\bhref=(['"])(https:\/\/cms\.proacademymx\.com[^'"\s]*)\1/gi, (original, quote: string, href: string) => {
    try {
      const url = new URL(href);
      const target = cmsPaths[url.pathname.replace(/\/$/, "") || "/"];
      return target === undefined ? original : `href=${quote}https://proacademymx.com${target}${url.search}${url.hash}${quote}`;
    } catch {
      return original;
    }
  });
}
