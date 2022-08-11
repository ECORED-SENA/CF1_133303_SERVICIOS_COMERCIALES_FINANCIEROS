<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema financiero colombiano
    
    p(data-aos="fade-right") Es la entidad encargada del papel de mediador entre aquellas personas que de una u otra forma utilizan el dinero para la realización de sus actividades financieras, como las que tienen excedentes de dinero y no lo gastan todo y los que necesitan recursos económicos para financiar sus actividades de consumo o inversión y por tanto gastan más de lo que tienen, estas personas son aquellas que buscan abrir un negocio, comprar casa propia, etc.
 
    p.mb-5(data-aos="fade-right") En el siguiente video se profundiza un poco más sobre qué es y en qué consiste el sistema financiero colombiano:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5(data-aos="fade-right") Al hablar del sistema financiero, se debe abordar como punto de partida, el dinero, el cual es el medio empleado y aceptado, por los gobiernos para realizar transacciones, como la compra o venta de bienes y servicios. A continuación, se muestra la evolución histórica del sistema financiero:

    LineaTiempoC.color-acento-contenido.p-4.mb-5(text-small style="background-color: #E1F3D7; border-radius: 10px" data-aos="fade-left")
      .row.col-xl-11.mx-auto(titulo="Época Neolítica")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-1.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 Época Neolítica (6.000 a. de C. a 3.000 a. de C.)
          p Se destacó por el desarrollo de la agricultura y la ganadería; allí se comienza a evidenciar el excedente de la producción al generarse más bienes, que se requerían para el autoconsumo. Las personas también se dedicaban a la artesanía, los cuales intercambiaban por alimentos; con esta práctica de intercambio de productos, denominado trueque, nacen las primeras formas de comercio; sin embargo, no se da de una forma perfecta debido a que existían productos de baja demanda o necesidad por las personas y no se daba el trueque, es a partir de este problema que surge la necesidad de crear el dinero como medio de transacción. 
      
      .row.col-xl-11.mx-auto(titulo="Siglo V")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-2.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 Siglo V al VII a. de C.
          p Surge la primera moneda creada por el pueblo lidio, en Turquía. Se acuña en oro y plata, con la cabeza de un león, al ser creada por la realeza de la época, el rey Argos; y fue empleada para pagar al ejército. 
            br
            br
            | La moneda se fue expandiendo por todo el territorio y le fueron insertando  símbolos o dibujos en sus caras. La primera cara que se conoció en una moneda fue la de Alejandro Magno.
            br
            br
            | Las monedas podían pesar  entre 65 y 67 gramos y como había que transportarlas, se hacía un poco complicado su manejo por su peso. Además,  se corría el riesgo de que fueran robadas en su traslado y por esto surgió la necesidad de crear los billetes, como otra forma para intercambiar objetos, con un valor de por medio. 
      
      .row.col-xl-11.mx-auto(titulo="Siglo XI")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-3.jpg')
        .col-xl-7.mb-4.mb-xl-0
          h4 Siglo XI
          p El primer papel moneda fue emitido, por el emperador chino Kubali Kha, el cual se recibía a cambio del servicio de mantener a salvo objetos de valor o monedas, este papel cumplía la función de certificados nominales que acreditaban su posesión y se asimila a lo que es hoy en día como un cheque. El primer billete chino que sobrevive es el 1000 cash, emitido bajo la dinastía Ming en el período de la Gran Guerra (1368 -1398).
            br
            br
            | En 1661 comienzan a circular  los primeros billetes y su utilización se volvió muy popular, por ser mucho más cómodos para transportar, que la pesada  bolsa llena de monedas.
      
      .row.col-xl-11.mx-auto(titulo="Siglo XX")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-4.jpg')
        .col-xl-6.mb-4.mb-xl-0
          h4 Siglo XX
          p En este siglo se encuentran como medio de transacción las monedas y los billetes, pero también surgieron otros medios, como el llamado “dinero plástico”, las tarjetas débito y tarjetas crédito; las cuales se encuentran respaldadas por los bancos. El dinero es emitido por los bancos centrales de cada país, para el caso de Colombia es el Banco Nacional de la República, y de acuerdo con las políticas monetarias del país son los encargados de poner este dinero a circular. 
      
      .row.col-xl-11.mx-auto(titulo="Siglo XXI")
        .col-xl-5
          figure
            img(src='@/assets/curso/temas/tema1/img-5.jpg')
        .col-xl-6.mb-4.mb-xl-0
          h4 Siglo XXI
          p En los últimos años, se ha empezado a hablar y a emplear como medio de transacciones, las criptomonedas, consideradas un activo digital, las cuales se almacenan en billeteras o carteras digitales como binances o trust wallet. 
            br
            br
            | Las criptomonedas se encuentran descentralizadas, lo que significa que no están reguladas por los bancos centrales de cada país.
    p.mb-5(data-aos="fade-right") Todo el concepto del dinero da respuesta a las necesidades de las personas para realizar sus transacciones como la compra o venta de bienes y servicios, pero también surge la necesidad de ahorrar y la inversión, por lo cual se crea el sistema financiero. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.col-xl-8.mx-auto.bloque-texto-edit.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-6.jpg')})`}"
        data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Se define al sistema financiero, como la conformación u organización de las instituciones financieras, los gobiernos, medios y mercados; que pretenden captar el dinero, que no es usado por las personas, por lo cual se emplea el ahorro, el cual es colocado a las personas que requieren realizar inversiones, mediante créditos.

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-md-2.mx-auto.mb-4.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 123px").mx-auto
      .col-md-10(data-aos="fade-left")
        p.mb-0 Colombia, se encuentra conformada en su sistema financiero, por los establecimientos de crédito, los cuales tienen dentro de sus funciones, la colocación de dinero, mediante el crédito, están conformados por los bancos, cooperativas de ahorro y financieras y compañías de financiamiento comercial. También se encuentran las entidades de servicios financieros y otras entidades financieras, como las fiduciarias. #[b(style="background-color: #E1F3D7; padding: .1rem") Todo el sistema financiero colombiano se encuentra regulado por la Superintendencia Financiera de Colombia (SFC).]
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1  Estructura
    
    p.mb-5(data-aos="fade-right") Cada uno de los sectores de la economía impulsan el crecimiento económico de un país a través de las unidades económicas, estas son:

    .d-flex.flex-wrap.mb-5.mx-auto.col-xl-10
      .col-lg-6.mb-4.mb-xl-0.px-lg-2(data-aos="fade-right")
        .tarjeta.tarjeta-flip.w-100(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="background-color: #FFEAD8; border-radius: 20px; min-height: 414px")
            .tarjeta-flip__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-8.svg')})`}"
              style="background-color: #FCD03E"
            )
            .tarjeta-flip__contenido.d-flex.flex-wrap.align-content-center.justify-content-center.text-center.p-4.p-xl-5
              h3 Unidades económicas superativas
              p Son los recursos económicos (dinero) de las personas o empresas que tienen unos ingresos superiores a sus gastos, por lo cual obtienen un excedente de dinero que puede ser ahorrado.
      .col-lg-6.mb-4.mb-xl-0.px-lg-2(data-aos="fade-left")
        .tarjeta.tarjeta-flip.w-100
          .tarjeta-flip__contenedor(style="background-color: #FFEAD8; border-radius: 20px; min-height: 414px")
            .tarjeta-flip__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-9.svg')})`}"
              style="background-color: #FC8116"
            )
            .tarjeta-flip__contenido.d-flex.flex-wrap.align-content-center.justify-content-center.text-center.p-4.p-xl-5
              h3 Unidades económicas deficitarias
              p Corresponde a la falta de recursos económicos (dinero) de las personas o empresas, que tienen unos ingresos inferiores a sus gastos, por lo cual requieren del crédito para adquirir bienes y servicios. 
    .d-flex.flex-wrap.align-items-center.mb-5
      img(src='@/assets/curso/temas/tema1/img-10.jpg' style="max-width: 505px" data-aos="fade-right").mb-4.mb-xl-0.col-xl-5.mx-auto
      p.mb-0.col-xl-7.ps-xl-4(data-aos="fade-left") Dadas estas unidades económicas superativas y deficitarias, el sistema financiero se encarga de canalizar estos recursos, como intermediario, donde las unidades económicas superativas, se ofrecen a las unidades económicas deficitarias, a cambio de una retribución que, generalmente es el pago de interés; este funcionamiento permite que se dé un uso eficiente del dinero, minimizando los riesgos asociados a los mismos, que si los individuos de forma particular realizarán estas operaciones de ahorro y crédito. 
        br
        br
        | La estructura del sistema financiero en Colombia se encuentra compuesta por un conjunto de agentes que interactúan en el sistema, los cuales son las instituciones financieras y sus fondos administrados, vigilados por la Superintendencia Financiera de Colombia.
    
    p.mb-5(data-aos="fade-right") Dentro de las instituciones financieras se encuentran los establecimientos de crédito, las sociedades de servicios financieros y otras entidades financieras, explicadas a continuación: 

    .d-flex.flex-wrap.align-items-stretch.mb-5
      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade-right")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #C2E8B0")
          img(src='@/assets/curso/temas/tema1/img-11.svg' style="max-width: 350px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 8rem")
            h4.mb-4 Establecimientos de crédito
            p Captan recursos de las unidades económicas superativas, mediante el ahorro, que serán colocados en las unidades económicas deficitarias, mediante los préstamos y otras operaciones. 

      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #C2E8B0")
          img(src='@/assets/curso/temas/tema1/img-12.svg' style="max-width: 350px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 8rem")
            h4.mb-4 Sociedades de servicios financieros
            p Prestan servicios del sector financiero, pero se encuentran especializadas en brindar asesoría financiera en la administración de los recursos.

      .col-lg-6.col-xl-4.p-2.mx-auto(style="margin-top: 8rem" data-aos="fade-left")
        .tarjeta.p-4.p-lg-5.position-relative.h-100(style="background-color: #C2E8B0")
          img(src='@/assets/curso/temas/tema1/img-13.svg' style="max-width: 350px;").banner-principal-decorativo-tj
          .d-block(style="margin-top: 8rem")
            h4.mb-4 Entidades encargadas del control y seguro de depósitos 
            p Como el Ministerio de Hacienda y Crédito Público, los fondos de garantías, la Superintendencia Financiera de Colombia y el Banco de la República. 

    p.mb-5(data-aos="fade-right") El Estatuto Organizacional del Sistema Financiero Colombiano (Eosfco), está representado en los siguientes agentes:
    .titulo-sexto.color-acento-contenido
      h5 Título de sexto nivel, 16pt
      span subtitulo

    .table-responsive(data-aos="fade-left")
      table.mb-5(style="min-width: 1044px")
        thead
          tr
            th.p-0(style="border: none !important;")
              .p-3(style="background-color: #FED5B1; border: 3px solid #FC8116; border-bottom: none; border-right: none; border-top-left-radius: 20px;")
                h3.text-center.fw-bold.mb-0 Establecimientos de crédito
            th.p-0(style="border: none !important;")
              .p-3(style="background-color: #FED5B1; border: 3px solid #FC8116; border-bottom: none;")
                h3.text-center.fw-bold.mb-0 Sociedades de servicios financieros
            th.p-0(style="border: none !important;") 
              .p-3(style="background-color: #FED5B1; border: 3px solid #FC8116; border-bottom: none; border-left: none; border-top-right-radius: 20px;")
                h3.text-center.fw-bold.mb-0 Otras instituciones financieras
        tbody
          tr.d-flex.align-items-stretch(style="width: 300%")
            td.p-0(style="border: none !important; vertical-align: bottom; width: 33.33%")
              .h-100.p-3(style="border: 3px solid #FC8116; border-top: none; border-right: none; border-bottom-left-radius: 20px")
                ul.lista-ul--color
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Bancos.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Corporaciones de financiamiento comercial.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Compañías financieras tradicionales.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Compañías financieras especializadas en leasing.
                  li 
                    .my-auto.me-3(style="height: 11px; width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Cooperativas financieras.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Corporaciones de ahorro y vivienda.
            td.p-0(style="border: none !important; vertical-align: bottom; width: 33.33%")
              .h-100.p-3(style="border: 3px solid #FC8116; border-top: none;")
                ul.lista-ul--color
                  li 
                    .my-auto.me-3(style="height: 11px; width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Sociedades administradoras de pensiones y cesantías.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Sociedades fiduciarias.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Almacenes generales de depósitos.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Sociedades comisionistas de bolsa.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Sociedades administradoras de inversión.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Sociedades de intermediación cambiaria y de servicios financieros especiales.
            td.p-0(style="border: none !important; vertical-align: bottom; width: 33.33%")
              .h-100.p-3(style="border: 3px solid #FC8116; border-top: none; border-left: none; border-bottom-right-radius: 20px")
                ul.lista-ul--color
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Instituciones oficiales especiales.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Sociedades de capitalización.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Sociedades aseguradoras.
                  li 
                    .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
                    | Intermediarios de seguros y reaseguros.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2  Normativa
    
    p.mb-5(data-aos="fade-right") Al hablar de la normatividad, para el sistema financiero en Colombia, se debe iniciar mencionando la pirámide de Hans Kelsen, en la cual se presenta el sistema jurídico en forma de pirámide, de acuerdo con el orden de importancia o supremacía, y en donde cada nivel tiene una relación vertical, entre las normas jurídicas, lo que significa que cada norma obtiene valor a partir de una norma superior. 
      br
      br
      | Según Kelsen existen tres niveles, los cuales se determinan así:
    img(src='@/assets/curso/temas/tema1/img-14.svg' style="max-width: 820px;" data-aos="fade-left").col-xl-8.mx-auto.mb-5

    p.mb-5(data-aos="fade-right") La Constitución Política de Colombia, como norma fundamental, en el artículo 150, literal del numeral 19, establece:

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/ley.svg")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Artículo 150
              p.text-small La Constitución Política de Colombia, como norma fundamental, en el artículo 150, literal del numeral 19
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/OKEst_Anexo2_Articulo_150_PDF.docx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img(src='@/assets/curso/temas/tema1/img-15.jpg' style="max-width: 295px;" data-aos="fade-right").col-md-3.mb-4.mb-md-0.mx-auto
      p.col-md-9.ps-md-3.mb-0(data-aos="fade-left") La Superintendencia Financiera de Colombia (SFC), está adscrita al Ministerio de Hacienda y Crédito Público y como ya se ha mencionado, tiene la función de vigilancia y control, esta es una entidad con autonomía administrativa y financiera, cuenta con personería jurídica y patrimonio propio. Se creó la Superintendencia Bancaria de Colombia, mediante el Decreto 4327 del 2005, se fusiona en la Superintendencia de Valores y se modifica la estructura de la Superintendencia Financiera de Colombia, mediante el Decreto 710 de 2012.
    
    p.mb-5(data-aos="fade-right") Por su parte, el Banco de la República es el emisor de la modela legal en Colombia, tiene como función la política monetaria, cambiaria y crediticia del país, por lo cual se encuentra estrechamente relacionado con el sistema financiero y dentro de sus funciones se encuentran:

    .d-flex.flex-wrap.align-items-center.col-xl-10.mb-5.mx-auto
      .col-lg-6.d-flex.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-decorador.svg' style="max-width: 85px; margin-right: -3rem;").position-relative
        .tarjeta.p-3.ps-5.d-flex.align-items-center(style="background-color: #C2E8B0;")
          p.mb-0.ps-3 Crear los instrumentos de la política monetaria, cambiaria y crediticia
      
      .col-lg-6.d-flex.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-decorador.svg' style="max-width: 85px; margin-right: -3rem;").ms-auto.position-relative
        .tarjeta.p-3.ps-5.d-flex.align-items-center(style="background-color: #C2E8B0;")
          p.mb-0.ps-3 Contribuir a la estabilidad financiera del país.

    p.mb-5(data-aos="fade-right") Y como se está hablando de normatividad, a continuación, se conocerán algunas de las leyes y decretos aplicables al sistema financiero:

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/ley.svg")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Leyes financieras colombianas
              p.text-small Conocerán algunas de las leyes y decretos aplicables al sistema financiero
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/OKEst_Anexo3_LeyesFinancierasColombianas_PDF.docx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
