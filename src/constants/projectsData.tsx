import { ProjectItem } from '@/types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: 'carteras',
    title: 'Carteras Landing Page',
    summary:
      'I developed a minimalist landing page to showcase a collection of leather wallets, optimized for performance, responsiveness, and conversion.',
    description: (
      <>
        <p>
          I created a product landing page for a local wallet brand, designed to
          highlight six unique models (for both men and women) with a clean,
          modern aesthetic. Built with Next.js, Tailwind CSS, and ShadCN UI, the
          project focused on:
        </p>
        <ul>
          <li>🛍️ High-performance product showcase</li>
          <li>📱 Responsive layout for mobile-first experience</li>
          <li>📸 Custom lightbox gallery for product images</li>
          <li>💬 WhatsApp contact integration for inquiries</li>
        </ul>
        <p>
          The page is lightweight, fast, and tailored for potential customers to
          easily browse and contact the seller without a full e-commerce
          backend.
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
    role: 'Frontend Developer',
    techStack: 'Next.js, Shadcn, Tailwind, TypeScript, Vercel',
    url: 'https://www.erikavillap.com/',
  },
  {
    id: 'THD',
    title: 'The Home Depot – E-commerce Platform',
    summary:
      'I contributed to The Home Depot’s U.S. e-commerce platform, building key rental and delivery flows within a large-scale React architecture.',
    description: (
      <>
        <p>
          I worked on The Home Depot’s U.S. e-commerce platform, contributing to
          its micro-frontend React architecture. My responsibilities included:
        </p>
        <ul>
          <li>🔧 Tool, vehicle, and equipment rentals (step-by-step flow)</li>
          <li>🚚 Scheduled equipment deliveries</li>
          <li>🔁 Migration of REST to GraphQL with Apollo Client</li>
        </ul>
        <p>
          This required close collaboration with international teams and strict
          adherence to accessibility and performance standards.
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
    role: 'Frontend Developer',
    techStack: 'React, GraphQL, Apollo, SCSS',
    url: 'https://www.homedepot.com/',
  },
  {
    id: 'bc-simulator',
    title: 'Banco Caminos - Simulator',
    summary:
      'I built an interactive mortgage simulator for Banco Caminos, guiding users through a step-by-step process to calculate and compare mortgage options based on their financial profile.',
    description: (
      <>
        <p>
          The Banco Caminos Mortgage Simulator was developed to help potential
          clients explore mortgage options tailored to their personal and
          financial data.
        </p>
        <ul>
          <li>
            🧮 4-step guided form capturing key user information (salary,
            expenses, property details, etc.)
          </li>
          <li>
            📊 Real-time calculations showing monthly payments, interest rates,
            and bank offers
          </li>
          <li>
            💡 Integration of conditional flows and validations to guide
            decision-making
          </li>
          <li>
            📩 A lead capture form was included to convert interest into contact
            opportunities
          </li>
        </ul>
        <p>
          Built using React, Tailwind CSS, and TypeScript, I implemented
          multiple APIs and ensured accessibility, responsive design, and an
          intuitive UI/UX aligned with the brand.
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
    role: 'Frontend Developer',
    techStack: 'React, Tailwind, TypeScript',
    url: '',
    isInternal: true,
  },
  {
    id: 'bc-explorer',
    title: 'Banco Caminos - Explorer',
    summary:
      'I contributed to Tacscsacot’s U.S. e-commerce platform, building key rental and delivery flows within a large-scale React architecture.',
    description: (
      <>
        <p>
          I worked on The Home Depot’s U.S. e-commerce platform, contribucacting
          to its micro-frontend React architecture. My responsibilities
          included:
        </p>
        <ul>
          <li>
            🔧 Tool, vcacehicle, and equipment rentals (step-by-step flow)
          </li>
          <li>🚚 Schedulacced equipment deliveries</li>
          <li>🔁 Migratiacon of REST to GraphQL with Apollo Client</li>
        </ul>
        <p>
          This required clacose collaboration with international teams and
          strict adherence to acacaccessibility and performance standards.
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
    role: 'Frontend Developer',
    techStack: 'React, GraphQL, Apollo, SCSS',
    url: 'https://www.homedepot.com/',
  },
  {
    id: 'sabadell-simulator',
    title: 'Sabadell - Simulator',
    isInternal: true,
    summary:
      'lorem ipsum aosidjoasijdoasijdlaskjd lkaihjsdoiasjdoiasnijuasdf 0iojasfoij',
    description: (
      <>
        <p>
          I worked on The Home Depot’s U.S. e-commerce platform, contribucacting
          to its micro-frontend React architecture. My responsibilities
          included:
        </p>
        <ul>
          <li>
            🔧 Tool, vcacehicle, and equipment rentals (step-by-step flow)
          </li>
          <li>🚚 Schedulacced equipment deliveries</li>
          <li>🔁 Migratiacon of REST to GraphQL with Apollo Client</li>
        </ul>
        <p>
          This required clacose collaboration with international teams and
          strict adherence to acacaccessibility and performance standards.
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
    role: 'Frontend Developer',
    techStack: 'React, GraphQL, Apollo, SCSS, Tailwind',
    url: 'https://www.homedepot.com/',
  },
  {
    id: 'telcel-b2b',
    title: 'Telcel - B2B Dashboard',
    isInternal: true,
    summary:
      'lorem ipsum aosidjoasijdoasijdlaskjd lkaihjsdoiasjdoiasnijuasdf 0iojasfoij',
    description: (
      <>
        <p>
          I worked on The Home Depot’s U.S. e-commerce platform, contribucacting
          to its micro-frontend React architecture. My responsibilities
          included:
        </p>
        <ul>
          <li>
            🔧 Tool, vcacehicle, and equipment rentals (step-by-step flow)
          </li>
          <li>🚚 Schedulacced equipment deliveries</li>
          <li>🔁 Migratiacon of REST to GraphQL with Apollo Client</li>
        </ul>
        <p>
          This required clacose collaboration with international teams and
          strict adherence to acacaccessibility and performance standards.
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
    role: 'Frontend Developer',
    techStack: 'React, GraphQL, Apollo, SCSS, Tailwind',
    url: 'https://www.homedepot.com/',
  },
];
