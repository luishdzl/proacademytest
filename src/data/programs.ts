import { PAA_ESSENTIAL_PRICE_MXN } from "./hour-packages";

export interface ProgramSection {
  name: string;
  detail: string;
}

export interface ExamSection {
  name: string;
  /** Texto de la pestana cuando difiere del titulo del panel. */
  tabLabel?: string;
  /** Complemento del titulo del panel ("Reading — Comprension Lectora"). */
  panelSuffix?: string;
  /** Estructura de la seccion (p. ej. "1 sección"). */
  structure?: string;
  label?: string;
  description: string;
  time: string;
  scoreRange: string;
  activities: { title: string; detail: string }[];
}

export interface Program {
  slug: string;
  exam: string;
  fullName: string;
  headline: string;
  accent: string;
  subheadline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  audience: string;
  guarantee: string;
  priceMXN: number;
  sessions: number;
  exercises: number;
  evaluations: number;
  hours: number;
  skills: ProgramSection[];
  outcomes: string[];
  features: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
  scoreScale: string;
  heroImage?: { src: string; width: number; height: number };
  /** Imágenes específicas para la página de curso rediseñada. */
  guideImage?: string;
  guaranteeImage?: string;
  skillsImage?: string;
  faqImage?: string;
  /** Intro de la sección "Preparación académica". */
  academicIntro?: string;
  /** Secciones del examen con detalle interactivo (tabs). */
  examSections?: ExamSection[];
  /** Comparativa y beneficios específicos del curso. */
  comparison?: { label: string; pa: string; trad: string }[];
  benefits?: string[];
  /** Rango de planes publicados en MXN; alimenta el AggregateOffer del schema. */
  priceFromMXN?: number;
  priceToMXN?: number;
}

