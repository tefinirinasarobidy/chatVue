<template>
  <div class="home">
  <nav>
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/message">Message</router-link>
    </nav>  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
