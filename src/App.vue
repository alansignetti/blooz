<template>
  <div id="app">
    <Navbar
      name="Moover"
      :navLinks="[
        {
          name: 'Home',
          link: '/bienvenida',
          dropdown: false,
        },

        { name: 'Pedir', link: '/pedir', dropdown: false },
        { name: 'Contacto', link: '/contacto', dropdown: false },


      ]"
    />

<Bienvenida />
  </div>
     
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
// import Bienvenida from '@/components/Bienvenida.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // Bienvenida
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