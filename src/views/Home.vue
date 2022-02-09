<template>

<!-- <Navbar/> -->
<h1>hoome</h1>
<Bienvenida/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar,
    Bienvenida
  }
}
</script>


