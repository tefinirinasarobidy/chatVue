<template>
    <div>
        <InfoUser
        :conversation="conversation"></InfoUser>
        <div class="position-relative">
            <div class="chat-messages p-4">

                <div :class="mes.customer_id == id ? 'chat-message-right':'chat-message-left'" class=" pb-4" v-for="mes in message" :key="mes.id">
                    <div>
                        <img v-if="mes.customer.active_profile" :src="pathPdp + mes.customer.active_profile.media.file_name" class="rounded-circle mr-1"  width="40" height="40">
                        <img v-else src="../../../public/avatar.png" class="rounded-circle mr-1"  width="40" height="40">
                        <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div class="font-weight-bold mb-1" v-if="mes.customer_id != id">{{mes.customer.firstname + ' ' + mes.customer.lastname}}</div>
                        {{mes.message}}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import InfoUser from './InfoUser.vue'
import config from '@/config/config'
export default {
    name:'ListMessage',
    props: {
        message: Array,
        conversation: Object
    },
    components: {
        InfoUser
    },
    data() {
        return {
            id: localStorage.getItem('user'),
            pathPdp: config.baseUrl + 'images/profile/',
        }
    },
}
</script>