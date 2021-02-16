<template>
<div class="container mt-4">
  <h1>Edit - {{model.hotelname}}</h1>
  <p>Editing form...</p>
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
    this.model = await fetch(`http://my-json-server.typicode.com/firatgokalp/tourismjsonserver/hotels/${this.$route.params.id}`)
                     .then((res) => res.json())
  }
}
</script>
