<template>
    <div class="container">
        <div class="main-body">
        
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img v-if="infoUser.active_profile" :src="pathPdp + infoUser.active_profile.media.file_name" alt="Admin" class="rounded-circle" width="150" height="150">
                        <img v-else src="../../public/defaulpdp.jpeg" alt="Admin" class="rounded-circle" width="150" height="150">
                        <div class="logo" @click="openFile()" v-if="id == id_connecter">
                          <img src="../../public/camera.svg" alt="">
                          <input @change="piece_jointe($event)" ref="picture" id="picture" type="file" class="form-control d-none" accept="image/*" name="picture" autofocus>
                        </div>
                        <div class="mt-3">
                          <h4>John Doe</h4>
                          <p class="text-secondary mb-1">Full Stack Developer</p>
                          <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                          <button class="btn btn-outline-primary" v-if="id != id_connecter">Message</button>
                        </div>
                      </div>
                    </div>
                  </div>

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
                      <div class="row" v-if="id == id_connecter">
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
import profileService from '../service/profileService.js'
export default {
    name:'ProfileView',
    props:['id'],
    data() {
      return {
        formImg: {
          image: '',
          type:'image'
        },
        infoUser: null,
        pathPdp: config.baseUrl + 'images/profile/',
        id_connecter: localStorage.getItem('user')
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
      }
    },
    mounted() {
       profileService.profile(this.id).then(res => {
        console.log(res);
        this.infoUser = res.data 
       })
    },
}
</script>
<style scoped>
    body{
        margin-top:20px;
        color: #1a202c;
        text-align: left;
        background-color: #e2e8f0;    
    }
    .main-body {
        padding: 15px;
    }
    .card {
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0 solid rgba(0,0,0,.125);
        border-radius: .25rem;
    }

    .card-body {
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1rem;
    }

    .gutters-sm {
        margin-right: -8px;
        margin-left: -8px;
    }

    .gutters-sm>.col, .gutters-sm>[class*=col-] {
        padding-right: 8px;
        padding-left: 8px;
    }
    .mb-3, .my-3 {
        margin-bottom: 1rem!important;
    }

    .bg-gray-300 {
        background-color: #e2e8f0;
    }
    .h-100 {
        height: 100%!important;
    }
    .shadow-none {
        box-shadow: none!important;
    }
    .logo {
    width: 30px;
    height: 25px;
    background: #837878;
    border-radius: 9px;
    position: absolute;
    top: 150px;
}
</style>