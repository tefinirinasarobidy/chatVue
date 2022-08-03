<template>
<div class="parent">
  <section class="vh-100 bg-image" style="background-color: #508bfc; height:100vh">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                <form>

                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example15cg" v-model="form.firstname" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example15cg">Your firstname</label>
                  </div>
                   <div class="error" v-if="!this.$v.form.firstname.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example16cg" v-model="form.lastname" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example14cg">Your lastname</label>
                  </div>
                  <div class="error" v-if="!this.$v.form.lastname.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example17cg" v-model="form.username" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example12cg">Your username</label>
                  </div>
                  <div class="error" v-if="!this.$v.form.username.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>
                  <div class="error" v-if="usernameExist">
                      <p class="mb-0">username deja exister</p>
                  </div>
                  <div class="input-group mb-4">
                        <label class="input-group-text" for="inputGroupSelect01">Sexe</label>
                    <select v-model="form.sexe" class="custom-select form-control form-control-lg" id="inputGroupSelect01">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                  </div>
                   <div class="error" v-if="!this.$v.form.sexe.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" v-model="form.email" id="form3Example3cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>
                   <div class="error" v-if="!this.$v.form.email.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>
                  <div class="error" v-if="mailExist">
                      <p class="mb-0">email deja exister</p>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" v-model="form.password" id="form3Example4cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>
                  <div class="error" v-if="!this.$v.form.password.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" v-model="confirm_pass" id="form3Example4cdg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  </div>
                  <div class="error" v-if="!this.$v.confirm_pass.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="button" @click.prevent="register()"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <router-link to="/"
                      class="fw-bold text-body"><u>Login here</u></router-link></p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</template>
<style scoped>
  .parent{
    height: 998px!important;
    background-color: rgb(80, 139, 252);
  }
  .error {
      color: red;
      margin-top: -34px;
  }
</style>
<script>
import authService from '../service/authService.js'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { required } from 'vuelidate/lib/validators'
export default {
    name:"RegisterView",
    data() {
        return {
            form: {
                email:'',
                firstname: '',
                lastname: '',
                username: '',
                sexe: '',
                password: ''
            },
            confirm_pass: '',
            submited: false,
            mailExist: false,
            usernameExist: false
        }
    },
    validations: {
      form: {
        email: {
          required
        },
        firstname: {
          required
        },
        lastname: {
          required
        },
        username: {
          required
        },
        sexe: {
          required
        },
        password: {
          required
        }
      },
      confirm_pass: {
        required
      }
    },
    methods: {
      register() {
        this.submited = true
        console.log(this.$v);
        if (!this.$v.form.$invalid) {  
          if(this.form.password == this.confirm_pass){
            authService.register(this.form).then(res => {
              console.log(res);
              this.mailExist = false
              this.usernameExist = false
              if (res.data.access_token) {
                localStorage.setItem('token', res.data.access_token)
                localStorage.setItem('user', res.data.user)
                window.location.href = '/'      
              }
              if (res.data.warning) {
                if (res.data.warning.email) {
                  this.mailExist = true
                }
                if (res.data.warning.username) {
                  this.usernameExist = true
                }
              }
              
          })
        }
         
              // localStorage.setItem('storedData', this.input)
              // localStorage.getItem('storedData');
              //  localStorage.removeItem(vuex.videos);
        }
        else {
          alert('mot de pass incorrect')
        }
      }
    },
}
</script>