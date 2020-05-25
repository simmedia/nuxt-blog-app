export const state = () => ({
    posts: [
        {title: 'post1', name: 'Stefan'},
        {title: 'post2', name: 'Milica'},
        {title: 'post3', name: 'Petar'}
      ]
})

export const getters = {
    getPosts (state) {
      return state.posts
    }
  }