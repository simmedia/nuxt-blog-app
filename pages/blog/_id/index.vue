<template>
  <div>
    <h2>{{ id }}</h2>
    <h3>{{ post }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
      //   post: null
    }
  },
  created() {
    // console.log(post)
  },
  computed: {
    post() {
      return this.$store.getters.getPosts.find(post => post.title === this.id)
    }
  }
}
</script>

<style></style>
