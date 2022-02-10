<template>

<div class="body">

    <div class="container mt-5 d-flex justify-content-center">
    <div class="card p-4 mt-3">
        <div class="first d-flex justify-content-between align-items-center mb-3">
            <div class="info"> <span class="d-block name">Gracias!</span> <span class="order">Nro Orden - 4554645</span> </div> <img src="https://i.imgur.com/NiAVkEw.png" width="40" />
        </div>
        <div class="detail"> <span class="d-block summery">Su orden ha sido despachada. estamos entregando su pedido.</span> </div>
        <hr>
        <div class="text"> <span class="d-block new mb-1">Alan Signetti</span> </div> <span class="d-block address mb-3">Calle 123, Buenos Aires, Argentina</span>
        <div class=" money d-flex flex-row mt-2 align-items-center"> <img src="https://i.imgur.com/ppwgjMU.png" width="20" /> <span class="ml-2">Efectivo</span> </div>
        <div class="last d-flex align-items-center mt-3"> <span class="address-line">Cambiar dirección</span> </div>
    </div>
</div>
</div>


</template>



<script>
export default {
  name: 'Estado',
  components: {
  }
}
</script>

<style scoped>

.body{
    height: 400px;
}
.card {
    
    background-color: #fff;
    width: 300px;
    border: none;
    border-radius: 16px;
    margin-bottom: 150px;
}

.info {
    line-height: 19px;
}

.name {
    color: #4c40e0;
    font-size: 18px;
    font-weight: 600;
}

.order {
    font-size: 14px;
    font-weight: 400;
    color: #b7b5b5;
}

.detail {
    line-height: 19px;
}

.summery {
    color: #d2cfcf;
    font-weight: 400;
    font-size: 13px;
}

.text {
    line-height: 15px;
}

.new {
    color: #000;
    font-size: 14px;
    font-weight: 600;
}

.money {
    font-size: 14px;
    font-weight: 500;
}

.address {
    color: #d2cfcf;
    font-weight: 500;
    font-size: 14px;
}

.last {
    font-size: 10px;
    font-weight: 500;
}

.address-line {
    color: #4C40E0;
    font-size: 11px;
    font-weight: 700;
}
</style>
