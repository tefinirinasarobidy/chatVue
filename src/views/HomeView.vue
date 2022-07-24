<template>
  <div class="home"> 
     <ProfileView :id="id"></ProfileView> 
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileView from './profile/ProfileView.vue'

export default {
  name: 'HomeView',
  components: {
    ProfileView
  },
  data() {
    return {
      id: localStorage.getItem('user')
    }
  },
}
</script>
