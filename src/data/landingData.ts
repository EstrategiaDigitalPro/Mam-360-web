export interface ModuleItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  bgLight: string;
  features: string[];
  mockData: {
    title: string;
    items: string[];
  };
}

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "hijos",
    name: "Mis hijos",
    tagline: "Perfiles, actividades y compromisos",
    description: "Organiza perfiles, actividades, citas y compromisos escolares de tus hijos en un solo lugar.",
    iconName: "Baby",
    color: "#E11D48",
    bgLight: "#FFF1F2",
    features: [
      "Perfiles individuales por cada hijo",
      "Control de horarios escolares y extracurriculares",
      "Registro de citas con pediatras y vacunas",
      "Listas de tareas escolares y eventos importantes"
    ],
    mockData: {
      title: "Compromisos Escolares y Médicos",
      items: [
        "Jueves 15:00 - Entrega proyecto ciencias (Lucas)",
        "Viernes 09:30 - Control pediátrico anual (Sofía)",
        "Lunes 08:00 - Inicio taller de natación"
      ]
    }
  },
  {
    id: "mascotas",
    name: "Mis mascotas",
    tagline: "Salud, vacunas y cuidados",
    description: "Administra información y actividades importantes de tus mascotas: vacunas, visitas al veterinario y recordatorios.",
    iconName: "PawPrint",
    color: "#0D9488",
    bgLight: "#F0FDFA",
    features: [
      "Historial de desparasitación y vacunas",
      "Turnos de peluquería y veterinaria",
      "Control de alimentación y medicamentos",
      "Notas sobre peso y cuidados especiales"
    ],
    mockData: {
      title: "Control de Mascotas",
      items: [
        "18 Nov - Vacuna séxtuple (Max)",
        "Baño y corte de uñas agendado para sábado",
        "Comprar bolsa de alimento seco"
      ]
    }
  },
  {
    id: "pareja",
    name: "Mi pareja",
    tagline: "Tiempo de calidad y acuerdos",
    description: "Comparte y organiza compromisos relacionados con tu pareja, citas especiales y planes en común.",
    iconName: "Heart",
    color: "#C026D3",
    bgLight: "#FDF4FF",
    features: [
      "Agenda de citas para conectar a solas",
      "Metas y proyectos compartidos",
      "Organización de escapadas o fines de semana",
      "Recordatorio de aniversarios y fechas clave"
    ],
    mockData: {
      title: "Tiempo en Pareja",
      items: [
        "Viernes 20:30 - Noche de cine en casa",
        "Revisar presupuesto para vacaciones familiares",
        "Aniversario: reservar restaurante favorito"
      ]
    }
  },
  {
    id: "hogar",
    name: "Mi hogar",
    tagline: "Mantenimiento y pendientes domésticos",
    description: "Organiza tareas, actividades y pendientes domésticos para mantener la casa en orden sin estrés.",
    iconName: "Home",
    color: "#4F46E5",
    bgLight: "#EEF2FF",
    features: [
      "Rutinas de limpieza semanal y profunda",
      "Servicios del hogar y fechas de pago",
      "Mantenimientos programados (filtros, aire, etc.)",
      "Lista de compras de artículos de limpieza"
    ],
    mockData: {
      title: "Tareas y Mantenimiento",
      items: [
        "Martes - Pago de servicios de agua y gas",
        "Limpieza profunda de clósets fin de semana",
        "Llamar al técnico de la lavadora"
      ]
    }
  },
  {
    id: "familia",
    name: "Mi familia",
    tagline: "Reuniones y momentos compartidos",
    description: "Centraliza compromisos y actividades familiares: cumpleaños, celebraciones y visitas a los abuelos.",
    iconName: "Users",
    color: "#EA580C",
    bgLight: "#FFF7ED",
    features: [
      "Calendario de cumpleaños de toda la familia",
      "Planificación de reuniones de fin de semana",
      "Coordinación de visitas con abuelos y tíos",
      "Álbum de recuerdos y tradiciones especiales"
    ],
    mockData: {
      title: "Eventos Familiares",
      items: [
        "Cumpleaños de la Abuela Elena (próx. sábado)",
        "Almuerzo familiar domingo 13:00",
        "Organizar intercambio navideño familiar"
      ]
    }
  },
  {
    id: "trabajo",
    name: "Mi trabajo",
    tagline: "Productividad y proyectos laborales",
    description: "Organiza tus actividades y responsabilidades laborales o de tu emprendimiento con claridad y enfoque.",
    iconName: "Briefcase",
    color: "#0284C7",
    bgLight: "#F0F9FF",
    features: [
      "Bloques de trabajo enfocado y reuniones",
      "Prioridades del día (Regla de las 3 tareas clave)",
      "Proyectos activos y fechas de entrega",
      "Separación clara entre tiempo laboral y familiar"
    ],
    mockData: {
      title: "Prioridades de Trabajo",
      items: [
        "09:30 - Reunión semanal de equipo / clientes",
        "Enviar propuesta final de servicios",
        "Revisar informe de ventas del mes"
      ]
    }
  },
  {
    id: "vida",
    name: "Mi vida",
    tagline: "Tu autocuidado y bienestar personal",
    description: "Reserva espacio para tus citas, actividades personales, metas y momentos de bienestar que tú también mereces.",
    iconName: "Sparkles",
    color: "#D97706",
    bgLight: "#FFFBEB",
    features: [
      "Espacio sagrado para tu tiempo a solas",
      "Citas médicas y chequeos de salud de mamá",
      "Rutina de ejercicio, lectura o descanso",
      "Metas personales y hábitos positivos"
    ],
    mockData: {
      title: "Tiempo para Ti",
      items: [
        "30 min de lectura tranquila con té de manzanilla",
        "Jueves 17:00 - Chequeo médico anual",
        "Clase de yoga o caminata al aire libre"
      ]
    }
  },
  {
    id: "cocina",
    name: "Mi cocina",
    tagline: "Planificación de comidas e ingredientes",
    description: "Registra ingredientes disponibles, consulta ideas prácticas de recetas y organiza comidas y listas de compras.",
    iconName: "UtensilsCrossed",
    color: "#059669",
    bgLight: "#ECFDF5",
    features: [
      "Menú semanal familiar de lunes a domingo",
      "Despensa inteligente e ingredientes en casa",
      "Lista de compras por categorías",
      "Banco de ideas de recetas nutritivas y rápidas"
    ],
    mockData: {
      title: "Menú Semanal Organizado",
      items: [
        "Lunes: Pechugas a la plancha con puré y ensalada",
        "Martes: Pasta con salsa de tomate casera y espinaca",
        "Lista: Comprar aceite de oliva, tomates y avena"
      ]
    }
  },
  {
    id: "calendario",
    name: "Calendario y pendientes",
    tagline: "Vista panorámica de tus compromisos",
    description: "Visualiza tus actividades integradas y organiza tus compromisos diarios, semanales y mensuales.",
    iconName: "CalendarDays",
    color: "#7C3AED",
    bgLight: "#FAF5FF",
    features: [
      "Vista consolidada de todos los frentes de tu vida",
      "Filtro rápido por categoría o miembro de la familia",
      "Lista de pendientes pendientes con casillas de verificación",
      "Planificador semanal claro y sin abrumarte"
    ],
    mockData: {
      title: "Vista de la Semana",
      items: [
        "Hoy: 3 tareas clave completadas",
        "Mañana: 2 compromisos familiares programados",
        "Fin de semana libre para disfrutar sin apuros"
      ]
    }
  }
];

