import { ProjectItem } from '@/types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: 'landing-ecommerce',
    title: 'Landing Page Arigio Audio e Iluminación',
    summary:
      'I designed and developed a modern landing page for Arigio Audio e Iluminación, focused on clear and attractive presentation of professional audio and lighting products.',
    description: (
      <>
        <p>
          This landing page was created to showcase the product catalog of a
          company specializing in professional solutions for audio, lighting,
          trussing, and visual effects. The site was designed to facilitate
          navigation and highlight the main product categories.
        </p>
        <ul>
          <li>🔊 Visual showcase of products categorized by type</li>
          <li>⚡️ Optimized loading with WebP image format</li>
          <li>🎯 Intuitive navigation with responsive design</li>
          <li>🔒 Protection with Cloudflare and SEO optimization</li>
          <li>📱 Direct contact button via WhatsApp</li>
        </ul>
        <p>
          The goal was to create a smooth user experience for potential
          customers interested in buying equipment, prioritizing
          performance, content clarity, and conversions—without the need for a
          full e-commerce backend.
        </p>
      </>
    ),
    coverImg:
      'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200906/01-home_vzormu.webp',
    images: [
      {
        src: 'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200906/01-home_vzormu.webp',
        alt: 'Arigio Audio Home Page',
      },
      {
        src: 'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200907/02-categories-section_c2rmir.webp',
        alt: 'Arigio Audio Categories Section',
      },
      {
        src: 'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200905/03-products-section_r9bir4.webp',
        alt: 'Arigio Audio Products Section',
      },
      {
        src: 'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200904/04-contact-section_x4wdg0.webp',
        alt: 'Arigio Audio Contact Section',
      },
      {
        src: 'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200904/05-google-map_yqptdd.webp',
        alt: 'Arigio Audio Google Map Section',
      },
      {
        src: 'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200907/06-search-page_hcleva.webp',
        alt: 'Arigio Audio Search Page',
      },
      {
        src: 'https://res.cloudinary.com/ddw9cg3ds/image/upload/v1754200904/07-product-page_ocrao9.webp',
        alt: 'Arigio Audio Product Page',
      },
    ],
    role: 'Full Stack Developer',
    techStack: 'Next.js, Shadcn, Tailwind, TypeScript, Vercel, Cloudflare',
    url: 'https://www.arigioaudioeiluminacion.com.mx/',
  },
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
    techStack:
      'React, GraphQL, Apollo, SCSS, Tailwind, Jest, React Testing Library',
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
    techStack:
      'React, TypeScript, SCSS, Tailwind, i18n, Jest, React Testing Library',
    url: '',
    isInternal: true,
  },
  {
    id: 'bc-explorer',
    title: 'Banco Caminos - Explorer',
    summary:
      'I contributed to Banco Caminos’ property explorer tool, implementing dynamic components like tables, charts, and interactive modals to enhance the user experience.',
    description: (
      <>
        <p>
          I worked on Banco Caminos’ real estate explorer app, which allows
          users to search and analyze available properties throughout Spain. My
          contributions included:
        </p>
        <ul>
          <li>📍 Location-based property search with filterable tables</li>
          <li>
            🗺️ Interactive map integration for visualizing property positions
          </li>
          <li>
            📊 Price evolution charts showing historical trends per property
          </li>
          <li>🪟 Reusable modals and property info banners</li>
        </ul>
        <p>
          The project involved collaborating with backend teams to connect data
          to the UI, focusing on usability and performance in React and
          TypeScript.
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
      'I developed key components of a mortgage simulator for Banco Sabadell, based on a reusable product designed to be adapted for multiple banks.',
    description: (
      <>
        <p>
          I worked on a mortgage simulator project for Banco Sabadell, built on
          the same foundations as the Banco Caminos property explorer. This
          simulator helped users calculate and visualize mortgage options based
          on property data and financial inputs. My contributions included:
        </p>

        <ul>
          <li>
            📊 Dynamic chart and table components to display simulation results
          </li>
          <li>
            🧩 Modular component architecture for product reuse across banks
          </li>
          <li>
            🔁 Adaptation of shared logic from a previous real estate tool
          </li>
          <li>⚙️ Built entirely using Angular and TypeScript</li>
        </ul>

        <p>
          This simulator became a reusable base product that was later adapted
          for other banks, with a strong focus on scalability, user experience,
          and data-driven visualization.
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
    techStack:
      'Angular, Tailwind, TypeScript, i18n, Jasmine, Karma, Custom Components',
    url: '',
  },
  {
    id: 'telcel-b2b',
    title: 'Telcel - B2B Dashboard',
    isInternal: true,
    summary:
      'Led a team of 7 developers to build Telcel’s B2B admin dashboard from scratch, implementing Scrum methodology and designing the project architecture.',
    description: (
      <>
        <p>
          At Telcel B2B, I collaborated as a front-end team lead to develop a
          corporate-facing admin dashboard. The application was part of a larger
          ecosystem used to manage Telcel’s internal business logic for
          corporate clients. My key responsibilities included:
        </p>

        <ul>
          <li>
            🚀 Project setup from scratch: architecture, folder structure, and
            CI coordination
          </li>
          <li>
            👥 Leadership of a 7-person front-end team with no dedicated Scrum
            Master
          </li>
          <li>
            📋 Defined Scrum processes: created epics, backlog items, and
            coordinated sprint planning
          </li>
          <li>
            📑 Business logic documentation and API management using Postman
          </li>
          <li>
            🧩 Developed complex forms and flows that integrated with other
            Telcel internal systems
          </li>
        </ul>

        <p>
          This project required strong coordination skills, deep technical
          knowledge, and cross-team communication to ensure consistent
          integration across multiple apps within Telcel’s ecosystem.
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
    techStack:
      'Angular, RxJS, TypeScript, Jasmine, Karma, PrimeNG, Tailwind, SCSS',
    url: '',
  },
  {
    id: 'old-portfolio',
    title: 'My First Portfolio Website',
    summary:
      'My first personal portfolio built with React, showcasing early projects and creative animations.',
    description: (
      <>
        <p>
          This was the first version of my personal portfolio, developed while I
          was studying programming. It served as a showcase for course projects
          and demonstrated my early understanding of React and component-driven
          development.
        </p>
        <ul>
          <li>🎨 Creative transitions and animations</li>
          <li>💡 Clean design highlighting projects and skills</li>
          <li>📁 Early personal and course-based project showcases</li>
          <li>🚀 Deployed on Netlify</li>
        </ul>
        <p>
          While I’ve since evolved my portfolio using Next.js and best
          practices, this project remains a key milestone in my development
          journey.
        </p>
      </>
    ),
    coverImg: '/images/projects/OldPortfolio/01-Home.webp',
    images: [
      {
        src: '/images/projects/OldPortfolio/01-Home.webp',
        alt: 'Home Page',
      },
      {
        src: '/images/projects/OldPortfolio/02-About.webp',
        alt: 'About Page',
      },
      {
        src: '/images/projects/OldPortfolio/03-Skills.webp',
        alt: 'Skills Page',
      },
      {
        src: '/images/projects/OldPortfolio/04-Projects.webp',
        alt: 'Projects Page',
      },
      {
        src: '/images/projects/OldPortfolio/05-Contact.webp',
        alt: 'Contact Page',
      },
    ],
    role: 'Desarrollador Frontend',
    techStack: 'React, SCSS, EmailJS, Netlify',
    url: 'https://carlosgrj.netlify.app/',
  },
];
