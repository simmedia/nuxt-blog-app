<template>
  <v-container>
    <div class="display-1">Blog</div>
    <div class="posts-list ma-5">
      <ul>
        <nuxt-link :to="'/blog/' + post.title " v-for="(post, index) in posts" :key="index">{{post.title}}</nuxt-link>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts
    }
  }
}
</script>

<style>

</style>