<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'profile', params: { id: id }}">Mon Profile</router-link> |
      <router-link to="/message">Message</router-link> |
      <router-link to="/liste-user">Liste Utilisateru</router-link> |
      <a  @click="logout()">logout</a>
    </nav> 
    <router-view to="/" /> 
  </div>
</template>
<script>
import authService from './service/authService.js'
export default {
  data() {
    return {
      token : localStorage.getItem('token'),
      id: localStorage.getItem('user')
    }
  },
  methods: {
    logout(){
     authService.logout().then(res => {
      console.log(res);
      if(res.data) {
        localStorage.removeItem('token');
        this.$router.push('/login')
      }
     })
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
.limitelign{
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
