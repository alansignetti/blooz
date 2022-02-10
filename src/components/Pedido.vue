<template>
    <div class="container">
        <div class="content">
        <h1 class="title">Recogemos tus pedidos y el mismo día los entregamos</h1>
    
    <div class="items">
        <img class="img" src="../assets/img/pedido.png" alt="pedido">
        <div class="subtitle">
            <h4>Somos una plataforma para gestionar todos tus repartos en Lima con enfoque logístico, donde encontrarás Bloozers (repartidores) disponibles, podrás hacerle seguimiento a tus pedidos y tener evidencia de la entrega.</h4>

        </div>
            </div>
                

    </div>
 <div class="clearfloat"></div>
   

    </div>

</template>

<style scoped>

.container{
    margin-top: 10px;
    margin-bottom: 20px;
    margin: 0px auto;
    width: 100%;
}


.title{
    
    text-align: center;
    font-family: var(--font-bold);
    font-size: 40px;
    line-height: 1.5;
}

.img{
    width: 50%;
}
.items
{  
    float: left;
}
.subtitle{
    width: 45%;
    float: right;
    margin-top: 150px;
}
.items h4{

        margin-top: 20px;
        font-size: 18px;
}

.clearfloat{
    float: none;
    clear: both;
}




@media screen and (max-width: 40.375em){
    .title{
        font-size: 20px;
    }

    .items h4{
        font-size: 15px;
        margin-top: 0px;
    }
    .items p{
        font-size: 12px;
    }

    .subtitle{
    width: 45%;
    float: right;
    margin-top: 50px;
}
    


}
</style>


