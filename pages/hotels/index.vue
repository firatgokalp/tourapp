﻿<template>
  <div class="container">
    <GlobalPageTitle>Search results for "{{$route.query.keyword}}"</GlobalPageTitle>
    <!-- <h1 class="mt-4 mb-3">Search results for "{{$route.query.keyword}}"</h1> -->
    <ul class="list-unstyled">
      <b-media tag="li" v-for="item in model" :key="`hotelitem${item.id}`" class="p-3 border m-2">
        <template #aside>
          <a :href="item.url">
            <b-img :src="item.thumb" width="64" :alt="item.hotelname"></b-img>
          </a>
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
      '/api/hotels'
    ).then(res => res.json())
  }
}
</script>
