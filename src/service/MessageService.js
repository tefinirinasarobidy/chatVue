import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import config from '../config/config.js'
export default {
    allConversation() {
        return axios.get(config.baseUrl + 'api/conversation',config.headers)
    },
    getMessage(conv_id) {
        return axios.get(config.baseUrl + 'api/conversation/show/' + conv_id,config.headers)
    },
    sendMessage(form) {
        return axios.post(config.baseUrl + 'api/conversation/send' ,form, config.headers)
    }
}