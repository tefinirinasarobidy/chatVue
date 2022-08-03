<template>
    <div class="container">
        <div class="main-body">
        
              <div class="row gutters-sm" v-if="infoUser">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img v-if="infoUser.active_profile" :src="pathPdp + infoUser.active_profile.media.file_name" alt="Admin" class="rounded-circle" width="150" height="150">
                        <img v-else src="../../../public/avatar.png" alt="Admin" class="rounded-circle" width="150" height="150">
                        <div class="logo" @click="openFile()" v-if="id_user == id_connecter">
                          <img src="../../../public/camera.svg" alt="">
                          <input @change="piece_jointe($event)" ref="picture" id="picture" type="file" class="form-control d-none" accept="image/*" name="picture" autofocus>
                        </div>
                        <div class="mt-3">
                          <h4>John Doe</h4>
                          <p class="text-secondary mb-1">Full Stack Developer</p>
                          <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                          <button class="btn btn-outline-primary" @click="userSelected = infoUser" v-if="id_user != id_connecter" data-bs-toggle="modal" data-bs-target="#exampleModal">Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                   <!-- Modal -->
                  <DemareMessage
                  :user ="userSelected"
                  @newConv = "newConversation"></DemareMessage>
                </div>
                
                <div class="col-md-8" >
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">First Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="text" v-model="infoUser.firstname" class="form-control">
                        </div>
                      </div>
                      <hr>
                       <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Lastname</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="text" v-model="infoUser.lastname" class="form-control">
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="email" v-model="infoUser.email" class="form-control">
                        </div>
                      </div>
                      <hr>
                     
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Sexe</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <select v-model="infoUser.sexe" class="custom-select form-control" id="inputGroupSelect01">
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                        </div>
                      </div>
                      
                      <hr>
                      <div class="row" v-if="id_user == id_connecter">
                        <div class="col-sm-12" @click.prevent="edit()">
                          <button class="btn btn-info " target="__blank" >Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
        </div>
</template>
<script>
import config from '@/config/config.js'
import profileService from '../../service/profileService.js'
import DemareMessage from '@/components/DemareMessage.vue'
export default {
    name:'ProfileView',
    props:['id'],
    components: {
      DemareMessage
    },
    data() {
      return {
        formImg: {
          image: '',
          type:'image'
        },
        infoUser: null,
        pathPdp: config.baseUrl + 'images/profile/',
        id_connecter: localStorage.getItem('user'),
        id_params: this.$route.params.id,
        id_user: null,
        userSelected: null
      }
    },
    methods: {
      openFile() {
        this.$refs.picture.click()
      },
      piece_jointe(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.formImg.image = e.target.result;
                this.modifPdp()
            };
            reader.readAsDataURL(input.files[0]);
        }
      },
      modifPdp() {
        profileService.updatePdp(this.formImg,this.id).then(res => {
            console.log(res);
        })
      },
      edit() {
        profileService.editInfoUser(this.infoUser,this.id).then(res => {
          console.log(res);
        })
      },
      newConversation(conv){
        this.userSelected.convExist = conv
      }
    },
    mounted() {
      this.id_user = this.id? this.id : this.id_params
       profileService.profile(this.id_user).then(res => {
        console.log(res);
        this.infoUser = res.data 
       })
    },
}
</script>
<style scoped>
    @import 'profile.css';
</style>