export const PROGRAMS: Program[] = [
  {
    slug: "toefl-ibt",
    exam: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    headline: "Domina el inglés que",
    accent: "abre fronteras.",
    subheadline:
      "Preparación integral de las cuatro habilidades con materiales oficiales ETS, simuladores idénticos al examen real y retroalimentación 1 a 1.",
    description:
      "Curso intensivo de preparación para el TOEFL iBT con metodología certificada, profesores egresados de las mejores universidades y Garantía de Puntaje de +10 puntos.",
    metaTitle: "Curso TOEFL iBT Garantizado | +10 Puntos o Reembolso",
    metaDescription:
      "Prepárate para el TOEFL iBT con clases 1 a 1, simuladores idénticos al examen real y garantía de +10 puntos. Planes desde $2,490 MXN.",
    audience: "Estudiantes que necesitan certificar su inglés para universidades, becas o visas de trabajo.",
    guarantee: "+10 puntos garantizados o te devolvemos el 100% de tu inversión.",
    priceMXN: 14990,
    priceFromMXN: 2490,
    priceToMXN: 16900,
    sessions: 40,
    exercises: 1500,
    evaluations: 6,
    hours: 20,
    scoreScale: "0-120",
    skills: [
      { name: "Reading", detail: "Comprensión de textos académicos, inferencia y vocabulario en contexto con técnica de lectura cronometrada." },
      { name: "Listening", detail: "Conferencias y conversaciones universitarias con estrategias de toma de notas estructurada." },
      { name: "Speaking", detail: "Respuestas integradas e independientes con grabación, análisis y retroalimentación individual." },
      { name: "Writing", detail: "Ensayos integrados y de opinión con revisión 1 a 1 calibrada a las rúbricas oficiales de ETS." },
    ],
    outcomes: [
      "Puntaje competitivo para admisión internacional (90+)",
      "Dominio de las 4 habilidades bajo presión de tiempo",
      "Estrategias específicas por tipo de pregunta",
      "Confianza total el día del examen",
    ],
    features: [
      { title: "Materiales ETS", detail: "Acceso a bancos de preguntas y reactivos actualizados según la estructura de evaluación del ETS." },
      { title: "Simuladores reales", detail: "Practica con el formato, tiempo y preguntas del examen TOEFL iBT durante toda tu preparación." },
      { title: "Expertos en el TOEFL IBT", detail: "Maestros certificados por el ETS en México, enfocados en metodologías para el examen." },
      { title: "Garantía de puntaje", detail: "Garantizamos +10 puntos sobre el puntaje diagnóstico inicial o te devolvemos el 100% de la inversión." },
    ],
    faqs: [
      { q: "¿Qué incluye el curso TOEFL iBT?", a: "Acceso a la plataforma con simuladores idénticos al examen real, material oficial de ETS y retroalimentación personalizada 1 a 1 de speaking y writing." },
      { q: "¿Tienen garantía de resultados?", a: "Sí. Garantizamos un aumento mínimo de 10 puntos sobre tu diagnóstico inicial. Si no lo logras al completar el curso, te devolvemos el 100% de tu inversión." },
      { q: "¿Qué nivel de inglés necesito para iniciar?", a: "Ninguno en particular: el diagnóstico inicial define tu punto de partida y el plan se adapta a tu nivel actual, desde B1 hasta C1." },
      { q: "¿Cuánto dura el programa de preparación?", a: "El programa estándar dura de 8 a 12 semanas según tu meta de puntaje y disponibilidad, con horarios totalmente flexibles." },
    ],
    heroImage: { src: "/images/hero-toefl-ibt.webp", width: 1200, height: 577 },
    guideImage: "/images/preparacion-paa.webp",
    guaranteeImage: "/images/ibt-garantias.webp",
    skillsImage: "/images/domina-toefl-hd.webp",
    faqImage: "/images/toefl/laptop.webp",
    academicIntro:
      "La certificación del TOEFL iBT es un requisito obligatorio para la titulación en muchas universidades nacionales. Nuestro plan de estudio está diseñado para que mejores en poco tiempo.",
    examSections: [
      {
        name: "Reading",
        panelSuffix: "Comprensión Lectora",
        label: "Comprensión Lectora",
        description:
          "Evalúa tu capacidad para entender, procesar y analizar textos académicos. La dificultad del segundo bloque cambia según tu desempeño en el primero.",
        time: "~30 min",
        scoreRange: "1.0 – 6.0",
        activities: [
          { title: "Complete the Words", detail: "Rellenar las letras que faltan en palabras de un párrafo." },
          { title: "Read in Daily Life", detail: "Responder preguntas sobre anuncios, artículos cortos o notas cotidianas del campus." },
          { title: "Read an Academic Passage", detail: "Responder preguntas sobre un fragmento de texto académico tipo universitario." },
        ],
      },
      {
        name: "Listening",
        panelSuffix: "Comprensión Auditiva",
        label: "Comprensión Auditiva",
        description:
          "Evalúa tu capacidad para entender textos tanto académicos como cotidianos. La dificultad del segundo bloque cambia según tu desempeño en el primero.",
        time: "~29 min",
        scoreRange: "1.0 – 6.0",
        activities: [
          { title: "Listen and Choose a Response", detail: "Escuchar una frase o pregunta corta de la vida diaria y elegir la respuesta lógica." },
          { title: "Listen to an Announcement or Conversation", detail: "Escuchar avisos públicos o diálogos informales entre estudiantes." },
        ],
      },
      {
        name: "Writing",
        panelSuffix: "Expresión Escrita",
        label: "Expresión Escrita",
        description:
          "Evalúa tu habilidad para comunicar ideas por escrito de forma clara, precisa y estructurada en situaciones universitarias reales.",
        time: "~23 min",
        scoreRange: "1.0 – 6.0",
        activities: [
          { title: "Build a Sentence", detail: "Ordenar fragmentos mezclados para formar una oración gramaticalmente correcta." },
          { title: "Write an Email", detail: "Redactar un correo electrónico respondiendo a una situación específica." },
        ],
      },
      {
        name: "Speaking",
        panelSuffix: "Expresión Oral",
        label: "Expresión Oral",
        description:
          "Mide tu fluidez, pronunciación, entonación y la capacidad de reaccionar oralmente de forma inmediata. Los tiempos son estrictos y no se pueden pausar.",
        time: "~8 min",
        scoreRange: "1.0 – 6.0",
        activities: [
          { title: "Listen and Repeat", detail: "Escuchar frases cortas y repetirlas imitando el ritmo y la pronunciación." },
          { title: "Take an Interview", detail: "Responder las preguntas de un entrevistador virtual (15 s preparación / 45 s respuesta)." },
        ],
      },
    ],
  },
  {
    slug: "sat",
    exam: "SAT",
    fullName: "Scholastic Assessment Test",
    headline: "El puntaje que exigen",
    accent: "las mejores universidades.",
    subheadline:
      "Preparación integral en Reading and Writing y Math para ingresar a universidades internacionales. Estudia con material alineado al College Board y simuladores reales.",
    description:
      "Curso completo para el Digital SAT con simuladores adaptativos, técnicas de manejo de tiempo y tutorías personalizadas para admisión a universidades de Estados Unidos y el Tec de Monterrey.",
    metaTitle: "Curso SAT Digital Garantizado | Clases 1 a 1 y Simuladores",
    metaDescription:
      "Prepara el Digital SAT con simuladores adaptativos, clases 1 a 1 y garantía de puntaje. Planes desde $2,490 MXN para universidades de EE. UU.",
    priceFromMXN: 2490,
    priceToMXN: 29000,
    audience: "Estudiantes de preparatoria que buscan admisión en universidades de EE. UU. o programas internacionales.",
    guarantee: "Si tu puntuación en el examen oficial es menor al 90% del total o no eres admitido, te devolvemos el 100% de tu inversión.",
    priceMXN: PAA_ESSENTIAL_PRICE_MXN,
    sessions: 40,
    exercises: 5000,
    evaluations: 20,
    hours: 60,
    scoreScale: "400-1600",
    skills: [
      { name: "Reading & Writing", detail: "Comprensión de lectura basada en evidencia, gramática y retórica con pasajes del formato digital." },
      { name: "Math: Álgebra", detail: "Ecuaciones lineales, sistemas y funciones con técnicas de resolución rápida sin calculadora." },
      { name: "Math: Avanzado", detail: "Funciones no lineales, geometría y trigonometría con el uso estratégico de Desmos integrado." },
      { name: "Estrategia adaptativa", detail: "Manejo del formato multistage adaptive: cómo el primer módulo define tu techo de puntaje." },
    ],
    outcomes: [
      "Puntaje 1400+ para universidades competitivas",
      "Dominio del formato digital adaptativo",
      "Velocidad y precisión en Math sin sacrificar exactitud",
      "Preparación válida para becas académicas",
    ],
    features: [
      { title: "Materiales de estudio", detail: "Acceso a bancos de preguntas y reactivos actualizados según la estructura de evaluación de College Board." },
      { title: "Simuladores reales", detail: "Practica con el formato, tiempo y preguntas del examen oficial durante toda tu preparación." },
      { title: "Expertos en el examen", detail: "Maestros que superaron la prueba SAT, enfocados en las metodologías para el examen." },
      { title: "Garantía de puntaje", detail: "Garantizamos +150 puntos sobre el puntaje diagnóstico inicial o te devolvemos el 100% de la inversión." },
    ],
    faqs: [
      { q: "¿Qué incluye el programa de preparación SAT?", a: "Acceso ilimitado a nuestra plataforma con simuladores interactivos, bancos de ejercicios por sección (Reading and Writing y Math) y retroalimentación personalizada de expertos para las preguntas más difíciles." },
      { q: "¿Cómo funciona la garantía de puntaje?", a: "Estamos tan seguros de nuestra metodología que si tu puntuación oficial en el SAT es menor al 90% del total o no eres admitido después de completar el curso, te devolvemos el 100% de tu inversión. Nuestro objetivo es asegurar tu lugar en la universidad." },
      { q: "¿De qué manera se puntúa el examen SAT?", a: "El SAT se califica en una escala total de 400 a 1600 puntos, que se obtiene sumando los resultados de sus dos secciones principales: Reading and Writing, que va de 200 a 800 puntos, y Math, que también va de 200 a 800 puntos. Solo las preguntas correctas suman puntos, por lo que siempre conviene contestar todas las preguntas." },
      { q: "¿Cuánto dura el programa de preparación?", a: "El programa está diseñado para completarse de manera óptima en las horas contratadas, dedicando breves momentos a la semana. Sin embargo, si necesitas una preparación más flexible, puedes contratar más horas y avanzar a tu propio ritmo." },
    ],
    heroImage: { src: "/sat-hero.webp", width: 2000, height: 785 },
    guideImage: "/images/preparacion-paa.webp",
    guaranteeImage: "/images/sat/resultados.webp",
    skillsImage: "/images/sat/estudiante.webp",
    faqImage: "/images/sat/laptop.webp",
    academicIntro:
      "Asegura tu admisión en universidades de Estados Unidos con un buen puntaje en el examen SAT. Nuestro plan de estudio te garantiza el éxito en poco tiempo.",
    comparison: [
      { label: "Duración del curso", pa: "20 horas de clase 1:1 en vivo", trad: "8 semanas" },
      { label: "Herramientas", pa: "Acceso a plataforma premium", trad: "Libro limitado" },
      { label: "Simuladores reales", pa: "20 exámenes de simulación", trad: "Bancos de preguntas" },
      { label: "Sesiones de estudio", pa: "Horarios flexibles adaptables", trad: "Sujetas a disponibilidad" },
      { label: "Temario", pa: "Plan de estudio personalizado", trad: "Varía por programa" },
    ],
    examSections: [
      {
        name: "Reading & Writing",
        label: "",
        description: "Evalúa tus habilidades de comprensión lectora, análisis crítico, vocabulario en contexto, gramática y edición de redacción según el estándar académico universitario.",
        time: "~64 min",
        scoreRange: "200–800",
        activities: [
          { title: "Craft and Structure & Information", detail: "Leer pasajes breves para inferir ideas clave, propósitos y vocabulario en contexto." },
          { title: "Expression of Ideas & English Conventions", detail: "Aplicar reglas gramaticales y de puntuación para mejorar una redacción." },
        ],
      },
      {
        name: "Math",
        label: "",
        description: "Mide tu capacidad de razonamiento matemático, resolución de problemas algebraicos, funciones avanzadas, análisis de datos, geometría y trigonometría.",
        time: "~70 min",
        scoreRange: "200–800",
        activities: [
          { title: "Algebra & Advanced Math", detail: "Resolver ecuaciones, desigualdades, expresiones algebraicas y funciones complejas." },
          { title: "Problem-Solving, Data & Geometry", detail: "Interpretar tablas, gráficos y proporciones para resolver problemas matemáticos." },
        ],
      },
    ],
  },
  {
    slug: "gre",
    exam: "GRE",
    fullName: "Graduate Record Examination",
    headline: "Tu posgrado comienza",
    accent: "con este puntaje.",
    subheadline:
      "Domina el GRE con la metodología avalada por los evaluadores, a través de 4 pilares de preparación: materiales ETS, simuladores, estudio flexible y expertos certificados.",
    description:
      "Curso GRE garantizado: incrementa por lo menos 10 puntos o te devolvemos tu dinero. Preparación verbal, cuantitativa y de redacción analítica para maestrías y doctorados.",
    metaTitle: "Curso GRE Garantizado | +10 Puntos o Devolución del 100%",
    metaDescription:
      "Prepárate para el GRE con clases 1 a 1, simuladores oficiales y garantía de +10 puntos sobre tu diagnóstico. Planes desde $2,490 MXN.",
    audience: "Profesionistas y egresados que aplican a maestrías y doctorados en el extranjero.",
    guarantee: "+10 puntos garantizados o te devolvemos el 100% de tu inversión.",
    priceMXN: 14990,
    priceFromMXN: 2490,
    priceToMXN: 29000,
    sessions: 40,
    exercises: 1500,
    evaluations: 6,
    hours: 20,
    scoreScale: "260-340",
    skills: [
      { name: "Razonamiento verbal", detail: "Comprensión de lectura, equivalencia de oraciones y completar el texto con estrategia de descarte rápido." },
      { name: "Razonamiento cuantitativo", detail: "Aritmética, álgebra, geometría y análisis de datos con comparaciones cuantitativas." },
      { name: "Redacción analítica", detail: "Ensayo Analyze an Issue con estructura argumentativa calibrada a las rúbricas de ETS." },
      { name: "Vocabulario GRE", detail: "Las 800 palabras de alta frecuencia con técnica de spaced repetition integrada a tu plan." },
    ],
    outcomes: [
      "Puntaje 320+ para programas competitivos",
      "Velocidad en comparaciones cuantitativas",
      "Vocabulario académico de alta frecuencia",
      "Ensayos calibrados a rúbrica oficial",
    ],
    features: [
      { title: "Materiales de estudio", detail: "Estudia con bancos de reactivos y ejercicios alineados a los estándares oficiales de ETS." },
      { title: "Simuladores reales", detail: "Practica con exámenes adaptativos cronometrados que replican la interfaz y dificultad del GRE actual." },
      { title: "Expertos en el examen", detail: "Maestros que superaron el examen GRE, enfocados en las metodologías para el examen." },
      { title: "Garantía de puntaje", detail: "Garantizamos +10 puntos sobre el puntaje diagnóstico inicial o te devolvemos el 100% de la inversión." },
    ],
    faqs: [
      { q: "¿Qué incluye el curso GRE?", a: "Acceso a la plataforma con simuladores idénticos al examen real, material oficial de ETS y retroalimentación personalizada 1 a 1 de redacción." },
      { q: "¿Cómo funcionan las sesiones de feedback?", a: "Un experto revisa tus simulacros y ensayos con las rúbricas oficiales y diseña tu plan de mejora semanal." },
      { q: "¿Tienen garantía de resultados?", a: "Sí. Si no incrementas al menos 10 puntos tras completar el curso, te devolvemos el 100% de tu inversión." },
      { q: "¿Qué nivel de inglés necesito para iniciar?", a: "Recomendamos un nivel B2 de inglés. El diagnóstico inicial confirma tu punto de partida y ajusta el plan." },
      { q: "¿Cuánto dura el programa de preparación?", a: "Entre 8 y 12 semanas según tu meta, con 40 sesiones de clase y horarios flexibles." },
    ],
    heroImage: { src: "/images/gre/hero.webp", width: 2524, height: 1532 },
    guideImage: "/images/preparacion-paa.webp",
    guaranteeImage: "/images/gre/garantia.webp",
    skillsImage: "/images/gre/estudiante.webp",
    faqImage: "/images/gre/laptop.webp",
    academicIntro:
      "Diseñamos un plan de estudio estratégico para que alcances el puntaje que exige tu programa de maestría o doctorado.",
    examSections: [
      {
        name: "Escritura analítica",
        tabLabel: "Redacción analítica",
        structure: "1 sección",
        label: "Redacción Analítica",
        description:
          "Evalúa tu pensamiento crítico y tu habilidad para articular y sustentar argumentos complejos de forma clara y estructurada en inglés.",
        time: "~30 min",
        scoreRange: "6.0",
        activities: [
          { title: "Reconocimiento de errores", detail: "Redacción de un ensayo para evaluar tu postura ante un tema de interés general." },
          { title: "Estructura y persuasión", detail: "Desarrollo de tesis con contraargumentos, ejemplos y precisión gramatical." },
        ],
      },
      {
        name: "Verbal Reasoning",
        tabLabel: "Razonamiento verbal",
        label: "Razonamiento Verbal",
        description:
          "Evalúa tu capacidad de analizar y evaluar material escrito, sintetizar información de pasajes complejos y reconocer relaciones entre palabras y conceptos.",
        time: "~46 min",
        scoreRange: "130 – 170",
        activities: [
          { title: "Text Completion", detail: "Completar párrafos académicos identificando el tono e intención lógica del autor." },
          { title: "Sentence Equivalence", detail: "Seleccionar dos palabras que completen una oración produciendo el mismo significado exacto." },
        ],
      },
      {
        name: "Quantitative",
        tabLabel: "Razonamiento cuantitativo",
        label: "Razonamiento Cuantitativo",
        description:
          "Mide tu habilidad para modelar y resolver problemas matemáticos en aritmética, álgebra, geometría y análisis estadístico de datos.",
        time: "~47 min",
        scoreRange: "130 – 170",
        activities: [
          { title: "Quantitative Comparison", detail: "Comparar dos cantidades para determinar con velocidad la relación matemática entre ellas." },
          { title: "Multiple-Choice Math", detail: "Resolver ejercicios numéricos avanzados aplicando atajos sin cálculos excesivos." },
        ],
      },
    ],
  },
  {
    slug: "gmat",
    exam: "GMAT",
    fullName: "Graduate Management Admission Test",
    headline: "El MBA que quieres",
    accent: "tiene un número.",
    subheadline:
      "Preparación GMAT Focus Edition: Quantitative, Verbal y Data Insights con estrategia adaptativa y tutores del top 1%.",
    description:
      "Curso GMAT Focus Edition con simuladores adaptativos, análisis de datos y estrategia por sección para admisión a las mejores escuelas de negocios del mundo.",
    metaTitle: "Curso GMAT Focus Edition | Preparación para MBA Garantizada",
    metaDescription:
      "Prepara el GMAT Focus con clases 1 a 1, simuladores GMAC y garantía de +70 puntos sobre tu diagnóstico. Planes desde $2,490 MXN.",
    audience: "Profesionistas que aplican a MBA y maestrías en negocios en el extranjero o en México.",
    guarantee: "+70 puntos garantizados sobre tu diagnóstico inicial, o te devolvemos el 100% de tu inversión.",
    priceMXN: 14990,
    priceFromMXN: 2490,
    priceToMXN: 29000,
    sessions: 40,
    exercises: 1400,
    evaluations: 6,
    hours: 22,
    scoreScale: "205-805",
    skills: [
      { name: "Quantitative Reasoning", detail: "Problem solving puro: álgebra y aritmética aplicada sin geometría, con técnicas de estimación." },
      { name: "Verbal Reasoning", detail: "Critical reasoning y reading comprehension con método de descarte estructurado." },
      { name: "Data Insights", detail: "Data sufficiency, gráficas, tablas y análisis multifuente: la sección decisiva del Focus Edition." },
      { name: "Estrategia adaptativa", detail: "Question review & edit: cómo administrar los cambios de respuesta permitidos por sección." },
    ],
    outcomes: [
      "Puntaje 645+ para escuelas top",
      "Dominio de Data Insights",
      "Manejo del algoritmo adaptativo",
      "Perfil competitivo para becas MBA",
    ],
    features: [
      { title: "Materiales de estudio", detail: "Estudia con bancos de reactivos y reportes continuos de desempeño desglosados por área para orientar tus sesiones individuales." },
      { title: "Simuladores GMAC", detail: "Practica utilizando simuladores GMAT Focus con el mismo algoritmo de calibración por reactivo de GMAC." },
      { title: "Expertos en el examen", detail: "Maestros que tomaron el curso GMAT Mexico, enfocados en las metodologías para el examen." },
      { title: "Garantía de puntaje", detail: "Garantizamos +70 puntos sobre el puntaje diagnóstico inicial o te devolvemos el 100% de la inversión." },
    ],
    faqs: [
      { q: "¿El curso cubre el GMAT Focus Edition?", a: "Sí, todo el programa está actualizado al Focus Edition: tres secciones de 45 minutos, sin essay y con la nueva sección de Data Insights." },
      { q: "¿GMAT o GRE, cuál me conviene?", a: "Depende de tu programa objetivo. En la sesión de diagnóstico gratuita evaluamos tu perfil y te recomendamos el examen que maximice tu admisión." },
      { q: "¿Cuánto dura la preparación?", a: "De 10 a 14 semanas en promedio, con 40 sesiones y horarios flexibles para profesionistas." },
      { q: "¿Tienen garantía?", a: "Sí, garantizamos un aumento medible sobre tu diagnóstico inicial o te devolvemos el 100% de tu inversión." },
    ],
    heroImage: { src: "/images/gmat/hero.webp", width: 2524, height: 1532 },
    guideImage: "/images/preparacion-paa.webp",
    guaranteeImage: "/images/gmat/garantia.webp",
    skillsImage: "/images/gmat/estudiante.webp",
    faqImage: "/images/gmat/laptop.webp",
    academicIntro:
      "Diseñamos un plan de estudio estratégico para que alcances el puntaje que exige tu programa de maestría o doctorado.",
    examSections: [
      {
        name: "Análisis de datos",
        label: "Análisis de Datos",
        description:
          "Mide tu capacidad para analizar, interpretar y cruzar múltiples fuentes de datos (tablas, gráficas y textos) para tomar decisiones estratégicas de negocio.",
        time: "~45 min",
        scoreRange: "60 – 90",
        activities: [
          { title: "Suficiencia de datos", detail: "Análisis lógico de información para responder a una pregunta de negocio." },
          { title: "Análisis de tablas y razonamiento a partir de múltiples fuentes", detail: "Síntesis de datos de correos, tablas y reportes para resolver problemas complejos." },
        ],
      },
      {
        name: "Verbal",
        tabLabel: "Razonamiento verbal",
        label: "Razonamiento Verbal",
        description:
          "Evalúa tu capacidad de leer y comprender pasajes complejos, argumentar con solidez lógica y detectar falacias o suposiciones implícitas.",
        time: "45 min",
        scoreRange: "60 – 90",
        activities: [
          { title: "Critical Reasoning", detail: "Identificar suposiciones, fortalecer o debilitar argumentos e inferir conclusiones de negocios." },
          { title: "Reading Comprehension", detail: "Analizar textos extensos sobre economía, estrategia empresarial y ciencias sociales." },
        ],
      },
      {
        name: "Quantitative",
        tabLabel: "Razonamiento cuantitativo",
        label: "Razonamiento Cuantitativo",
        description:
          "Mide tu capacidad de razonamiento matemático para resolver problemas de álgebra y aritmética aplicada en entornos de negocios y toma de decisiones.",
        time: "45 min",
        scoreRange: "60 – 90",
        activities: [
          { title: "Problem Solving", detail: "Resolver problemas matemáticos de álgebra, proporciones y progresiones sin calculadora." },
          { title: "Number Properties", detail: "Dominar reglas de divisibilidad, exponentes y desigualdades con agilidad analítica." },
        ],
      },
    ],
  },
  {
    slug: "paa",
    exam: "PAA",
    fullName: "Prueba de Aptitud Académica del College Board",
    headline: "Curso PAA College Board",
    accent: "¡garantizado!",
    subheadline:
      "Clases en vivo 1 a 1, simuladores reales y profesores expertos para asegurar tu lugar en la UDG, El Tec de Monterrey y la UDEM.",
    description:
      "Curso PAA para admisión a la UDG, Tec de Monterrey y UDEM: simuladores oficiales College Board, clases personalizadas 1 a 1 y garantía de +150 puntos.",
    metaTitle: "Curso PAA College Board Garantizado | Clases 1 a 1",
    priceFromMXN: 2490,
    priceToMXN: 29000,
    metaDescription:
      "Prepárate para la PAA con simuladores idénticos al College Board, clases 1 a 1 y garantía de +150 puntos sobre tu diagnóstico inicial. Inicia hoy.",
    audience: "Estudiantes que buscan admisión a la UDG, Tec de Monterrey, UDEM y universidades que aplican la PAA.",
    guarantee: "+150 puntos garantizados sobre tu diagnóstico inicial, o te devolvemos el 100% de tu inversión.",
    priceMXN: 2490,
    sessions: 20,
    exercises: 5000,
    evaluations: 20,
    hours: 60,
    scoreScale: "400-1600",
    skills: [
      { name: "Lectura", detail: "Comprensión de textos literarios, científicos y humanísticos con preguntas basadas en evidencia." },
      { name: "Redacción", detail: "Corrección sintáctica, puntuación y coherencia lógica según el formato oficial." },
      { name: "Matemáticas", detail: "Razonamiento cuantitativo, álgebra, resolución de problemas y geometría con y sin calculadora." },
      { name: "Inglés institucional", detail: "Módulo complementario de vocabulario, gramática y comprensión lectora." },
    ],
    outcomes: [
      "Puntaje competitivo para admisión al Tec de Monterrey y UDEM",
      "Dominio de las 3 áreas nucleares y el módulo complementario",
      "Simulacros cronometrados bajo condiciones reales de aplicación",
      "Estrategia personalizada y técnicas de descarte",
    ],
    features: [
      { title: "Materiales de estudio", detail: "Acceso a bancos de preguntas y reactivos actualizados según la estructura de evaluación de College Board." },
      { title: "Simuladores reales", detail: "Practica con el formato, tiempo y preguntas del examen oficial durante toda tu preparación." },
      { title: "Expertos en el examen", detail: "Preparación especializada para el examen de admisión a la UDG, el Tec de Monterrey y UDEM." },
      { title: "Garantía de puntaje", detail: "Garantizamos +150 puntos sobre el puntaje diagnóstico inicial o te devolvemos el 100% de la inversión." },
    ],
    faqs: [
      { q: "¿Qué incluye el programa de preparación PAA?", a: "Incluye acceso completo a nuestra plataforma de simuladores con preguntas oficiales actualizadas, sesiones individuales en vivo con profesores especializados, material de estudio descargable y reportes de progreso detallados por cada área del examen." },
      { q: "¿Cómo funciona la garantía de puntaje?", a: "Si tras completar tu programa de preparación y los simuladores asignados no logras aumentar al menos 150 puntos respecto a tu puntaje diagnóstico inicial, te devolvemos el 100% de tu inversión. Nuestro compromiso es garantizar un avance tangible en tu desempeño." },
      { q: "¿Necesito conocimientos avanzados de matemáticas para iniciar?", a: "No. El programa evalúa tu nivel inicial con un examen diagnóstico y parte desde las bases de aritmética y álgebra, enseñándote métodos de resolución rápida, atajos conceptuales y técnicas de descarte." },
      { q: "¿Con cuánto tiempo de anticipación debo prepararme?", a: "Recomendamos iniciar entre 6 y 10 semanas antes de tu fecha de aplicación oficial en el Tec de Monterrey o UDEM para cubrir todos los temas con calma y realizar al menos 4 simulacros cronometrados completos." },
    ],
    heroImage: { src: "/images/paa/hero.webp", width: 2524, height: 1532 },
    guideImage: "/images/preparacion-paa.webp",
    guaranteeImage: "/images/preparacion-paa-2.webp",
    skillsImage: "/images/paa/estudiante.webp",
    faqImage: "/images/laptop-paa.webp",
    academicIntro:
      "Asegura tu admisión universitaria. El puntaje del examen PAA es el criterio de selección principal en las universidades públicas y privadas. Nuestro plan de estudio te garantiza el éxito en poco tiempo.",
    examSections: [
      {
        name: "Lectura",
        label: "Comprensión Lectora",
        description:
          "Comprensión profunda de textos literarios, humanísticos y científicos. Preguntas basadas en evidencia, inferencia de ideas centrales y vocabulario en contexto.",
        time: "~45 min",
        scoreRange: "200-800",
        activities: [
          { title: "Comprensión lectora", detail: "Extraer la idea central, inferir conclusiones y reconocer el tono del autor en el texto." },
          { title: "Vocabulario en Contexto", detail: "Deducir el significado preciso de palabras o expresiones en la lectura." },
        ],
      },
      {
        name: "Redacción",
        label: "Redacción Indirecta",
        description:
          "Evalúa tu dominio en la corrección sintáctica, puntuación, uso adecuado de nexos, concordancia y coherencia lógica entre enunciados.",
        time: "~30 min",
        scoreRange: "200 – 800",
        activities: [
          { title: "Estructura y coherencia textual", detail: "Corregir errores de concordancia, seleccionar nexos y mejorar la claridad expositiva." },
          { title: "Normativa y puntuación", detail: "Identificar y subsanar fallas ortográficas, signos de puntuación y sintaxis en español." },
        ],
      },
      {
        name: "Matemáticas",
        label: "Razonamiento Cuantitativo",
        description:
          "Evalúa razonamiento cuantitativo, álgebra, resolución de problemas prácticos, geometría y análisis e interpretación de datos, con y sin calculadora.",
        time: "~55 min",
        scoreRange: "200 – 800",
        activities: [
          { title: "Álgebra y resolución de problemas", detail: "Resolver ecuaciones, sistemas lineales, razones, proporciones y situaciones prácticas." },
          { title: "Geometría y análisis de datos", detail: "Interpretar tablas, gráficas estadísticas y aplicar propiedades geométricas fundamentales." },
        ],
      },
      {
        name: "Inglés",
        label: "Módulo Complementario",
        description:
          "Evalúa el uso de la lengua y comprensión lectora en inglés según los requerimientos de ingreso de carreras o facultades específicas.",
        time: "~45 min",
        scoreRange: "200 – 800 (Complementario)",
        activities: [
          { title: "Uso de la lengua", detail: "Completar enunciados aplicando estructuras gramaticales y vocabulario adecuado." },
          { title: "Comprensión de lectura", detail: "Responder preguntas sobre la idea principal y el propósito en textos breves en inglés." },
        ],
      },
    ],
    comparison: [
      { label: "Formato de clases", pa: "Clases individuales 1 a 1 en vivo", trad: "Grupos numerosos" },
      { label: "Plataforma de práctica", pa: "+5,000 reactivos y simuladores reales", trad: "Cuadernillos limitados" },
      { label: "Garantía de puntaje", pa: "+150 puntos garantizados", trad: "Sin garantía" },
      { label: "Simuladores College Board", pa: "Evaluaciones cronometradas incluidas", trad: "Cobro adicional" },
      { label: "Horarios y ritmo", pa: "Flexibilidad total personalizada", trad: "Horarios rígidos" },
    ],
    benefits: [
      "Clases 1 a 1 en vivo con profesores expertos",
      "Simuladores oficiales idénticos a la PAA del College Board",
      "Plan de estudio adaptado a tus fortalezas y debilidades",
      "+150 puntos garantizados sobre tu diagnóstico inicial",
    ],
  },
  {
    slug: "piense-ii",
    exam: "PIENSE-II",
    fullName: "Prueba de Ingreso a Escuelas de Nivel Medio Superior del College Board",
    headline: "Curso PIENSE-II College Board",
    accent: "¡garantizado!",
    subheadline:
      "Clases en vivo 1 a 1 para asegurar tu lugar y beca en Prepas UDG, Prepa Tec, UDEM, CETYS y las mejores preparatorias de México.",
    description:
      "Curso PIENSE-II para ingresar a Prepa UDG, Prepa Tec, UDEM y CETYS: clases personalizadas 1 a 1, simuladores con formato College Board y garantía de +30 puntos.",
    metaTitle: "Curso PIENSE-II College Board Garantizado | Clases 1 a 1",
    metaDescription:
      "Prepárate para el PIENSE-II con clases 1 a 1, simuladores con formato College Board y garantía de +30 puntos. Prepas UDG, Tec, UDEM y CETYS.",
    audience: "Estudiantes de secundaria que buscan ingresar a Prepa UDG, Prepa Tec, UDEM, CETYS y otras preparatorias de México.",
    guarantee: "+30 puntos garantizados sobre tu diagnóstico inicial, o te devolvemos el 100% de tu inversión.",
    priceMXN: 2490,
    priceFromMXN: 2490,
    priceToMXN: 29000,
    sessions: 20,
    exercises: 5000,
    evaluations: 20,
    hours: 60,
    scoreScale: "College Board",
    skills: [
      { name: "Habilidad cognoscitiva", detail: "Razonamiento verbal y numérico con técnicas de análisis y descarte." },
      { name: "Español", detail: "Comprensión lectora, vocabulario y reglas de redacción." },
      { name: "Matemáticas", detail: "Aritmética, álgebra y geometría con resolución rápida de problemas." },
      { name: "Inglés", detail: "Vocabulario, gramática y comprensión lectora en inglés." },
    ],
    outcomes: [
      "Puntaje competitivo para ingresar a la prepa que elijas",
      "Dominio de las cuatro áreas del examen",
      "Simulacros cronometrados con formato College Board",
      "Plan de estudio adaptado a tu diagnóstico inicial",
    ],
    features: [
      { title: "Materiales de estudio", detail: "Acceso a guías actualizadas, bancos de preguntas y resúmenes estratégicos alineados al temario oficial del College Board." },
      { title: "Simuladores reales", detail: "Practica en un entorno idéntico al examen oficial, con temporizador por sección para ganar velocidad y seguridad." },
      { title: "Expertos en el examen", detail: "Profesores especializados en admisión a bachillerato (Prepas UDG, Prepa Tec, UDEM y más) que te enseñan atajos y estrategias reales de resolución." },
      { title: "Garantía de puntaje", detail: "Garantizamos +30 puntos sobre el puntaje diagnóstico inicial o te devolvemos el 100% de la inversión." },
    ],
    faqs: [
      { q: "¿Qué incluye el curso PIENSE-II?", a: "Acceso a la plataforma con simuladores en formato College Board, clases individuales en vivo, material de estudio y reportes de progreso por área del examen." },
      { q: "¿Cómo funciona la garantía de puntaje?", a: "Si al completar el programa y los simuladores asignados no aumentas al menos 30 puntos sobre tu diagnóstico inicial, te devolvemos el 100% de tu inversión." },
      { q: "¿Cuánto tiempo antes debo empezar a prepararme?", a: "Recomendamos iniciar entre 6 y 10 semanas antes de tu fecha de aplicación para cubrir todas las áreas y realizar varios simulacros completos." },
      { q: "¿Para qué preparatorias sirve el PIENSE-II?", a: "Es el examen que piden preparatorias como Prepa UDG, Prepa Tec, UDEM y CETYS. Confirma con tu preparatoria la fecha y el puntaje mínimo de admisión." },
    ],
    heroImage: { src: "/images/piense-ii/hero.webp", width: 2524, height: 1532 },
    guideImage: "/images/piense-ii/preparacion-1.webp",
    guaranteeImage: "/images/piense-ii/preparacion-2.webp",
    skillsImage: "/images/piense-ii/estudiante.webp",
    faqImage: "/images/piense-ii/laptop.webp",
    academicIntro:
      "Asegura tu ingreso a la preparatoria que deseas. Evaluamos tu nivel actual en PIENSE II y diseñamos un plan de estudio enfocado en cerrar tus brechas y maximizar tu puntaje.",
    examSections: [
      {
        name: "Habilidad Cognoscitiva",
        tabLabel: "Cognoscitiva",
        label: "Razonamiento",
        description: "Evalúa tu agilidad mental y razonamiento lógico para resolver problemas abstractos sin depender de la memoria.",
        time: "~35 min",
        scoreRange: "20-80",
        activities: [
          { title: "Razonamiento lógico y secuencias", detail: "Identificar patrones en series numéricas, alfabéticas, matrices y diagramas abstractos." },
          { title: "Analogías y relaciones verbales", detail: "Reconocer vínculos lógicos, metáforas entre distintos conceptos e ideas." },
        ],
      },
      {
        name: "Español",
        label: "Lengua",
        description: "Evalúa tu comprensión lectora, vocabulario y el uso correcto de las reglas de redacción.",
        time: "Según formato oficial",
        scoreRange: "College Board",
        activities: [
          { title: "Comprensión lectora", detail: "Identificar la idea principal y las conclusiones de textos breves." },
          { title: "Redacción y ortografía", detail: "Corregir errores de puntuación, concordancia y uso de nexos." },
        ],
      },
      {
        name: "Matemáticas",
        label: "Matemáticas",
        description: "Evalúa aritmética, álgebra y geometría aplicadas a la resolución de problemas.",
        time: "Según formato oficial",
        scoreRange: "College Board",
        activities: [
          { title: "Aritmética y álgebra", detail: "Operaciones, proporciones, ecuaciones y expresiones algebraicas." },
          { title: "Geometría y datos", detail: "Figuras, áreas y lectura de tablas y gráficas." },
        ],
      },
      {
        name: "Inglés",
        label: "Inglés",
        description: "Evalúa vocabulario, gramática y comprensión lectora en inglés.",
        time: "Según formato oficial",
        scoreRange: "College Board",
        activities: [
          { title: "Gramática y vocabulario", detail: "Completar enunciados con estructuras y vocabulario adecuados." },
          { title: "Reading comprehension", detail: "Responder preguntas sobre textos breves en inglés." },
        ],
      },
    ],
  },
  {
    slug: "act",
    exam: "ACT",
    fullName: "American College Testing",
    headline: "Curso ACT",
    accent: "¡garantizado!",
    subheadline:
      "Clases en vivo 1 a 1, simulacros cronometrados y profesores expertos para conseguir la beca en las mejores universidades de Estados Unidos y el extranjero.",
    description:
      "Curso ACT para admisión y becas en universidades de Estados Unidos: clases personalizadas 1 a 1, simulacros cronometrados y garantía de +4 puntos.",
    metaTitle: "Curso ACT Garantizado | +4 Puntos o Devolución del 100%",
    metaDescription:
      "Prepara el ACT con clases 1 a 1, simulacros cronometrados y garantía de +4 puntos sobre tu diagnóstico. Planes desde $2,490 MXN.",
    audience: "Estudiantes que buscan admisión o becas en universidades de Estados Unidos y el extranjero.",
    guarantee: "+4 puntos garantizados sobre tu diagnóstico inicial, o te devolvemos el 100% de tu inversión.",
    priceMXN: 2490,
    priceFromMXN: 2490,
    priceToMXN: 29000,
    sessions: 20,
    exercises: 3000,
    evaluations: 20,
    hours: 60,
    scoreScale: "1-36",
    skills: [
      { name: "Inglés", detail: "Gramática, puntuación, estructura de oraciones y estrategia retórica." },
      { name: "Matemáticas", detail: "Álgebra, geometría, funciones y trigonometría básica." },
      { name: "Lectura", detail: "Comprensión de pasajes de ficción, humanidades y ciencias sociales." },
      { name: "Ciencias", detail: "Interpretación de datos, diseño experimental y razonamiento científico." },
    ],
    outcomes: [
      "Composite Score competitivo para admisión y becas",
      "Dominio de las secciones obligatorias del examen",
      "Simulacros cronometrados bajo condiciones reales",
      "Estrategia personalizada por sección",
    ],
    features: [
      { title: "Materiales de estudio", detail: "Acceso a guías actualizadas al nuevo formato del ACT, bancos de preguntas y resúmenes estratégicos por sección." },
      { title: "Simuladores reales", detail: "Practica en un entorno idéntico al examen oficial en computadora, con temporizador estricto para dominar el ritmo del examen." },
      { title: "Expertos en el examen", detail: "Profesores especializados en admisión universitaria internacional que te enseñan técnicas de descarte y gestión del tiempo." },
      { title: "Garantía de puntaje", detail: "Garantizamos +4 puntos sobre tu puntaje diagnóstico inicial o te devolvemos el 100% de tu inversión." },
    ],
    faqs: [
      { q: "¿Qué incluye el programa de preparación para el examen ACT?", a: "Incluye examen diagnóstico inicial, plan de estudio a la medida, clases en vivo 1 a 1 con profesores especialistas, acceso 24/7 a la plataforma con más de 5,000 ejercicios, 20 simuladores cronometrados y entrenamiento opcional para Science y Writing si tu universidad los requiere." },
      { q: "¿Cómo se estructura y califica el examen ACT?", a: "El examen base dura 2 horas y 5 minutos e incluye tres secciones obligatorias: English, Mathematics y Reading. Cada sección se califica del 1 al 36, y su promedio forma tu Composite Score (1–36). Las secciones de Science (1–36) y Writing (2–12) son opcionales y se reportan por separado." },
      { q: "¿Cómo funciona la garantía de +4 puntos?", a: "Al iniciar realizas un simulacro diagnóstico que define tu puntaje base. Si asistes a tus clases, completas las prácticas asignadas y en tu examen oficial no mejoras al menos +4 puntos en tu Composite Score, te devolvemos el 100 % de tu inversión." },
      { q: "¿Qué es el ACT Superscore y cómo me beneficia?", a: "El Superscore es el promedio de tus puntajes más altos en cada sección a través de distintas fechas en las que hayas presentado el ACT. Muchas universidades aceptan el Superscore, lo que te permite enfocarte en subir secciones específicas sin arriesgar tus mejores resultados previos." },
    ],
    heroImage: { src: "/images/act/hero.webp", width: 2541, height: 1221 },
    guideImage: "/images/act/preparacion-1.webp",
    guaranteeImage: "/images/act/preparacion-2.webp",
    skillsImage: "/images/act/domina.webp",
    faqImage: "/images/act/laptop.webp",
    academicIntro:
      "Asegura tu ingreso y beca universitaria. Evaluamos tu nivel inicial en el ACT y diseñamos un plan de estudio enfocado en maximizar tu Composite Score y tu Superscore.",
    examSections: [
      {
        name: "Inglés",
        label: "English",
        description: "Evalúa tu dominio de la gramática estándar, puntuación, claridad retórica y estructura de textos académicos en inglés.",
        time: "~35 min",
        scoreRange: "1-36",
        activities: [
          { title: "Gramática y puntuación", detail: "Corregir estructura de oraciones, concordancia, tiempos verbales." },
          { title: "Producción escrita y retórica", detail: "Mejorar la organización, cohesión, tono y desarrollo lógico de párrafos completos." },
        ],
      },
      {
        name: "Matemáticas",
        label: "Mathematics",
        description: "Mide tu razonamiento matemático desde preálgebra hasta trigonometría con problemas aplicados, con el uso de calculadora.",
        time: "~50 min",
        scoreRange: "1-36",
        activities: [
          { title: "Aritmética y álgebra", detail: "Resolver ecuaciones, funciones avanzadas, trigonometría y figuras geométricas." },
          { title: "Estadística y modelado aplicado", detail: "Interpretar probabilidades, porcentajes y problemas matemáticos en contextos reales." },
        ],
      },
      {
        name: "Lectura",
        label: "Reading",
        description: "Pone a prueba tu velocidad y precisión para analizar textos literarios, de ciencias sociales, humanidades y ciencias naturales.",
        time: "~40 min",
        scoreRange: "1-36",
        activities: [
          { title: "Ideas clave", detail: "Identificar el tema central y resumir argumentos dentro de pasajes extensos." },
          { title: "Estructura y puntos de vista", detail: "Analizar el propósito del autor y comparar perspectivas entre distintos textos." },
        ],
      },
      {
        name: "Ciencias",
        label: "Science",
        description: "Evalúa tu razonamiento científico e interpretación de datos en biología, química, física y ciencias de la tierra.",
        time: "~40 min",
        scoreRange: "1-36",
        activities: [
          { title: "Interpretación de datos y gráficas", detail: "Leer tablas, diagramas experimentales y tendencias científicas bajo presión de tiempo." },
          { title: "Evaluación de modelos científicos", detail: "Contrastar hipótesis y evaluar conclusiones basadas en evidencia." },
        ],
      },
      {
        name: "Ensayo",
        label: "Writing",
        description: "Mide tu capacidad para redactar un ensayo argumentativo claro y bien estructurado en inglés a partir de un tema complejo y tres perspectivas distintas.",
        time: "~40 min",
        scoreRange: "2-12",
        activities: [
          { title: "Análisis de perspectivas y tesis", detail: "Evaluar posturas opuestas, definir una tesis sólida y sostenerla con argumentos lógicos." },
          { title: "Organización y estilo académico", detail: "Estructurar introducción, desarrollo y conclusión con vocabulario preciso." },
        ],
      },
    ],
  },
];

export const getProgram = (slug: string) =>
  PROGRAMS.find((p) => p.slug === slug);

/**
 * Cursos cuya landing ya vive en la URL corta `/{slug}/`. Los redirects 301
 * están definidos en `astro.config.mjs` para los 5 cursos; al añadir un slug
 * aquí se dejan de generar sus páginas bajo `/cursos/` (evitando duplicados)
 * y los enlaces internos apuntan a la URL nueva vía `coursePath()`.
 */
export const MIGRATED_COURSE_SLUGS: ReadonlySet<string> = new Set([
  "toefl-ibt",
  "sat",
  "gre",
  "gmat",
  "paa",
]);

/** Ruta pública de la landing de un curso. */
export function coursePath(slug: string): string {
  return MIGRATED_COURSE_SLUGS.has(slug) ? `/${slug}` : `/cursos/${slug}`;
}

/** Ruta pública de la página de precios de un curso. */
export function pricingPath(slug: string): string {
  return MIGRATED_COURSE_SLUGS.has(slug) ? `/${slug}/precio` : `/cursos/${slug}/precios`;
}

/** Ruta pública de la página de testimonios de un curso. */
export function testimonialsPath(slug: string): string {
  return `${coursePath(slug)}/testimonios`;
}
