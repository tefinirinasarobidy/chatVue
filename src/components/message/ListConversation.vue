<template>
    <div>
        <div class="px-4 d-none d-md-block">
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <input type="text" class="form-control my-3" placeholder="Search...">
                </div>
            </div>
        </div>

        <button @click="voir(conv)" class="list-group-item list-group-item-action border-0" v-for="conv in conversation" :key="conv.id">
            <!-- <div class="badge bg-success float-right">5</div> -->
            <div class="d-flex align-items-start">
                <img v-if="conv.talked.customer.active_profile" :src="pathPdp + conv.talked.customer.active_profile.media.file_name" class="rounded-circle mr-1"  width="40" height="40">
                <img v-else src="../../../public/avatar.png" class="rounded-circle mr-1"  width="40" height="40">
                <div class="flex-grow-1 ml-3 limitelign">
                   {{conv.talked.customer.firstname + ' ' +  conv.talked.customer.lastname}}
                    <div class="small">{{conv.last_message.message}}
                        <span class="fas fa-circle chat-online"></span>
                         <!-- Online -->
                        </div>
                </div>
            </div>
        </button>
        <hr class="d-block d-lg-none mt-1 mb-0">
    </div>
</template>
<script>
import config from '@/config/config'
export default {
    name:'ListConversation',
    props:{
        conversation: Array
    },
    data() {
        return {
            pathPdp: config.baseUrl + 'images/profile/',
        }
    },
    methods: {
        voir(conv) {
            this.$emit('seeMessage',conv)
        }
    },
}
</script>