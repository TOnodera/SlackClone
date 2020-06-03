<template>
  <div>
    <h1>Slack Clone</h1>
    <p>ログイン中</p>
    <div>
      <button class="py-1 px-4 bg-gray-800 text-white rouded">サインアウト</button>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  name: 'Home',
  data() {
    return {
      message: '',
      messages:[]
    }
  },
  mounted() {
    firebase.database().ref('slack')
      .on('value',snapshot =>{this.messages=snapshot.val()})
  },
  methods:{
    addMessage() {
      firebase.database().ref('slack')
        .push({
          content: this.message,
          user: {
            name: 'Jhon Doe'
          }
        })
    },
    deleteMessage(index) {
      firebase
        .database()
        .ref('slack')
        .child(index)
        .remove()
    }
  }
}
</script>
