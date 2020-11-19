<template>
  <p class="text-center p-4" v-if="$fetchState.pending">Fetching slider...</p>
  <p class="text-center p-4" v-else-if="$fetchState.error">An error occurred :(</p>
  <b-carousel v-else id="carousel-no-animation" no-animation indicators img-width="1024" img-height="480">
    <b-carousel-slide v-for="item in model" :key="item.id" :caption="item.alt" :img-src="item.img"></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      model: []
    }
  },
  async fetch() {
    this.model = await fetch(
      'http://my-json-server.typicode.com/firatgokalp/tourismjsonserver/slides'
    ).then(res => res.json())
  }
}
</script>
