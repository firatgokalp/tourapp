<template>
  <div class="container">
    <ul class="list-unstyled">
      <b-media tag="li" v-for="item in model" :key="`hotelitem${item.id}`" class="p-3 border m-2">
        <template #aside>
          <NuxtLink :to="item.url">
            <b-img :src="item.thumb" width="64" :alt="item.hotelname"></b-img>
          </NuxtLink>
        </template>
        <h5 class="mt-0 mb-1">
          <NuxtLink :to="item.url">
            {{item.hotelname}}
          </NuxtLink>
        </h5>
        <small>{{item.location}} | {{item.concept}}</small>
      </b-media>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: []
    }
  },
  async fetch () {
    this.model = await fetch(
      'http://my-json-server.typicode.com/firatgokalp/tourismjsonserver/hotels'
    ).then(res => res.json())
  }
}
</script>
