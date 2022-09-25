export default {
  global: {
    componenteFormativo: 'Sistema financiero y gestión del riesgo',
    descripcionCurso:
      'El componente formativo, permitirá al aprendiz que se apropie de los conocimientos relacionados con el sistema financiero colombiano, su normatividad, estructura y consumidor financiero; así como conocimientos relacionados con las políticas institucionales y el sistema de administración del riesgo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float_1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float_2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float_3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float_4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float_6.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema financiero colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normativa',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em> Marketing</em> (concepto e historia)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características del <em> Marketing</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ciclo de vida del producto o servicio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipo de productos o servicios financieros',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Segmentación del mercado financiero',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Prospección del cliente',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El consumidor financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de consumidores',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características del consumidor financiero',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Categorías de los consumidores financieros',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Política institucional (definición y características)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Aplicación de la política institucional',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Protección al consumidor financiero',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Sistema de administración del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de riesgos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Normatividad del sistema de administración del riesgo',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Alertas en el sistema de administración del riesgo',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema financiero colombiano',
      referencia:
        'Canal Institucional. (2015). <em> Todo lo que debe saber sobre el sistema financiero colombiano</em> [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HPB223A4zq8',
    },
    {
      tema: 'Sistema financiero colombiano',
      referencia:
        'Maggi, M. E. (s. f.). <em>¿Qué es el dinero?</em> Banco de la República.',
      tipo: 'Ebook',
      link:
        'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/cartilla_dinero.pdf',
    },
    {
      tema: 'Sistema financiero colombiano',
      referencia:
        'Franco Cuartas, J. F. (2018). <em>Estructura y evolución del sistema financiero colombiano de la banca comercial a la banca de inversión.</em> SENA.',
      tipo: 'Revista',
      link: 'https://revistas.sena.edu.co/index.php/Re_Mo/article/view/1648',
    },
  ],
  glosario: [
    {
      termino: '<em>Marketing</em>',
      significado:
        'creación de estrategias dirigidas al consumidor, por medio de la cual se quiere estimular la compra de un bien o servicio.',
    },
    {
      termino: '<em>Neuromarketing</em>',
      significado:
        'estrategia del <em>marketing</em> basada en la ciencia y la psicología.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'porción o segmentación del mercado que posee características similares.',
    },
    {
      termino: 'Producto financiero',
      significado:
        'la Ley 1328 de 2009, título I, capítulo I; define productos a lo que se entiende por productos las operaciones legalmente autorizadas que se instrumentan en un contrato celebrado con el cliente o que tienen origen en la Ley.',
    },
    {
      termino: 'Portafolio de productos',
      significado:
        'medio (documento, presentación, página web), donde se da a conocer la entidad y detalla las características de su oferta comercial, el cual va dirigido a consumidores activos y consumidores potenciales.',
    },
    {
      termino: 'Riesgo',
      significado: 'posibilidad de un suceso no deseado.',
    },
    {
      termino: 'Servicio financiero',
      significado:
        'la Ley 1328 de 2009, Título I, Capítulo I, define los servicios como aquellas actividades conexas al desarrollo de las correspondientes operaciones y que se suministran a los consumidores financieros.',
    },
  ],
  referencias: [
    {
      referencia:
        'CESA. (s. f.). <em>Los 4 clientes bancarios que dan valor a la marca.</em>',
      link:
        'https://www.cesa.edu.co/news/los-4-clientes-bancarios-que-dan-valor-a-la-marca/',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Arts. 150, 189 y 335.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). Ley 1328 del 2009. Por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones. Julio 15 de 2009. DO. No. 47.411',
      link: '',
    },
    {
      referencia: 'Galán, J. S. (2021). Asesoría. Economipedia.',
      link: 'https://economipedia.com/definiciones/asesoria.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'María Alejandra Tovar Bernal',
        cargo: 'Experto Temático',
        centro: 'Regional Tolima – Centro de Industria y la Construcción',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
