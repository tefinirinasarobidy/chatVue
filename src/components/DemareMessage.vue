<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="py-2 px-4 border-bottom d-none d-lg-block" v-if="user">
                    <div class="d-flex align-items-center py-1">
                        <div class="position-relative">
                            <img v-if="user.active_profile" :src="pathPdp + user.active_profile.media.file_name" alt="Admin" class="rounded-circle mr-1"  width="40" height="40">
                            <img v-else src="../../public/avatar.png" alt="avatar" class="rounded-circle mr-1"  width="40" height="40">
                        </div>
                        <div class="flex-grow-1 pl-3">
                            <strong>{{user.firstname + ' ' + user.lastname}}</strong>
                        </div>
                    </div>
                </div>
                <div class="position-relative">
                    <div class="chat-messages p-4">
                        <div :class="mes.customer_id == id ? 'chat-message-right':'chat-message-left'" class=" pb-4" v-for="mes in allMessage" :key="mes.id">
                            <div>
                                <img v-if="mes.customer.active_profile" :src="pathPdp + mes.customer.active_profile.media.file_name" class="rounded-circle mr-1"  width="40" height="40">
                                <img v-else src="../../public/avatar.png" class="rounded-circle mr-1"  width="40" height="40">
                                <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                            </div>
                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                <div class="font-weight-bold mb-1" v-if="mes.customer_id != id">{{mes.customer.firstname + ' ' + mes.customer.lastname}}</div>
                                {{mes.message}}
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex-grow-0 py-3 px-4 border-top">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Type your message" v-model="message">
                        <button class="btn btn-primary" @click="sendMessage()">Send</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import config from '@/config/config.js'
import MessageService from '@/service/MessageService'
import echo from '@/config/echo'
export default {
    name:'DemareMessage',
    props: {
        user: Object
    },
    data() {
        return {
            allMessage: [],
            id: localStorage.getItem('user'),
            pathPdp: config.baseUrl + 'images/profile/',
            message: ''
        }
    },
    watch: {
        user: {
            handler(value) {
                console.log('value',value);   
                if (value.convExist) {
                    this.allMessage = []
                    window.Echo.private('conversation.'+value.convExist.id).listen('.newMessage', (data) => {
                        console.log('new message', data)
                        let i = this.allMessage.findIndex(el => el.id == data.data.id)
                        if (data.data && i == -1) {
                            this.allMessage.push(data.data)
                        }
                    });
                    this.getMessage(value.convExist)
                }
            }
        }
    },
    methods: {
        getMessage(conversation) {
            MessageService.getMessage(conversation.id).then(res => {
                console.log('message',res);
                this.allMessage = res.data.data
            })
        },
        sendMessage() {
            let data = {
                talked_id: this.user.id,
                conversation_id: this.user.convExist? this.user.convExist.id : null,
                message : this.message
            }
            console.log(data);
            MessageService.sendMessage(data).then(res => {
                let i = this.allMessage.findIndex(el => el.id == res.data.id)
                if (i == -1) {
                    this.allMessage.push(res.data)
                }
                this.message = ''
                this.$emit('newConv',res.data.conversation,this.user)
            })
        }
    },
    mounted() {
        echo.configEcho(localStorage.getItem('token'))
        console.log('echo',echo);
    },
}
</script>
<style scoped>
    .myform {
    max-width: 100%;
    }
    .modal-body {
    padding: 0;
    }
    .chat-online {
    color: #34ce57
    }

    .chat-offline {
    color: #e4606d
    }

    .chat-messages {
    display: flex;
    flex-direction: column;
    max-height: 800px;
    overflow-y: scroll
    }

    .chat-message-left,
    .chat-message-right {
    display: flex;
    flex-shrink: 0
    }

    .chat-message-left {
    margin-right: auto
    }

    .chat-message-right {
    flex-direction: row-reverse;
    margin-left: auto
    }
    .py-3 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
    }
    .px-4 {
    padding-right: 1.5rem!important;
    padding-left: 1.5rem!important;
    }
    .flex-grow-0 {
    flex-grow: 0!important;
    }
    .border-top {
    border-top: 1px solid #dee2e6!important;
    }
</style>