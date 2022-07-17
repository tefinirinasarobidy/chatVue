import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import config from '../config/config.js'
export default {
    profile(id) {
        return axios.get(config.baseUrl + 'api/profile/' + id,config.headers)
    },
    updatePdp(form,id) {
        return axios.post(config.baseUrl + 'api/profile/update/' + id,form,config.headers)
    },
    editInfoUser(form,id) {
        return axios.put(config.baseUrl +'api/profile/update-info/' + id, form, config.headers)
    }
}