
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import config from '../config/config.js'
export default  {
    login(form) {
        console.log('ddde',form,config.baseUrl);
         axios.post(config.baseUrl + 'api/login',form).then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.access_token)
            this.$router.push('/home')
         });
    },
    register(form) {
        axios.post(config.baseUrl + 'api/register',form).then(res => {
            localStorage.setItem('token', res.data.access_token)
            this.$router.push('/home')
        })
    }
}
