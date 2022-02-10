<template>
    <div class="container">
        <h1 class="title">Con nuestros 3 perfiles cubrimos todas las necesidades una logística de última milla.</h1>
        <div class="items">           
            <div  class="content">
                <img class="img" src="../assets/img/repartidor.png" alt="repartidor">            

            </div>

            <div class="content">
                <h4>Repartidor</h4>
                <p>Podrás recibir la planificación de tus rutas, asignar comprobantes del despacho, registrar incidencias, entre otras funcionalidades.</p>

            </div>
            <div class="clearfloat"></div>
            
           
        </div>
        <div class="items">           
            <div  class="content">
                <img class="img" src="../assets/img/administrador.png" alt="administrador">            

            </div>

            <div class="content">
                <h4>Administrador</h4>
                <p>Podrás crear repartidores o clientes, planificar y escoger las mejores rutas, asignar a los repartidores, gestionar indicadores, ver historial de repartos, entre otras funcionalidades.</p>

            </div>
            <div class="clearfloat"></div>
            
           
        </div>
        <div class="items">           
            <div  class="content">
                <img class="img" src="../assets/img/cliente.png" alt="repartidor">            

            </div>

            <div class="content">
                <h4>Cliente</h4>
                <p>Podrás permitir a tus clientes ingresar todos sus requerimientos de manera individual o masiva, controlar sus tarifas, escoger el tipo de servicio, personalizar sus rotulados, entre otras funcionalidades.</p>

            </div>
            <div class="clearfloat"></div>
            
           
        </div>
        
        
    </div>
       
    
</template>


<style scoped>
.container{
  display: block;
  /* justify-content: flex-end; */
  margin-bottom: 20px;
  margin-top: 20px;
}

.title{
    text-align: center;
    font-family: var(--font-bold);
    font-size: 40px;
    line-height: 1.5;
    /* width: 100%; */
}

.items{
    margin-top: 30px;
}
.content
{
    /* display: block; */
    float: left;
    width: 50%;
}

.img{
    width: 50%;
    margin: 0px auto;
    display: block;
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
    }
    .items p{
        font-size: 12px;
    }
    


}
</style>