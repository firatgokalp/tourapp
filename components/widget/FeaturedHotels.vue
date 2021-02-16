<template>
  <p class="text-center p-4" v-if="$fetchState.pending">Fetching featured hotels...</p>
  <div class="mt-4 featured" v-else>
    <h1>Featured Hotels</h1>
    <b-card-group deck>
      <b-card v-for="item in model" :key="`featureshotel${item.id}`" :img-src="item.thumb" img-alt="Image" img-top>
        <small>{{item.location}}</small>
        <b-card-title>
          <NuxtLink :to="item.url">{{item.hotelname}}</NuxtLink>
        </b-card-title>
      </b-card>
    </b-card-group>
  </div>
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
      'http://my-json-server.typicode.com/firatgokalp/tourismjsonserver/featured'
    ).then(res => res.json())
  }
}
</script>

<style lang="scss" scoped>
.featured {
  .card-title {
    font-size: 16px;
  }
}
</style>
