<template>
  <div id="app">
    <Navbar
      name="Moover"
      :navLinks="[
        {
          name: 'Home',
          link: '/',
          dropdown: false,
        },

        { name: 'Pedir', link: '/pedir', dropdown: false },
        { name: 'Contacto', link: '/contacto', dropdown: false },


      ]"
    />


  </div>
         
     <router-view></router-view>
    <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
</style>