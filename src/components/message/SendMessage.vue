<template>
     <div class="flex-grow-0 py-3 px-4 border-top">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Type your message" v-model="message">
            <button class="btn btn-primary" @click="send()">Send</button>
        </div>
    </div>
</template>
<script>
import MessageService from '@/service/MessageService'
export default {
    name:'SendMessage',
    props: {
        conversation: Object
    },
    data() {
        return {  
            message: null,  
        }
    },
    methods: {
        send() {
            let data = {
                talked_id: this.conversation.talked.customer_id,
                conversation_id: this.conversation.id,
                message : this.message
            }
            console.log(data);
            MessageService.sendMessage(data).then(res => {
                console.log('res',res);
            })
        }
    },
}
</script>