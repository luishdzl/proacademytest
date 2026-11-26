/**
 * Contenido de la landing de curso segun el diseno de Figma (Practicas WIZI,
 * frames "Ajustes Landing ..." del 19 de noviembre de 2026).
 * La plantilla es la misma para todos los cursos; aqui vive solo lo que cambia.
 */

export interface LandingStat {
  text?: string;
  value?: number;
  prefix?: string;
  label: string;
}

export interface PlatformBullet {
  title: string;
  detail: string;
  icon: string;
}

export interface FigmaLanding {
  /** Lineas del H1 antes de "¡garantizado!". */
  heroLines: string[];
  heroSub: string;
  /** Puntos del sello de garantia del hero. */
  sealPoints: number;
  stats: LandingStat[];
  examHeading: string;
  examIntro: string;
  platformIntro: string;
  platformBullets: PlatformBullet[];
  /** Puntos del chip "Ultimo simulacro" de la tarjeta de progreso (Figma). */
  platformScore?: number;
  /** Barras de la tarjeta de progreso; si falta se usan las secciones del examen. */
  platformBars?: { label: string; value: number; display?: string }[];
  /** Porcentaje grande de la tarjeta de progreso. */
  platformOverall?: string;
  /** Texto del chip de ultimo simulacro cuando no es "+N puntos". */
  platformScoreText?: string;
  /** Plan Elite propio del curso (precio de contado, precio anterior y horas de clase). */
  elitePrice?: string;
  eliteBefore?: string;
  eliteHours?: number;
  /** Titulo propio de la seccion de plataforma (solo TOEFL). */
  platformHeading?: { line: string; accent: string };
  /** Palabra del titulo de planes: "La mejor opcion" o "La mejor ruta". */
  priceHeading?: string;
  /** Ancho (%) de la estudiante en "Domina tu examen"; cada foto trae margenes distintos. */
  studentWidth?: number;
  /** Valor de `program` en TESTIMONIALS (en mayusculas). */
  testimonialKey: string;
  /** Nombre del curso como aparece en rotulos ("TOEFL iBT"). */
  label: string;
}

const platformBullets = (exercises: string, source: string): PlatformBullet[] => [
  {
    title: `Más de ${exercises} ejercicios calibrados`,
    detail: `Reactivos actualizados al nivel y formato oficial ${source}.`,
    icon: "ph:pencil-simple-line",
  },
  {
    title: "Simulacros bajo condiciones reales",
    detail: "Evaluaciones cronometradas para dominar el tiempo por pregunta.",
    icon: "ph:list-checks",
  },
  {
    title: "Diagnóstico continuo y preciso",
    detail: "Reportes que detectan áreas de oportunidad para tus sesiones 1 a 1.",
    icon: "ph:magnifying-glass",
  },
];

