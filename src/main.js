import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Swal from 'sweetalert2'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('hintAlert', {
  success: (text) => {
    Swal.fire({
      icon: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500,
    })
  },
  warning: (text) => {
    Swal.fire({
      icon: 'warning',
      title: text,
      showConfirmButton: false,
      timer: 1500,
    })
  },
})
app.mount('#app')
