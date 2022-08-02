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