export const PROBLEM_SITUATIONS = [
  {
    number: "01",
    title: "El pendiente escolar olvidado",
    description: "Estás en medio del trabajo y de repente recuerdas con angustia que debías enviar la cartulina o el disfraz al colegio.",
    icon: "AlertCircle"
  },
  {
    number: "02",
    title: "La cita médica que se pasó",
    description: "Con tantas fechas y obligaciones en mente, olvidas la fecha del control pediátrico o la vacuna de uno de tus hijos.",
    icon: "Clock"
  },
  {
    number: "03",
    title: "La actividad familiar perdida",
    description: "No recuerdas con certeza qué día o a qué hora debías asistir a la reunión familiar o al evento del fin de semana.",
    icon: "CalendarX"
  },
  {
    number: "04",
    title: "El caos entre casa y trabajo",
    description: "Tienes los pendientes domésticos mezclados con los compromisos laborales, sin saber qué atender primero.",
    icon: "Layers"
  },
  {
    number: "05",
    title: "El dilema diario de las comidas",
    description: "Llega la hora del almuerzo o la cena, no sabes qué preparar y terminas improvisando con estrés y sobrecostos.",
    icon: "HelpCircle"
  },
  {
    number: "06",
    title: "Tú siempre al final de la lista",
    description: "Siempre encuentras tiempo y energía para atender a los demás, pero tus momentos de descanso y cuidado personal quedan olvidados.",
    icon: "HeartCrack"
  }
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "¿Qué es Mamá 360?",
    answer: "Mamá 360 es una mini aplicación práctica, visual y fácil de utilizar, creada para ayudarte a organizar los diferentes aspectos de tu vida familiar, laboral y personal desde un solo lugar. Reúne en un único espacio tus hijos, mascotas, hogar, pareja, trabajo, cocina, autocuidado y calendario."
  },
  {
    id: "faq-2",
    question: "¿Cómo recibo mi mini aplicación después de comprar?",
    answer: "Inmediatamente después de confirmarse tu pago, la plataforma Hotmart te enviará un correo electrónico con los datos de acceso e instrucciones sencillas para comenzar a utilizar tu mini aplicación de inmediato en tus dispositivos."
  },
  {
    id: "faq-3",
    question: "¿Puedo utilizarla desde mi celular, tablet o computador?",
    answer: "Sí. Mamá 360 es 100% responsive y está diseñada para funcionar con fluidez en navegadores web de celulares (Android e iOS), tablets y computadores de escritorio o portátiles, sin instalaciones complicadas."
  },
  {
    id: "faq-4",
    question: "¿Tengo que pagar una mensualidad?",
    answer: "No. El acceso a Mamá 360 es un pago único de solo US$9.97. No existen mensualidades, cobros recurrentes ni suscripciones ocultas por el acceso adquirido."
  },
  {
    id: "faq-5",
    question: "¿Puedo organizar varios hijos y mascotas?",
    answer: "¡Por supuesto! La mini aplicación te permite crear y administrar perfiles y listas independientes para cada uno de tus hijos y para todas tus mascotas, manteniendo sus registros organizados individualmente."
  },
  {
    id: "faq-6",
    question: "¿Cómo funciona Katy?",
    answer: "Katy es la asistente virtual ilustrada que te acompaña dentro de Mamá 360. Te da una cálida bienvenida, te guía en los diferentes módulos y te ofrece recordatorios visuales amables para que la experiencia sea más cercana y agradable."
  },
  {
    id: "faq-7",
    question: "¿La aplicación envía recordatorios por WhatsApp?",
    answer: "No. Mamá 360 no envía mensajes ni recordatorios a través de WhatsApp. Toda la organización y tus listas se gestionan directamente dentro de la interfaz de la mini aplicación."
  },
  {
    id: "faq-8",
    question: "¿Mis datos se guardan en la nube?",
    answer: "En esta versión inicial, tus datos se guardan de forma privada y local en el navegador de tu propio dispositivo. No se transmiten a servidores remotos propios, garantizando la privacidad de tu información familiar."
  },
  {
    id: "faq-9",
    question: "¿Puedo recuperar mis datos si cambio de dispositivo?",
    answer: "Dado que la información se almacena localmente en el navegador, si borras los datos de navegación o cambias de dispositivo sin una copia de seguridad, los datos no se sincronizan automáticamente. La mini aplicación incluye una función práctica para exportar e importar tu copia de seguridad cuando lo necesites."
  },
  {
    id: "faq-10",
    question: "¿Qué incluyen los bonos?",
    answer: "Incluye dos eBooks completos de formación familiar: 1) 'Niños Ricos, Padres Sabios' (guía para educar en mentalidad y finanzas saludables a tus hijos) y 2) 'Crianza con amor y límites' (herramientas prácticas para educar con respeto y límites claros). Ambos están incluidos de regalo con tu compra."
  },
  {
    id: "faq-11",
    question: "¿Cómo puedo comercializar Mamá 360?",
    answer: "Al adquirir Mamá 360 recibes el derecho de solicitar tu afiliación al producto en la plataforma de Hotmart. Una vez aprobada tu afiliación, obtendrás tu enlace personal para recomendarlo a otras mamás y emprendedoras."
  },
  {
    id: "faq-12",
    question: "¿Cómo funciona la comisión del 50%?",
    answer: "Por cada venta realizada a través de tu enlace de afiliada en Hotmart y debidamente atribuida según las reglas de la plataforma, recibirás el 50% del valor neto de la comisión directamente en tu cuenta de Hotmart, conforme a las políticas de liquidación del programa."
  },
  {
    id: "faq-13",
    question: "¿Qué sucede si no estoy satisfecha con la compra?",
    answer: "Cuentas con una garantía incondicional de 7 días. Si dentro de ese periodo consideras que Mamá 360 no cumple con tus expectativas, puedes solicitar el reembolso del 100% de tu dinero directamente a través del sistema de garantías de Hotmart, sin complicaciones."
  }
];

