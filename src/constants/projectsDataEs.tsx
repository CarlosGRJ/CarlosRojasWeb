import { ProjectItem } from '@/types/portfolio';

export const projectsEsp: ProjectItem[] = [
  {
    id: 'carteras',
    title: 'Carteras Landing Page',
    summary:
      'Desarrollé una landing page minimalista para exhibir una colección de carteras de piel, optimizada para rendimiento, responsividad y conversión.',
    description: (
      <>
        <p>
          Creé una landing page de producto para una marca local de carteras,
          diseñada para resaltar 8 modelos únicos (para hombre y mujer) con una
          estética moderna y limpia. Construido con Next.js, Tailwind CSS y
          ShadCN UI, el proyecto se enfocó en:
        </p>
        <ul>
          <li>🛍️ Exhibición de productos con alto rendimiento</li>
          <li>📱 Diseño responsivo optimizado para móviles</li>
          <li>📸 Galería personalizada con lightbox para imágenes</li>
          <li>💬 Integración con WhatsApp para facilitar consultas</li>
        </ul>
        <p>
          La página es ligera, rápida y pensada para que los clientes
          potenciales puedan navegar fácilmente y contactar al vendedor, sin
          necesidad de un backend de e-commerce completo.
        </p>
      </>
    ),
    coverImg: '/images/projects/Carteras/home.webp',
    images: [
      {
        src: '/images/projects/Carteras/home.webp',
        alt: 'Carteras Home Page',
      },
      {
        src: '/images/projects/Carteras/woman-1.webp',
        alt: 'Carteras Woman 1 Page',
      },
      {
        src: '/images/projects/Carteras/woman-2.webp',
        alt: 'Carteras Woman 2 Page',
      },
      {
        src: '/images/projects/Carteras/woman-3.webp',
        alt: 'Carteras Woman 3 Page',
      },
      {
        src: '/images/projects/Carteras/man-1.webp',
        alt: 'Carteras Man 1 Page',
      },
      {
        src: '/images/projects/Carteras/man-2.webp',
        alt: 'Carteras Man 2 Page',
      },
      {
        src: '/images/projects/Carteras/man-3.webp',
        alt: 'Carteras Man 3 Page',
      },
      {
        src: '/images/projects/Carteras/contact.webp',
        alt: 'Carteras Contact Page',
      },
      {
        src: '/images/projects/Carteras/footer.webp',
        alt: 'Carteras Footer',
      },
    ],
    role: 'Desarrollador Frontend',
    techStack: 'Next.js, Shadcn, Tailwind, TypeScript, Vercel',
    url: 'https://www.erikavillap.com/',
  },
  {
    id: 'THD',
    title: 'The Home Depot – E-commerce Platform',
    summary:
      'Contribuí al desarrollo de la plataforma de e-commerce de The Home Depot en Estados Unidos, creando flujos clave de renta y entrega dentro de una arquitectura React a gran escala.',
    description: (
      <>
        <p>
          Trabajé en la plataforma de e-commerce de The Home Depot en Estados
          Unidos, colaborando en su arquitectura React basada en
          micro-frontends. Mis responsabilidades incluyeron:
        </p>

        <ul>
          <li>
            🔧 Flujos paso a paso para la renta de herramientas, vehículos y
            equipos
          </li>
          <li>🚚 Implementación de entregas programadas de equipos</li>
          <li>🔁 Migración de REST a GraphQL utilizando Apollo Client</li>
        </ul>

        <p>
          Este trabajo requirió una estrecha colaboración con equipos
          internacionales y el cumplimiento estricto de estándares de
          accesibilidad y rendimiento.
        </p>
      </>
    ),
    coverImg: '/images/projects/THD/THD_home.webp',
    images: [
      {
        src: '/images/projects/THD/THD_home.webp',
        alt: 'LE rental Page',
      },
      {
        src: '/images/projects/THD/THD_LE_Rental.webp',
        alt: 'LE rental Page',
      },
      {
        src: '/images/projects/THD/THD_LE_Rental_grid.webp',
        alt: 'Rental LE Grid',
      },
      {
        src: '/images/projects/THD/THD_LE_Check_Availability_Grid.webp',
        alt: 'Rental LE Grid',
      },
      {
        src: '/images/projects/THD/THD_Product_info.webp',
        alt: 'Product Info Page',
      },
      {
        src: '/images/projects/THD/THD_Reserv_Summary.webp',
        alt: 'Reservation Sumary',
      },
      {
        src: '/images/projects/THD/THD_Check_Availavility.webp',
        alt: 'Check availability',
      },
      {
        src: '/images/projects/THD/THD_Checkout.webp',
        alt: 'Checkout',
      },
      {
        src: '/images/projects/THD/THD_T&C.webp',
        alt: 'Checkout',
      },
    ],
    role: 'Desarrollador Frontend',
    techStack:
      'React, GraphQL, Apollo, SCSS, Tailwind, Jest, React Testing Library',
    url: 'https://www.homedepot.com/',
  },
  {
    id: 'bc-simulator',
    title: 'Banco Caminos - Simulator',
    summary:
      'Desarrollé un simulador hipotecario interactivo para Banco Caminos, guiando a los usuarios en un proceso paso a paso para calcular y comparar opciones de hipoteca según su perfil financiero.',
    description: (
      <>
        <p>
          El Simulador Hipotecario de Banco Caminos fue creado para ayudar a
          potenciales clientes a explorar opciones de hipoteca personalizadas
          según sus datos personales y financieros.
        </p>

        <ul>
          <li>
            🧮 Formulario guiado en 4 pasos que captura información clave del
            usuario (salario, gastos, detalles de la propiedad, etc.)
          </li>
          <li>
            📊 Cálculos en tiempo real mostrando mensualidades, tasas de interés
            y ofertas bancarias
          </li>
          <li>
            💡 Integración de flujos condicionales y validaciones para guiar la
            toma de decisiones
          </li>
          <li>
            📩 Formulario de captura de leads para convertir el interés en
            oportunidades de contacto
          </li>
        </ul>

        <p>
          Desarrollado con React, Tailwind CSS y TypeScript, implementé
          múltiples APIs asegurando accesibilidad, diseño responsivo y una
          experiencia de usuario intuitiva alineada con la marca.
        </p>
      </>
    ),
    coverImg: '/images/projects/Banco_Caminos/Simulator/step1.webp',
    images: [
      {
        src: '/images/projects/Banco_Caminos/Simulator/step1.webp',
        alt: 'BC step1',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step2.webp',
        alt: 'BC step2',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step3.webp',
        alt: 'BC step3',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step4_1.webp',
        alt: 'BC step4_1',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step4_2.webp',
        alt: 'BC step4_2',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step4_3.webp',
        alt: 'BC step4_3',
      },
    ],
    role: 'Desarrollador Frontend',
    techStack:
      'React, TypeScript, SCSS, Tailwind, i18n, Jest, React Testing Library',
    url: '',
    isInternal: true,
  },
  {
    id: 'bc-explorer',
    title: 'Banco Caminos - Explorer',
    summary:
      'Contribuí a la herramienta de exploración de propiedades de Banco Caminos, implementando componentes dinámicos como tablas, gráficas y modales interactivos para mejorar la experiencia del usuario.',
    description: (
      <>
        <p>
          Trabajé en la aplicación de exploración inmobiliaria de Banco Caminos,
          la cual permite a los usuarios buscar y analizar propiedades
          disponibles en toda España. Mis contribuciones incluyeron:
        </p>
        <ul>
          <li>
            📍 Búsqueda de propiedades por ubicación con tablas filtrables
          </li>
          <li>
            🗺️ Integración con mapas interactivos para visualizar la ubicación
            de las propiedades
          </li>
          <li>
            📊 Gráficas de evolución de precios que muestran tendencias
            históricas por propiedad
          </li>
          <li>
            🪟 Modales reutilizables y banners con información detallada de cada
            propiedad
          </li>
        </ul>
        <p>
          El proyecto implicó colaboración con equipos backend para conectar los
          datos al frontend, con enfoque en la usabilidad y el rendimiento
          utilizando React y TypeScript.
        </p>
      </>
    ),
    coverImg: '/images/projects/Banco_Caminos/Explorer/explorer1.webp',
    images: [
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer1.webp',
        alt: 'BC step1',
      },
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer2.webp',
        alt: 'BC step1',
      },
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer_mobile1.webp',
        alt: 'BC step2',
      },
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer_mobile2.webp',
        alt: 'BC step3',
      },
    ],
    role: 'Desarrollador Frontend',
    techStack:
      'React, TypeScript, SCSS, Tailwind, i18n, Jest, React Testing Library',
    isInternal: true,
    url: '',
  },
  {
    id: 'sabadell-simulator',
    title: 'Banco Sabadell – Mortgage Simulator',
    isInternal: true,
    summary:
      'Desarrollé componentes clave de un simulador hipotecario para Banco Sabadell, basado en un producto reutilizable diseñado para adaptarse a múltiples bancos.',
    description: (
      <>
        <p>
          Trabajé en el proyecto de un simulador hipotecario para Banco
          Sabadell, construido sobre las mismas bases que la herramienta de
          exploración inmobiliaria de Banco Caminos. Este simulador permitía a
          los usuarios calcular y visualizar opciones hipotecarias basadas en
          datos de propiedad e información financiera. Mis contribuciones
          incluyeron:
        </p>

        <ul>
          <li>
            📊 Componentes dinámicos de gráficas y tablas para mostrar los
            resultados de la simulación
          </li>
          <li>
            🧩 Arquitectura modular de componentes para reutilizar el producto
            en distintos bancos
          </li>
          <li>
            🔁 Adaptación de lógica compartida desde una herramienta
            inmobiliaria previa
          </li>
          <li>⚙️ Desarrollado completamente en Angular y TypeScript</li>
        </ul>

        <p>
          Este simulador se convirtió en un producto base reutilizable que
          posteriormente fue adaptado para otros bancos, con un fuerte enfoque
          en escalabilidad, experiencia de usuario y visualización de datos.
        </p>
      </>
    ),
    coverImg: '/images/projects/Sabadell/Simulator/step1.webp',
    images: [
      {
        src: '/images/projects/Sabadell/Simulator/step1.webp',
        alt: 'Sabadell step1',
      },
      {
        src: '/images/projects/Sabadell/Simulator/step2.webp',
        alt: 'Sabadell step2',
      },
      {
        src: '/images/projects/Sabadell/Simulator/step3.webp',
        alt: 'Sabadell step3',
      },
      {
        src: '/images/projects/Sabadell/Simulator/step4.webp',
        alt: 'Sabadell step4',
      },
      {
        src: '/images/projects/Sabadell/Simulator/step5.webp',
        alt: 'Sabadell step5',
      },
    ],
    role: 'Desarrollador Frontend',
    techStack:
      'Angular, Tailwind, TypeScript, i18n, Jasmine, Karma, Custom Components',
    url: '',
  },
  {
    id: 'telcel-b2b',
    title: 'Telcel - B2B Dashboard',
    isInternal: true,
    summary:
      'Lideré un equipo de 7 desarrolladores para construir desde cero el panel administrativo B2B de Telcel, implementando metodología Scrum y diseñando la arquitectura del proyecto.',
    description: (
      <>
        <p>
          En Telcel B2B, colaboré como líder del equipo de frontend para
          desarrollar un panel administrativo corporativo. La aplicación formaba
          parte de un ecosistema más amplio utilizado para gestionar la lógica
          de negocio interna de Telcel enfocada en clientes corporativos. Mis
          responsabilidades clave incluyeron:
        </p>

        <ul>
          <li>
            🚀 Configuración del proyecto desde cero: arquitectura, estructura
            de carpetas y coordinación de CI
          </li>
          <li>
            👥 Liderazgo de un equipo de 7 desarrolladores frontend sin Scrum
            Master asignado
          </li>
          <li>
            📋 Definición del proceso Scrum: creación de épicas, backlog items y
            planificación de sprints
          </li>
          <li>
            📑 Documentación de lógica de negocio y gestión de APIs con Postman
          </li>
          <li>
            🧩 Desarrollo de formularios complejos y flujos integrados con otros
            sistemas internos de Telcel
          </li>
        </ul>

        <p>
          Este proyecto requirió sólidas habilidades de coordinación, profundo
          conocimiento técnico y comunicación entre equipos para asegurar una
          integración consistente entre múltiples aplicaciones dentro del
          ecosistema de Telcel.
        </p>
      </>
    ),
    coverImg: '/images/projects/Telcel/B2B/1-Login.webp',
    images: [
      {
        src: '/images/projects/Telcel/B2B/1-Login.webp',
        alt: 'Login B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/2-Home.webp',
        alt: 'Home B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/3-Menu.webp',
        alt: 'Menu B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/4-Identificacion.webp',
        alt: 'Identificacion B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/5-Identificacion_2.webp',
        alt: 'Identificacion_2 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/6-Retoma_tramite.webp',
        alt: 'Retoma_tramite B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/7-Acti_step1.webp',
        alt: 'Acti_step1 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/8-Acti_step1_2.webp',
        alt: 'Acti_step1_2 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/9-Acti_step2.webp',
        alt: 'Acti_step2 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/10-Acti_step2_buro_de_credito.webp',
        alt: 'Acti_step2_buro_de_credito B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/11-Acti_step2_Carta_autorizacion_buro_credito.webp',
        alt: 'Acti_step2_Carta_autorizacion_buro_credito B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/12-Consulta_CCS1.webp',
        alt: 'Consulta_CCS1 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/13-Resumen_CCS1.webp',
        alt: 'Resumen_CCS1 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/14-Acti_step3_seleccion_oferta.webp',
        alt: 'Acti_step3_seleccion_oferta B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/15-Servicios_adicionales.webp',
        alt: 'Servicios_adicionales B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/16-Acti_step3_equipo.webp',
        alt: 'Acti_step3_equipo B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/17-Acti_step3_numero.webp',
        alt: 'Acti_step3_numero B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/18-Acti_step4.webp',
        alt: 'Acti_step4 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/19-Acti_sttep5.webp',
        alt: 'Acti_sttep5 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/20-Acti_step5-2.webp',
        alt: 'Acti_step5-2 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/21-Acti_step5-3.webp',
        alt: 'Acti_step5-3 B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/22-Aci_step5_Resumn_CCS_FINAL.webp',
        alt: 'Aci_step5_Resumn_CCS_FINAL B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/23-Fin_tramite.webp',
        alt: 'Fin_tramite B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/24-Bandeja_tramites.webp',
        alt: 'Bandeja_tramites B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/25-Verificaciones.webp',
        alt: 'Verificaciones B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/26-Verificaciones_seguimiento.webp',
        alt: 'Verificaciones_seguimiento B2B',
      },
      {
        src: '/images/projects/Telcel/B2B/27-Consulta-Tramites.webp',
        alt: 'Consulta-Tramites B2B',
      },
    ],
    role: 'Líder de Equipo Frontend',
    techStack:
      'Angular, RxJS, TypeScript, Jasmine, Karma, PrimeNG, Tailwind, SCSS',
    url: '',
  },
];
