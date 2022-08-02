<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Marketing] (concepto e historia)

    p.mb-5 La palabra #[em marketing] es un término en inglés, que se traduce como mercadología, mercadeo o mercadotecnia y comúnmente se piensa que este es #[b publicidad], pero este tan solo es una de las estrategias, para llegar a un público objetivo, donde se deben estudiar las necesidades de los clientes, las estrategias que se deben tomar, las cuales van desde la creación de un producto y un servicio requerido, además de la eficiencia y eficacia en la producción, la logística, los canales de distribución, el servicio de venta y posventa. 
</template>

<script>
export default {
  name: 'Tema2',
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