export const LEGAL_TEXTS = {
  terms: `
    <h3>Términos y Condiciones de Uso</h3>
    <p><strong>Última actualización: Noviembre 2026</strong></p>
    <p>Bienvenida a Mamá 360 – Mini Aplicación, un producto digital desarrollado y comercializado por Estrategia Digital Pro. Al adquirir y utilizar este producto, aceptas los presentes términos y condiciones.</p>
    <h4>1. Naturaleza del Producto</h4>
    <p>Mamá 360 es una herramienta digital de organización personal y familiar en formato de mini aplicación web. No constituye ni sustituye asesoramiento médico, psicológico, legal, pedagógico ni financiero profesional.</p>
    <h4>2. Licencia de Uso</h4>
    <p>La compra de Mamá 360 otorga una licencia de uso personal, no transferible e individual. Queda prohibida la reproducción, piratería o distribución no autorizada de los códigos fuente, diseños y manuales.</p>
    <h4>3. Almacenamiento Local de Datos</h4>
    <p>La versión actual de la mini aplicación almacena los datos introducidos por la usuaria de manera local en la memoria y almacenamiento de su propio navegador web (LocalStorage / IndexedDB). La usuaria es responsable de mantener copias de seguridad de sus datos y de evitar el borrado masivo de caché si desea conservarlos.</p>
    <h4>4. Programa de Afiliados</h4>
    <p>El derecho a comercializar Mamá 360 como afiliada se rige estrictamente por los términos, requisitos y políticas operativas de la plataforma Hotmart. La comisión del 50% aplica sobre las ventas válidamente atribuidas.</p>
  `,
  privacy: `
    <h3>Política de Privacidad</h3>
    <p><strong>Compromiso de Privacidad de Estrategia Digital Pro</strong></p>
    <p>En Estrategia Digital Pro respetamos profundamente la intimidad de tu hogar y tu familia. Por esta razón, el diseño de Mamá 360 prioriza la privacidad desde su arquitectura base:</p>
    <h4>1. Almacenamiento Local</h4>
    <p>Mamá 360 no vende tus datos personales ni almacena la información que introduces sobre tus hijos, tareas, mascotas o rutinas en servidores remotos propios. Los datos permanecen guardados en el almacenamiento local de tu navegador.</p>
    <h4>2. Transacciones y Pagos</h4>
    <p>El proceso de compra, cobro y facturación se realiza de manera 100% segura y encriptada a través de Hotmart. Estrategia Digital Pro no tiene acceso a tus números de tarjeta de crédito ni claves bancarias.</p>
    <h4>3. Comunicaciones</h4>
    <p>Tu correo electrónico suministrado durante la compra en Hotmart se utilizará exclusivamente para el envío de tus accesos de compra, actualizaciones relevantes del producto y soporte técnico.</p>
  `,
  refund: `
    <h3>Garantía y Política de Devoluciones</h3>
    <p><strong>Garantía de Satisfacción de 7 Días</strong></p>
    <p>Queremos que adquieras Mamá 360 con absoluta tranquilidad y confianza. Por eso, tu compra cuenta con una garantía de 7 días naturales a partir de la fecha de pago.</p>
    <h4>¿Cómo solicitar tu reembolso?</h4>
    <p>Si dentro de los primeros 7 días consideras que Mamá 360 no es lo que esperabas, puedes solicitar la devolución del 100% de tu dinero directamente a través del portal de ayuda y reembolsos de Hotmart (reembolso.hotmart.com) o escribiéndonos a nuestro correo de soporte con tu número de transacción.</p>
    <p>El proceso es automático y gestionado conforme a las políticas oficiales de protección al comprador de Hotmart.</p>
  `
};
