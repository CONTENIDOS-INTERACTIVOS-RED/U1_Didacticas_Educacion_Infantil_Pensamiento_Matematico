<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la pertinencia y funcionalidad de la propuesta didáctica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Desde temprana edad, los niños comienzan a descubrir el mundo que los rodea mediante la <i>exploración</i>, la <i>curiosidad</i> y el <i>juego</i>. Sin darse cuenta, desarrollan habilidades matemáticas esenciales al contar sus juguetes, comparar tamaños o identificar patrones en su entorno. En
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-4.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El <b>pensamiento matemático en la infancia</b> no se reduce al aprendizaje de números y operaciones. Se trata de una forma de <i>razonar, resolver problemas y tomar decisiones lógicas</i> en la vida cotidiana. Comprender cómo se desarrolla este pensamiento desde los primeros años permite ofrecer herramientas que favorezcan un aprendizaje significativo y despierten el gusto por las matemáticas.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 ¿Cómo se desarrolla el pensamiento matemático en los primeros años?
    
    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-12.col-xl-8
            p.mb-4 Desde los primeros meses de vida, los niños observan, manipulan objetos y experimentan con su entorno. Estas acciones, aparentemente simples, sientan las bases del pensamiento matemático: cuando distinguen entre “más” y “menos” al recibir comida, organizan sus juguetes por color o forma, o anticipan rutinas diarias como el día y la noche. Todo ello refleja una capacidad innata para establecer relaciones, reconocer patrones y hacer inferencias lógicas.
            .bg-azul.p-4(data-aos='fade-up')
              span El pensamiento matemático en la infancia, entonces, <b>no implica solamente aprender números</b>, sino desarrollar una estructura mental que permita organizar, interpretar y dar respuesta a diversas situaciones a través de la lógica. Este proceso ocurre de manera integrada con otras áreas del desarrollo infantil, como el lenguaje, la motricidad y la cognición.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

        h2 Pensamiento matemático: un proceso que va más allá de los números
        p.mb-4 Según <b>Castro (2011)</b>, el pensamiento matemático en la infancia implica el desarrollo progresivo de habilidades como:
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-6.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Clasificación
              p.px-1.text-small.mb-0.text-center Separar objetos según características comunes.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-7.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Seriación
              p.px-1.text-small.mb-0.text-center Ordenar elementos en función de un criterio (como tamaño o color).
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Conservación de cantidad	
              p.px-1.text-small.mb-0.text-center Comprender que la cantidad permanece igual pese a los cambios de forma.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Correspondencia uno a uno
              p.px-1.text-small.mb-0.text-center Relacionar objetos de forma equitativa (por ejemplo, un plato por cada persona).
    
    p.mb-4 En este proceso, <b>la lógica cumple un papel fundamental</b>. Los niños no solo observan el mundo, sino que tratan de explicarlo con base en reglas y relaciones que descubren a diario. Por ejemplo, comprenden que un objeto pequeño cabe dentro de uno más grande, pero no al revés, o que dividir los juguetes en partes iguales permite repartir de forma justa. Estas nociones básicas sustentan conceptos matemáticos más complejos que surgirán en etapas posteriores (<b>Felicetti y Robayo, 2016</b>).
    h2 La importancia del contexto en la construcción del pensamiento matemático
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-gris.p-4.mb-4(data-aos='fade-up')
          span El aprendizaje matemático no se limita al aula ni a los libros: se construye a partir de <b>experiencias significativas</b> en la vida cotidiana. Un entorno rico en oportunidades de exploración y juego potencia la capacidad de los niños para establecer relaciones, resolver problemas y aplicar estrategias matemáticas de forma natural.
        span Actividades cotidianas como juegos de bloques, rompecabezas o el conteo durante las tareas del hogar representan valiosas oportunidades para fortalecer el pensamiento lógico-matemático de forma lúdica y motivadora (<b>Castro, Olmo y Castro, 2002</b>).

    .row.mb-4 
      .col-12.col-xl-8
        p.mb-4 Por ello, es fundamental comprender <b>cómo los niños construyen el concepto de número</b>, de qué manera <b>la lógica influye en su desarrollo</b> y cómo <b>las distintas áreas del crecimiento cognitivo, emocional y social</b> impactan su aprendizaje. Reflexionar sobre estos elementos permitirá diseñar <b>estrategias didácticas más efectivas</b>, ajustadas a las necesidades de la infancia, que fomenten un aprendizaje que vaya más allá de lo memorístico y se convierta en una herramienta real para organizar y entender el mundo.
        .bg-amarillo.p-4(data-aos='fade-up')
          p.mb-3 Preguntas guía para la reflexión
          p.mb-3 ●	¿Cómo se pueden potenciar estas habilidades matemáticas desde los primeros años de vida?<br><br>●	¿Cuáles son las estrategias más efectivas para estimular el pensamiento lógico en los niños?
          span Se invita a profundizar en la relevancia del pensamiento matemático en la infancia y su impacto en el desarrollo integral.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Relación entre pensamiento lógico y matemático

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 ¿Cómo descubren los niños las reglas que rigen el mundo que los rodea? Desde sus primeros años, exploran, comparan y establecen relaciones sin necesidad de números ni fórmulas. Incluso antes de aprender a contar, ya han desarrollado la capacidad de ordenar objetos, identificar patrones y predecir eventos simples. Todo esto es posible gracias a un proceso mental fundamental: el <b>pensamiento lógico</b>, que se convierte en la base para el desarrollo del <b>pensamiento matemático</b>.
        .d-flex.align-items-start.bg-azul-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-13.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El pensamiento lógico consiste en la capacidad de <i>razonar de manera estructurada, organizar información y extraer conclusiones</i> a partir de reglas y principios. En la infancia, esta forma de pensamiento se construye mediante la exploración del entorno y la interacción con objetos, situaciones y personas. Por ejemplo, cuando un niño se da cuenta de que una torre de bloques demasiado alta se cae, está comprendiendo una relación de causa y efecto.

    p.mb-4 A su vez, el pensamiento matemático implica <i>analizar problemas, identificar patrones, cuantificar elementos y utilizar estrategias</i> para resolver situaciones de la vida cotidiana. Ambos tipos de pensamiento están estrechamente relacionados y se desarrollan de forma simultánea: mientras la lógica permite organizar ideas y establecer relaciones, la matemática se encarga de representarlas simbólicamente.
    h2 La lógica como fundamento del pensamiento matemático
    .row.mb-4
      .col-12.col-xl-8
        .bg-gris.p-4(data-aos='fade-up')
          span Desde edades muy tempranas, los niños aplican la lógica en su vida diaria. Al clasificar juguetes por color o forma, o al decir “si llueve, no puedo jugar afuera”, están utilizando principios lógicos como la clasificación y la condicionalidad. Estas acciones, aunque simples, requieren observación, análisis y toma de decisiones basadas en razonamientos racionales. Esta base lógica se conecta con conceptos matemáticos de manera directa. A continuación, se presentan algunos ejemplos clave:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Tabla 1.</b> Ejemplos cotidianos y su vínculo con conceptos matemáticos fundamentales

    .tabla-a
      table
        thead
          tr
            th.bg-morado-oscuro.text-white.text-center Ejemplo cotidiano
            th.bg-morado-oscuro.text-white.text-center Concepto matemático relacionado
        tbody
          tr
            td Contar objetos en distintos arreglos y notar que el total no cambia
            td <i>Conservación del número</i>
          tr
            td Repartir galletas de forma equitativa entre varios amigos
            td <i>Concepto básico de división</i>
          tr
            td Reconocer que el orden de los elementos no afecta la cantidad
            td <i>Equivalencia y propiedades del conteo</i>
          tr
            td Agrupar objetos según una característica común
            td <i>Clasificación y seriación</i>

    p.mb-4 Así, la <b>lógica actúa como cimiento del pensamiento matemático</b>. Cuando no se cuenta con una base lógica sólida, es posible que los niños memoricen procedimientos, pero sin comprender el porqué de las operaciones. Por tanto, no basta con enseñar a sumar o restar; es necesario favorecer una comprensión profunda y razonada de los conceptos.

    h2 Interacción entre pensamiento lógico y matemático en la infancia

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Ambos tipos de pensamiento no se desarrollan en aislamiento, sino que se relacionan constantemente con otras áreas del desarrollo infantil, como el lenguaje, la percepción sensorial y la socialización. A través del juego, la experimentación y la resolución de problemas, los niños refuerzan estas conexiones.
        .mb-4.bg-amarillo.p-4(data-aos='fade-up')
          span El <b>lenguaje</b> desempeña un papel crucial: permite verbalizar razonamientos, organizar ideas y reflexionar sobre los propios procesos mentales. Cuando un niño explica por qué un objeto no cabe en una caja más pequeña, está poniendo en palabras un razonamiento lógico-matemático. Con el tiempo, el lenguaje se convierte en una herramienta para interiorizar conceptos abstractos como la proporcionalidad, las relaciones espaciales y la seriación.
        span Asimismo, la <b>interacción social</b> ofrece oportunidades valiosas para discutir, argumentar y contrastar ideas. Juegos de mesa, acertijos, rompecabezas y actividades manipulativas permiten desarrollar el pensamiento lógico-matemático en contextos significativos, promoviendo el aprendizaje activo y colaborativo.

    h2 El pensamiento lógico-matemático como clave del aprendizaje

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Un aprendizaje matemático significativo no se basa únicamente en la repetición de números o la memorización de fórmulas. Lo esencial es la comprensión de <i>relaciones, estructuras y patrones</i>. Cuando el niño entiende el “por qué” detrás de los conceptos matemáticos, su aprendizaje se vuelve más sólido, duradero y transferible a nuevas situaciones.
        .bg-gris.p-4(data-aos='fade-up')
          span Por esta razón, es indispensable diseñar <b>experiencias de enseñanza que estimulen la reflexión, la experimentación y el uso de la lógica</b> en la resolución de problemas. A lo largo del desarrollo infantil, se deben ofrecer estrategias efectivas que fortalezcan el pensamiento lógico-matemático, permitiendo que los niños no solo aprendan matemáticas, sino que las vivan y comprendan como una herramienta poderosa para interpretar el mundo.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Procesos cognitivos involucrados en el desarrollo del pensamiento matemático 

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 ¿Cómo logran los niños comprender el concepto de número y aplicar el razonamiento matemático en su vida diaria? Desde los primeros meses de vida, el cerebro infantil interactúa constantemente con su entorno, explorando, identificando patrones y estableciendo conexiones que permiten dar sentido al mundo. Aunque parezca un proceso espontáneo, detrás de cada descubrimiento se activan diversos <b>procesos cognitivos fundamentales</b> que hacen posible la construcción del pensamiento matemático.
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-18.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Este desarrollo no ocurre de manera aislada ni repentina, sino que es el resultado de una <b>evolución progresiva</b> en la que intervienen múltiples habilidades cognitivas. Entre las más relevantes se encuentran la <b>percepción, la atención, la memoria, la clasificación, la seriación y el razonamiento lógico</b>, cada una cumpliendo un rol esencial en la comprensión y aplicación de los conceptos matemáticos (Alsina, 2016).

    p.mb-4 Los procesos cognitivos y su contribución al pensamiento matemático son: 

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-19.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='17%' y='79%' numero='+')
        .h5.mb-2 Percepción
        p Permite captar características como forma, tamaño, cantidad y disposición. Favorece la comprensión de la <i>correspondencia uno a uno y la conservación de cantidad</i> (Manzano, 2006).
      .tarjeta.bg-white.p-4(x='17%' y='46%' numero='+')
        .h5.mb-2 Atención
        p Facilita la selección de información relevante. Es clave para seguir secuencias, contar sin omisiones y detectar patrones numéricos (Fuente y Pousada, 2014).
      .tarjeta.bg-white.p-4(x='26%' y='22%' numero='+')
        .h5.mb-2 Memoria
        p Almacena y recupera información. Permite recordar estrategias, patrones, secuencias y aplicar conocimientos previos en nuevas situaciones.
      .tarjeta.bg-white.p-4(x='73%' y='22%' numero='+')
        .h5.mb-2 Clasificación
        p Ayuda a agrupar objetos según características comunes, fortaleciendo la organización y el reconocimiento de patrones.
      .tarjeta.bg-white.p-4(x='83%' y='46%' numero='+')
        .h5.mb-2 Seriación
        p Permite ordenar elementos de acuerdo con criterios específicos, como tamaño o intensidad, favoreciendo la comprensión de secuencias y relaciones.
      .tarjeta.bg-white.p-4(x='83%' y='78%' numero='+')
        .h5.mb-2 Razonamiento lógico
        p Posibilita deducir reglas, anticipar resultados y resolver problemas de forma estructurada. Implica tanto pensamiento inductivo como deductivo.

    h2 Interacción entre los procesos cognitivos
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Estos procesos no funcionan de manera independiente, sino que interactúan entre sí durante el aprendizaje matemático. Por ejemplo:
        .bg-azul.p-4(data-aos='fade-up').mb-4
          span ●	Para <b>resolver un problema</b>, es necesario mantener la atención en los datos relevantes.<br><br>●	La <b>memoria</b> permite recordar estrategias previas que han resultado eficaces.<br><br>●	La <b>percepción</b>, junto con la clasificación, ayuda a organizar la información de forma lógica.<br><br>●	El <b>razonamiento</b> lógico permite establecer relaciones y encontrar soluciones coherentes.

        span Esta interacción es lo que da solidez al pensamiento matemático y permite que el conocimiento se aplique con flexibilidad en distintas situaciones de la vida cotidiana.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
    
    h2 Importancia del contexto y el lenguaje 
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Es importante destacar que el desarrollo del pensamiento matemático no depende únicamente de la <b>maduración biológica</b>, sino también del <b>contexto social</b> y la <b>estimulación oportuna</b>. Cuando los niños tienen acceso a materiales concretos, resuelven problemas en situaciones reales o participan en juegos matemáticos, su aprendizaje se vuelve más significativo y funcional.
        .bg-gris.p-4(data-aos='fade-up')
          span El <b>lenguaje</b> también cumple un papel clave: permite a los niños verbalizar sus ideas, estructurar el pensamiento y explicar razonamientos. Por ejemplo, al decir “tengo más fichas que tú”, un niño ya está utilizando conceptos de cantidad y comparación, lo cual refleja el avance de su pensamiento lógico-matemático.

    h2 Ritmos individuales y aprendizaje personalizado
    p.mb-4 Cada niño evoluciona a su propio ritmo y construye las nociones matemáticas de manera particular. Respetar estos tiempos individuales y ofrecer <b>experiencias de aprendizaje adaptadas a sus necesidades</b> contribuye a potenciar sus capacidades. De esta forma, se promueve un desarrollo sólido del pensamiento lógico y matemático, lo cual resulta esencial para la resolución de problemas y la toma de decisiones en contextos diversos.
    .row.bg-morado.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Desarrollo del pensamiento lógico-matemático en la primera infancia
          p.mb-5(data-aos="fade-up") Se invita a leer el documento Desarrollo del pensamiento lógico-matemático en la primera infanci a, donde se aborda cómo los niños pequeños desarrollan habilidades lógicas y matemáticas a través del juego, la exploración y la interacción con su entorno.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Desarrollo_del_pensamiento.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Desarrollo del pensamiento lógico-matemático en la primera infancia
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            // Libros y documentos ST1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/280529") Maldonado, S. M. & Reséndiz Balderas, E. (2024). La enseñanza de la medición en educación preescolar: un análisis e interpretación del CPC.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/29624") Rodríguez B. M. E. (2009). El pensamiento lógico matemático desde la perspectiva de Piaget.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revistas.uva.es/index.php/edmain/article/view/5936") Rodríguez, M. M. (2021). Pensamiento matemático y cuentos en Educación Infantil.
            
            // Material de ST3 redistribuido a ST1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/232519") Mainegra Fernández, D. & Miranda Izquierdo, J. (2023). ¿Cómo aprender Matemática?
            
            // Videos ST1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=HULxvug1lAA") [Vídeo] El pensamiento lógico-matemático en Ed. Infantil | Didáctica de la Matemática en Ed. Infantil
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=ocJRrzjdvTc") [Vídeo] Desarrollo del pensamiento matemático en la primera infancia
            
            // Videos de ST3 redistribuidos a ST1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=uJMgKSsQxyE") [Vídeo] ¿Cómo se desarrolla el Pensamiento Matemático? PREESCOLAR NIÑOS 3 A 5 AÑOS
          
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p
      


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
