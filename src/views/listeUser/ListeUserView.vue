<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <div class="people-nearby">           
                    <div class="nearby-user">
                        <div class="row" v-for="user in alluser" :key="user.id">
                            <div class="col-md-2 col-sm-2">
                                <img v-if="user.active_profile" :src="pathPdp + user.active_profile.media.file_name" alt="Admin" class="profile-photo-lg" >
                                <img v-else src="../../../public/avatar.png" alt="avatar" class="profile-photo-lg" >
                            </div>
                            <div class="col-md-7 col-sm-7">
                                <h5>{{user.firstname}} {{user.lastname}}</h5>
                                <p>{{user.username}}</p>
                                <!-- <p class="text-muted">500m away</p> -->
                            </div>
                            <div class="col-md-3 col-sm-3 d-flex">
                                <button @click="seeProfile(user.id)" class="btn btn-seconde pull-right">Voir Profile</button>
                                <button @click="message(user)" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <DemareMessage
        :user ="userSelected"
        @newConv = "newConversation"></DemareMessage>
    </div>
</template>
<script>
import profileService from '@/service/profileService'
import config from '@/config/config.js'
import DemareMessage from '@/components/DemareMessage'
profileService
export default {
    name:'ListeUserView',
    components: {
        DemareMessage
    },
    data() {
        return {
            alluser: [],
            pathPdp: config.baseUrl + 'images/profile/',
            userSelected: null,
            
        }
    },
    methods: {
        seeProfile(id) {
            this.$router.push({ name: 'profile', params: { id: id }})
        },
        message(user){
            this.userSelected = user 
        },
        newConversation(conv,user){
            console.log('value',conv,user);
            let i = this.alluser.findIndex(el => el.id == user.id)
            if (i > -1) {
                this.alluser[i].convExist = conv
            }
        }
        
    },
    mounted() {
        profileService.allUser().then(res => {
            console.log('res',res);
            this.alluser = res.data.data
        })
    },
}
</script>
<style scoped>
@import 'liste.css';
</style>