﻿<template>
<div class="container mt-4">
  <h1>{{model.hotelname}}</h1>
  <b-card
    overlay
    :img-src="model.img"
    :img-alt="model.hotelname"
    :title="model.hotelname"
    :sub-title="`${model.location} | ${model.concept}`"
  >
  </b-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  async fetch () {
    this.model = await fetch(`/api/hotels/${this.$route.params.id}`)
                     .then((res) => res.json())
  }
}
</script>
