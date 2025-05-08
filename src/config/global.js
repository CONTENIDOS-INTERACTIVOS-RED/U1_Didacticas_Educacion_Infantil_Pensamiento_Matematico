export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Matemáticas en la infancia por medio de la lógica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Introducción a la pertinencia y funcionalidad de la propuesta didáctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '¿Cómo se desarrolla el pensamiento matemático en los primeros años?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Relación entre pensamiento lógico y matemático',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Procesos cognitivos involucrados en el desarrollo del pensamiento matemático ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Creación del concepto de número y sus nociones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Cómo construyen los niños el concepto de número?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Etapas en el desarrollo del concepto numérico (según Piaget y otros teóricos)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Nociones básicas: cantidad, orden y cardinalidad',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Estrategias para fomentar el aprendizaje del número en la educación infantil',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Castro Puche, R. (2011). Didáctica de las matemáticas: de preescolar a secundaria: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69177',
    },
    {
      referencia:
        'Alsina i Pastells, À. (2016). Desarrollo de competencias matemáticas con recursos lúdico-manipulativos para niños y niñas de 6 a 12 años: ( ed.). Narcea Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46045',
    },
    {
      referencia:
        'Fuente Arnanz, J. D. L. & Pousada, M. (2014). La atención: ( ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115904',
    },
    {
      referencia:
        'Manzano Mier, M. (2006). Introducción a la percepción: ( ed.). Editorial Félix Varela.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71808',
    },
    {
      referencia:
        'Felicetti, V. L., & Robayo, A. P. (2016). Didáctica y pensamiento matemático en educación infantil. Educação por escrito, 7(2), 253-262.',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S1815-76962022000401338&script=sci_arttext',
    },
    {
      referencia:
        'Castro Martínez, E., Olmo Romero, M. Á. D., & Castro Martínez, E. (2002). Desarrollo del pensamiento matemático infantil. Universidad de Granada. Facultad de Ciencias de la Educación. Departamento de Didáctica de la Matemática.',
      link:
        'https://www.guao.org/sites/default/files/buenas%20practicas/Desarrollo%20del%20pensamiento%20matem%C3%A0tico%20infantil.pdf',
    },
    {
      referencia:
        'Caballero Ochoa, K. M. (2022). Estrategias didácticas en el área de matemática para niños de 3 años.',
      link: 'https://repositorio.uns.edu.pe/handle/20.500.14278/4820',
    },
    {
      referencia:
        'Cattaneo, L. (2012). Didáctica de la matemática: enseñar matemática, enseñar a enseñar matemática: ( ed.). Homo Sapiens Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67091',
    },
    {
      referencia:
        'Villarroel Villamor, J. D. (2009). Origen y desarrollo del pensamiento numérico: una perspectiva multidisciplinar.',
      link: 'https://www.redalyc.org/pdf/2931/293121936025.pdf',
    },
    {
      referencia:
        'Espinoza Cevallos, C. E., Reyes Cedeño, C. C., & Rivas Cun, H. I. (2019). El aprestamiento a la matemática en educación preescolar. Conrado, 15(66), 193-203.',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S1990-86442019000100193&script=sci_arttext',
    },
    {
      referencia:
        'Jiménez Ortíz, M. L., & Gordo Contreras, A. (2014). El cuento infantil: facilitador de pensamiento desde una experiencia pedagógica. Praxis & Saber, 5(10), 151-170.',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S2216-01592014000200009&script=sci_arttext',
    },
    {
      referencia:
        'Borda, A. E. G. (2021). La edad de las operaciones formales de Jean Piaget y el rendimiento académico en matemáticas. Ciencia latina revista científica multidisciplinar, 5(4), 5864-5882.',
      link:
        'https://www.ciencialatina.org/index.php/cienciala/article/view/728',
    },
    {
      referencia:
        'Villarroel, J. D. (2009). Investigación sobre el conteo infantil. Didáctica de la Matemática y de las Ciencias experimentales. Universidad del País Vasco.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3067963',
    },
    {
      referencia:
        'González, L. C. C. (1989). El concepto de número en preescolar. SUMA, 3, 19s9.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=2308735',
    },
    {
      referencia:
        'González, A. (2016). La enseñanza de la matemática en el jardín de infantes a través de secuencias didácticas: ( ed.). Homo Sapiens Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67064',
    },
    {
      referencia:
        'Coral, A. L. (2012). Desarrollo de habilidades de pensamiento y creatividad como potenciadores de aprendizaje. Revista Unimar, 30(1), 86-97.',
      link:
        'https://revistas.umariana.edu.co/index.php/unimar/article/view/232',
    },
    {
      referencia:
        'Rivas Navarro, M. (2008). Procesos cognitivos y aprendizaje significativo. Comunidad de Madrid. Consejería de Educación. Viceconsejería de Organización Educativa.',
      link:
        'https://archive.org/details/rivas-navarro-m.-procesos-cognitivos-y-aprendizaje-significativo_202312',
    },
    {
      referencia:
        'Ludeña-Carrillo, J. E., & Zambrano-Acosta, J. M. (2022). Guía de actividades lúdicas para el desarrollo del pensamiento lógico-matemático en niños de Educación Inicial. Revista estudios del desarrollo social: Cuba y América Latina, 10(3)',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S2308-01322022000300032&script=sci_arttext&tlng=pt',
    },
    {
      referencia:
        'Núñez Caballero, A. M. B., & Zapata Rodríguez, M. K. (2018). Desarrollo del pensamiento matemático a través de juegos en alumnos del nivel inicial en la institución educativa particular Santa María Reina de Lima Norte–Comas-2015.',
      link: 'https://repositorio.unjfsc.edu.pe/handle/20.500.14067/3314',
    },
  ],
  glosario: [
    {
      termino: 'Cantidad',
      significado:
        'Propiedad que permite medir, contar o comparar elementos dentro de un conjunto.',
    },
    {
      termino: 'Clasificación',
      significado:
        'Habilidad para agrupar objetos o elementos según características comunes, como forma, color o tamaño.',
    },
    {
      termino: 'Concepto de número',
      significado:
        'Comprensión progresiva de la noción de cantidad, secuencia numérica y relaciones entre los números.',
    },
    {
      termino: 'Conservación del número',
      significado:
        'Capacidad de entender que la cantidad de un conjunto de objetos no cambia, aunque su disposición varíe.',
    },
    {
      termino: 'Correspondencia uno a uno',
      significado:
        'Relación entre dos conjuntos en la que cada elemento de un grupo tiene un único par en el otro.',
    },
    {
      termino: 'Desarrollo cognitivo',
      significado:
        'Proceso de adquisición de conocimientos, habilidades y capacidades mentales desde la infancia.',
    },
    {
      termino: 'Estimación',
      significado:
        'Habilidad para calcular o prever una cantidad aproximada sin contar exactamente.',
    },
    {
      termino: 'Lógica matemática',
      significado:
        'Conjunto de principios y reglas que permiten establecer relaciones y solucionar problemas de manera racional.',
    },
    {
      termino: 'Noción espacial',
      significado:
        'Comprensión de las relaciones entre los objetos y el entorno, como ubicación, dirección y distancia.',
    },
    {
      termino: 'Operaciones básicas',
      significado:
        'Conjunto de procesos matemáticos fundamentales como suma, resta, multiplicación y división.',
    },
    {
      termino: 'Pensamiento abstracto',
      significado:
        'Capacidad de razonar sobre conceptos no tangibles, como números o símbolos matemáticos.',
    },
    {
      termino: 'Pensamiento lógico',
      significado:
        'Habilidad para establecer relaciones, hacer inferencias y resolver problemas de manera ordenada y coherente.',
    },
    {
      termino: 'Relaciones de orden',
      significado:
        'Organización de elementos según criterios de secuencia o jerarquía, como menor a mayor.',
    },
    {
      termino: 'Secuencia numérica',
      significado:
        'Orden progresivo de los números según su valor, facilitando el conteo y la comparación.',
    },
    {
      termino: 'Seriación',
      significado:
        'Capacidad para ordenar objetos según un criterio determinado, como tamaño o cantidad.',
    },
  ],
}
