<template>
  <div class="flex h-screen">
    <div class="w-1/5 bg-gray-800 text-white pt-3 px-4">
      <div class="flex justify-between items-center">
        <h1 class="font-semibold text-xl leading-tight">Slack Clone</h1>
        <Notification/>
      </div>
      <div class="flex items-center">
         <span class="bg-yellow-400 rounded-full w-3 h-3 mr-2"></span>
         <span class="opacity-50">{{user.email}}</span>
      </div>
      <div class="mt-5 flex justify-between items-center">
        <div class="font-bold opacity-50 text-lg">
          <div
          class="opacity-50 mt-1"
          v-for="channel in channels"
          :key="channel.id">#{{channel.channel_name}}</div>
        </div>
        <PlusCircle/>
       </div>
       <div class="mt-5 flex justify-between items-center">
          <div class="font-bold opacity-50 text-lg">ダイレクトメッセージ</div>
          <PlusCircle />
        </div>
        <div class="mt-2 flex items-center" v-for="user in users" :key="user.user_id">
          <span class="bg-yellow-400 rounded-full w-3 h-3 mr-2"></span>
          <span class="opacity-50">{{ user.email }}</span>
        </div>
    </div>
    <div class="flex-grow bg-gray-100">
      <header class="border-b">
        <div class="flex justify-between m-3">
          <div class="font-bold text-lg">{{ user.email}}</div>
          <div>
            <button class="py-1 px-4 bg-gray-800 text-white rounded" @click="singOut">サインアウト</button>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/database'
import Notification from '../components/icons/Notification.vue'
import PlusCircle from '../components/icons/PlusCircle.vue'

export default {
  name: 'Home',
  components:{
    Notification,
    PlusCircle
  },
  data() {
    return {
      user: '',
      users: [
        {
          user_id: 11,
          email: "john@example.com"
        },
        {
          user_id: 12,
          email: "kevin@test.com"
        },
        {
          user_id: 13,
          email: "susan@test.com"
        }
      ],
      channels:[
        {
          id:1,
          channel_name: '営業'
        },
        {
          id:2,
          channel_name: 'マーケティング'
        },
        {
          id:3,
          channel_name: '情シス'
        }
      ]
    }
  },
  mounted() {
    this.user = firebase.auth().currentUser
  },
  methods:{
    signOut() {
      firebase.auth().signOut()
      this.$router.push('/signin')
    }
  }
}
</script>
