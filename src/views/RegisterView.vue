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
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example16cg" v-model="form.lastname" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example14cg">Your lastname</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example17cg" v-model="form.username" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example12cg">Your username</label>
                  </div>
                  <div class="input-group mb-4">
                        <label class="input-group-text" for="inputGroupSelect01">Sexe</label>
                    <select v-model="form.sexe" class="custom-select form-control form-control-lg" id="inputGroupSelect01">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" v-model="form.email" id="form3Example3cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" v-model="form.password" id="form3Example4cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" v-model="confirm_pass" id="form3Example4cdg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
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
</style>
<script>
import authService from '../service/authService.js'
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
            confirm_pass: ''
        }
    },
    methods: {
      register() {
        if(this.form.password == this.confirm_pass){
          authService.register(this.form).then(res => {
            if (res.data.access_token) {
              localStorage.setItem('token', res.data.access_token)
              this.$router.push('/')       
            }
        })
         
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