<template>
  <div id="app">
    <nav v-if="token">
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/message">Message</router-link> |
      <a  @click="logout()">logout</a>
    </nav> 
    <router-view to="/" /> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      token : localStorage.getItem('token')
    }
  },
  methods: {
    logout(){
     
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@import'assets/bootstrap.css'
</style>
