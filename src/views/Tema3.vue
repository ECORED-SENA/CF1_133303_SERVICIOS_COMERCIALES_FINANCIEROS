<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 El consumidor financiero

    p Al conceptualizar al consumidor financiero, se debe iniciar por definir quién es el cliente, el cual también puede ser llamado comprador, usuario o consumidor; el cliente es una persona, empresa o entidad que adquiere un producto o servicio, para su consumo; estos productos o servicios dan respuesta o solución a una necesidad.

    p.mb-5 La denominación que se da al cliente, en general depende del sector que ofrece los productos o servicios; en el caso concreto, el sector financiero denomina a su cliente como consumidor financiero, quien es la persona natural o jurídica que adquiere sus productos o servicios; dependerá de la necesidad de cada consumidor la elección que realizará del portafolio de productos financieros; por lo cual es indispensables realizar un correcto análisis del consumidor, para poder dar una respuesta satisfactoria a sus necesidades.
</template>

<script>
export default {
  name: 'Tema3',
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
