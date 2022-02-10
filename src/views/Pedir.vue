<template>


<Pedido></Pedido>
<HowItWorks></HowItWorks>
</template>



<script>

import HowItWorks from '@/components/HowItWorks.vue'
import Pedido from '@/components/Pedido.vue'

export default {
  name: 'Pedir',
  components: {
    HowItWorks,
    Pedido
  }
}
</script>
