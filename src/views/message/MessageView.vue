<template>
    <div>
        <main class="content">
            <div class="container p-0">

                <h1 class="h3 mb-3">Messages</h1>

                <div class="card">
                    <div class="row g-0">
                        <div class="col-12 col-lg-5 col-xl-3 border-right">
                            <ListConversation
                            :conversation = "allconversation"
                            @seeMessage = "onClickSeeMessage">
                            </ListConversation> 
                        </div>
                        <div class="col-12 col-lg-7 col-xl-9">
                            <ListMessage 
                            :message = "allMessage"
                            :conversation = "conversationSelected"
                            >
                            </ListMessage> 
                            <SendMessage
                            :conversation = "conversationSelected">
                            </SendMessage>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import ListConversation from '@/components/message/ListConversation'
import ListMessage from '@/components/message/ListMessage'
import SendMessage from '@/components/message/SendMessage'
import MessageService from '@/service/MessageService'
import echo from '@/config/echo'
export default {
    name:'MessageView',
    components: {
		ListConversation,
        ListMessage,
        SendMessage
	},
    data() {
        return {
            allconversation: [],
            conversationSelected: null,
            allMessage: []
        }
    },
    watch: {
        conversationSelected: {
            handler(value){
                console.log('rerererere',value);
                window.Echo.private('conversation.'+value.id).listen('.newMessage', (data) => {
                    console.log('data', data)
                    if (data.data) {
                        this.allMessage.push(data.data)
                    }
                });
                this.getMessage(value)
            }
        }
    },
    methods: {
        onClickSeeMessage(value){
            this.conversationSelected = value 
        },
        getMessage(conversation) {
            MessageService.getMessage(conversation.id).then(res => {
                console.log('message',res);
                this.allMessage = res.data.data
            })
        }
    },
    mounted() {
        MessageService.allConversation().then(res => {
            console.log('res',res);
            this.allconversation = res.data.data
        })
        echo.configEcho(localStorage.getItem('token'))
        console.log('echo',echo);
        
        // console.log(a);
    },
}
</script>
<style scoped>
    @import 'message.css';
</style>