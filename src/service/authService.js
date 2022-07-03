
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import config from '../config/config.js'
export default  {
    login(form) {
        console.log('ddde',form,config.baseUrl);
        return axios.post(config.baseUrl + 'api/login',form)
    },
    register(form) {
        return axios.post(config.baseUrl + 'api/register',form)
    }
}