export const FIGMA_LANDINGS: Record<string, FigmaLanding> = {
  paa: {
    label: "PAA",
    heroLines: ["Curso PAA", "College Board"],
    heroSub:
      "Clases en vivo 1 a 1, simuladores reales y profesores expertos para asegurar tu lugar en la UDG, El Tec de Monterrey y la UDEM.",
    sealPoints: 150,
    stats: [
      { text: "Clase 1 a 1", label: "Lecciones personalizadas" },
      { value: 5000, prefix: "+", label: "Ejercicios prácticos" },
      { value: 20, label: "Evaluaciones completas" },
      { value: 150, prefix: "+", label: "Puntos garantizados" },
    ],
    examHeading: "Domina tu examen PAA,",
    examIntro:
      "Trabaja las habilidades exactas que evalúa el temario de la PAA, utilizando estrategias prácticas para resolver con precisión y velocidad cada reactivo.",
    platformIntro:
      "Nuestra plataforma replica el nivel, formato y presión de tiempo de la prueba PAA para convertir cada práctica en un resultado.",
    platformBullets: platformBullets("5,000", "del College Board"),
    platformScore: 1200,
    studentWidth: 170,
    testimonialKey: "PAA",
  },
  sat: {
    label: "SAT",
    heroLines: ["Curso SAT", "College Board"],
    heroSub:
      "Clases en vivo 1 a 1, simuladores reales y profesores expertos para asegurar tu lugar en universidades de Estados Unidos y el extranjero.",
    sealPoints: 150,
    stats: [
      { text: "Clase 1 a 1", label: "Lecciones personalizadas" },
      { value: 5000, prefix: "+", label: "Ejercicios prácticos" },
      { value: 20, label: "Evaluaciones completas" },
      { value: 150, prefix: "+", label: "Puntos garantizados" },
    ],
    examHeading: "Domina tu examen SAT,",
    examIntro:
      "Cada sección de la prueba evalúa tu razonamiento y habilidades académicas esenciales. Nuestro plan ataca las áreas clave con una estrategia enfocada en mejorar tu puntaje.",
    platformIntro:
      "Nuestra plataforma replica el nivel, formato y presión de tiempo de la SAT para convertir cada práctica en una ventaja real.",
    platformBullets: platformBullets("5,000", "del College Board"),
    platformScore: 1200,
    platformOverall: "82%",
    platformBars: [
      { label: "Reading & Writing", value: 72 },
      { label: "Math", value: 84 },
    ],
    studentWidth: 128,
    testimonialKey: "SAT",
  },
  "toefl-ibt": {
    label: "TOEFL iBT",
    heroLines: ["Curso TOEFL iBT"],
    heroSub:
      "Preparación integral para lograr tu titulación universitaria y becas con simuladores idénticos al examen de ETS y retroalimentación 1 a 1.",
    sealPoints: 10,
    stats: [
      { text: "Clase 1 a 1", label: "Lecciones personalizadas" },
      { value: 3000, prefix: "+", label: "Ejercicios prácticos" },
      { value: 20, label: "Evaluaciones completas" },
      { value: 10, prefix: "+", label: "Puntos garantizados" },
    ],
    examHeading: "Domina tu examen TOEFL,",
    examIntro:
      "Cada sección del examen es una habilidad distinta. Tu plan ataca las cuatro con un enfoque y ejercicios específicos.",
    platformIntro:
      "Nuestra plataforma se adapta al nuevo formato TOEFL para que asegures tu titulación universitaria en México.",
    platformHeading: { line: "Domina el TOEFL y", accent: "aprueba tu examen." },
    platformBullets: [
      {
        title: "Más de 5,000 ejercicios con el nuevo formato 2026",
        detail: "Reactivos actualizados a cada sección, que se califica de 1 a 6 por el ETS.",
        icon: "ph:pencil-simple-line",
      },
      {
        title: "Simulacros adaptativos del TOEFL",
        detail: "Evaluaciones adaptadas al nuevo formato, midiendo tu avance por sección.",
        icon: "ph:list-checks",
      },
      {
        title: "Diagnóstico continuo y preciso",
        detail: "Identifica tus áreas de mejora para alcanzar los 90 puntos requeridos por las universidades mexicanas e internacionales.",
        icon: "ph:magnifying-glass",
      },
    ],
    platformBars: [
      { label: "Reading", value: 83, display: "5/6" },
      { label: "Listening", value: 67, display: "4/6" },
      { label: "Writing", value: 83, display: "5/6" },
      { label: "Speaking", value: 67, display: "4/6" },
    ],
    platformScoreText: "Puntuación 5.5",
    elitePrice: "$14,365",
    eliteBefore: "$16,900",
    eliteHours: 20,
    priceHeading: "ruta",
    platformOverall: "88%",
    studentWidth: 150,
    testimonialKey: "TOEFL IBT",
  },
  gre: {
    label: "GRE",
    heroLines: ["Curso GRE"],
    heroSub:
      "Asegura tu admisión a maestrías y doctorados en las mejores universidades. Mejora +10 puntos garantizados con clases 1 a 1, simuladores oficiales y profesores expertos.",
    sealPoints: 10,
    stats: [
      { text: "Clase 1 a 1", label: "Lecciones personalizadas" },
      { value: 6000, prefix: "+", label: "Ejercicios prácticos" },
      { value: 20, label: "Evaluaciones completas" },
      { value: 10, prefix: "+", label: "Puntos garantizados" },
    ],
    examHeading: "Domina tu examen GRE,",
    examIntro:
      "Te preparamos en cada área del GRE General Test del ETS con estrategias enfocadas en el formato adaptativo por sección.",
    platformIntro:
      "Nuestra plataforma replica el formato y presión de tiempo del examen GRE para convertir cada práctica en una ventaja real.",
    platformBullets: platformBullets("6,000", "del examen GRE"),
    platformScore: 300,
    platformBars: [
      { label: "Verbal", value: 72 },
      { label: "Analytical Writing", value: 72 },
      { label: "Quantitative", value: 84 },
    ],
    priceHeading: "ruta",
    studentWidth: 150,
    testimonialKey: "GRE",
  },
  gmat: {
    label: "GMAT",
    heroLines: ["Curso GMAT", "Focus Edition"],
    heroSub:
      "Asegura tu ingreso a MBAs de prestigio internacional y nacional con clases en vivo 1 a 1, simuladores oficiales y profesores con Percentil 99 (Top 1%).",
    sealPoints: 70,
    stats: [
      { text: "Clase 1 a 1", label: "Lecciones personalizadas" },
      { value: 6000, prefix: "+", label: "Ejercicios prácticos" },
      { value: 20, label: "Evaluaciones completas" },
      { value: 70, prefix: "+", label: "Puntos garantizados" },
    ],
    examHeading: "Domina tu examen GMAT,",
    examIntro:
      "Te preparamos cada área del GMAT del MBA con estrategias que miden tus habilidades cuantitativas, verbales y de análisis de datos.",
    platformIntro:
      "Nuestra plataforma replica el nivel, formato del examen GMAT para convertir cada práctica en una ventaja real.",
    platformBullets: platformBullets("6,000", "del examen GMAT"),
    platformScore: 780,
    platformBars: [
      { label: "Verbal", value: 72 },
      { label: "Data Insights", value: 72 },
      { label: "Quantitative", value: 84 },
    ],
    studentWidth: 150,
    priceHeading: "ruta",
    testimonialKey: "GMAT",
  },
  "piense-ii": {
    label: "PIENSE-II",
    heroLines: ["Curso PIENSE-II", "College Board"],
    heroSub:
      "Clases en vivo 1 a 1 para asegurar tu lugar y beca en Prepas UDG, Prepa Tec, UDEM, CETYS y las mejores preparatorias de México.",
    sealPoints: 30,
    stats: [
      { text: "Clase 1 a 1", label: "Lecciones personalizadas" },
      { value: 5000, prefix: "+", label: "Ejercicios prácticos" },
      { value: 20, label: "Evaluaciones completas" },
      { value: 30, prefix: "+", label: "Puntos garantizados" },
    ],
    examHeading: "Domina el PIENSE II,",
    examIntro:
      "Prepárate con ejercicios actualizados al formato oficial de College Board. Practica bajo presión de tiempo y fortalece cada área evaluada antes de tu admisión.",
    platformIntro:
      "Nuestra plataforma replica la estructura exacta de las 2 horas y 30 minutos de la prueba PIENSE II para que llegues sin nervios y con total dominio del reloj.",
    platformBullets: platformBullets("5,000", "de College Board"),
    platformBars: [
      { label: "Cognoscitiva", value: 84 },
      { label: "Español", value: 67 },
      { label: "Matemáticas", value: 72 },
      { label: "Inglés", value: 64 },
    ],
    studentWidth: 150,
    testimonialKey: "PIENSE II",
  },
  act: {
    label: "ACT",
    heroLines: ["Curso ACT"],
    heroSub:
      "Clases en vivo 1 a 1, simulacros cronometrados y profesores expertos para conseguir la beca en las mejores universidades de Estados Unidos y el extranjero.",
    sealPoints: 4,
    stats: [
      { text: "Clase 1 a 1", label: "Lecciones personalizadas" },
      { value: 3000, prefix: "+", label: "Ejercicios prácticos" },
      { value: 20, label: "Evaluaciones completas" },
      { value: 4, prefix: "+", label: "Puntos garantizados" },
    ],
    examHeading: "Domina el examen ACT,",
    examIntro:
      "Prepárate con el formato actualizado del ACT. Domina las secciones obligatorias que definen tu Composite Score y prepárate también para Science si tu universidad lo solicita.",
    platformIntro:
      "Nuestra plataforma replica el formato digital oficial del examen ACT para que llegues con velocidad, precisión y cero nervios el día de tu prueba.",
    platformBullets: [
      {
        title: "Más de 3,000 ejercicios calibrados",
        detail: "Reactivos actualizados al nivel y formato oficial del College Board.",
        icon: "ph:pencil-simple-line",
      },
      {
        title: "Simuladores bajo condiciones reales",
        detail: "Evaluaciones cronometradas para dominar el tiempo por pregunta.",
        icon: "ph:list-checks",
      },
      {
        title: "Diagnóstico continuo y preciso",
        detail: "Identifica exactamente tus temas de English, Math o Reading que te darán más puntos en menos tiempo.",
        icon: "ph:magnifying-glass",
      },
    ],
    platformScore: 30,
    studentWidth: 110,
    testimonialKey: "ACT",
  },
};

export const getFigmaLanding = (slug: string): FigmaLanding => FIGMA_LANDINGS[slug];
