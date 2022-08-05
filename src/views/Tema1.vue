<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema financiero colombiano
    
    p Es la entidad encargada del papel de mediador entre aquellas personas que de una u otra forma utilizan el dinero para la realización de sus actividades financieras, como las que tienen excedentes de dinero y no lo gastan todo y los que necesitan recursos económicos para financiar sus actividades de consumo o inversión y por tanto gastan más de lo que tienen, estas personas son aquellas que buscan abrir un negocio, comprar casa propia, etc.
 
    p.mb-5 En el siguiente video se profundiza un poco más sobre qué es y en qué consiste el sistema financiero colombiano:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Al hablar del sistema financiero, se debe abordar como punto de partida, el dinero, el cual es el medio empleado y aceptado, por los gobiernos para realizar transacciones, como la compra o venta de bienes y servicios. A continuación, se muestra la evolución histórica del sistema financiero:

    LineaTiempoC.color-acento-contenido.p-4.mb-5(text-small style="background-color: #E1F3D7; border-radius: 10px")
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
    p.mb-5 Todo el concepto del dinero da respuesta a las necesidades de las personas para realizar sus transacciones como la compra o venta de bienes y servicios, pero también surge la necesidad de ahorrar y la inversión, por lo cual se crea el sistema financiero. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.col-xl-8.mx-auto.bloque-texto-edit.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-6.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se define al sistema financiero, como la conformación u organización de las instituciones financieras, los gobiernos, medios y mercados; que pretenden captar el dinero, que no es usado por las personas, por lo cual se emplea el ahorro, el cual es colocado a las personas que requieren realizar inversiones, mediante créditos.

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-md-2.mx-auto.mb-4.mb-md-0
        img(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 123px").mx-auto
      .col-md-10
        p.mb-0 Colombia, se encuentra conformada en su sistema financiero, por los establecimientos de crédito, los cuales tienen dentro de sus funciones, la colocación de dinero, mediante el crédito, están conformados por los bancos, cooperativas de ahorro y financieras y compañías de financiamiento comercial. También se encuentran las entidades de servicios financieros y otras entidades financieras, como las fiduciarias. #[b(style="background-color: #E1F3D7; padding: .1rem") Todo el sistema financiero colombiano se encuentra regulado por la Superintendencia Financiera de Colombia (SFC).]

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1  Estructura
    
    p.mb-5 Cada uno de los sectores de la economía impulsan el crecimiento económico de un país a través de las unidades económicas, estas son:

    .d-flex.flex-wrap.mb-5.mx-auto.col-xl-10
      .col-lg-6.mb-4.mb-xl-0.px-lg-2
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
      .col-lg-6.mb-4.mb-xl-0.px-lg-2
        .tarjeta.tarjeta-flip.w-100
          .tarjeta-flip__contenedor(style="background-color: #FFEAD8; border-radius: 20px; min-height: 414px")
            .tarjeta-flip__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-9.svg')})`}"
              style="background-color: #FC8116"
            )
            .tarjeta-flip__contenido.d-flex.flex-wrap.align-content-center.justify-content-center.text-center.p-4.p-xl-5
              h3 Unidades económicas deficitarias
              p Corresponde a la falta de recursos económicos (dinero) de las personas o empresas, que tienen unos ingresos inferiores a sus gastos, por lo cual requieren del crédito para adquirir bienes y servicios. 
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

<style lang="sass">
.bloque-texto-edit
  margin-right: auto
  margin-left: auto
  justify-content: start
  .bloque-texto-g__img
    left: 50%
    @media (max-width: 991px)
      left: 0%
  .bloque-texto-g__texto
    width: 70%
    @media (max-width: 991px)
      width: 100%
</style>
