<template>
     <section class="vh-100" style="background-color: #508bfc;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">
      
                  <h3 class="mb-5">Sign in</h3>
                  <div class="error" v-if="showError">
                      <p class="mb-0">mot de pass ou email erreur</p>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" v-model="form.email" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                  </div>
                  <div class="error" v-if="!this.$v.form.email.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>
      
                  <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" v-model="form.password" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX-2">Mot de pass </label>
                  </div>
                  <div class="error" v-if="!this.$v.form.password.required && submited">
                      <p class="mb-0">Obligatoire</p>
                  </div>
      
                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" type="checkbox"  value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Se souvient de moi</label>
                  </div>
      
                  <button class="btn btn-primary btn-lg btn-block" type="submit" @click.prevent="login()">Login</button>
      
                  <hr class="my-4">
                  <router-link to="/register">creer un compte </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
import auhtService from '../../service/authService.js'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { required } from 'vuelidate/lib/validators'
export default {
    name: 'LoginView',
    data() {
        return {
            form : {
                email: '',
                password: ''
            },
            submited : false,
            showError: false
            
        }
    },
    validations: {
      form: {
        email: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
        login(){
          this.submited = true
          console.log(this.$v);
          if (!this.$v.form.$invalid) {           
            auhtService.login(this.form).then(res => {
              console.log(res);
              if (res.data.access_token) {
                localStorage.setItem('token', res.data.access_token)
                localStorage.setItem('user', res.data.user)
                window.location.href = '/'
                     
              }
              if (res.data.error) {
                console.log("error");
                this.showError = true
              }
           });
          }
        }
    },
}
</script>