<template>
    <div class="body">

        <form class="form">
        <h2>Contáctanos</h2>
        <p type="Nombre:">
            <input placeholder="Escribe tu nombre">
        </p>
        <p type="Email:">
            <input placeholder="Escribe tu email">
        </p>
        <p type="Mensaje:">
            <input placeholder="Cuéntanos..">
        </p>
        <button type="submit" formaction="https://alansignetti.github.io/blooz/">Enviar</button>
        <div class="phone">
            <span class="fa fa-phone"></span>+51 947 372 369 <span class="fa fa-envelope-o"></span>comercial@blooz.pe
        </div>
        </form>


    </div>
</template>

<style scoped>

.body {  
    background: #fff;
    margin-top: 20px;
    margin: 0px auto;
}

.form {
    
    width: 340px;
    height: 480px;
    background: #e6e6e6;
    border-radius: 8px;
    box-shadow: 0 0 40px -10px rgba(100, 92, 92, 0.781);
    margin: calc(50vh - 220px) auto;
    padding: 20px 30px;
    max-width: calc(100vw - 40px);
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    margin-top: 50px;
}

h2 {
    margin: 10px 0;
    padding-bottom: 10px;
    width: 180px;
    color: #78788c;
    border-bottom: 3px solid #78788c
}

input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    transition: all .3s;
    border-bottom: 2px solid #bebed2
}

input:focus {
    border-bottom: 2px solid #78788c
}

p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #5a5a5a
}

button {
    float: right;
    padding: 8px 12px;
    margin: 8px 0 0;
    font-family: 'Montserrat', sans-serif;
    border: 2px solid #78788c;
    background: 0;
    color: #5a5a6e;
    cursor: pointer;
    transition: all .3s
}

button:hover {
    background: #78788c;
    color: #fff
}

div {
    
    background: #50505a;
    color: #fff;
    
    padding: 16px 4px 16px 0;
    border-radius: 6px;
    font-size: 13px;
    box-shadow: 10px 10px 40px -14px #000
}
.phone{
    position: absolute;
    bottom: -35px;
    right: 0px;
}

span {
    margin: 0 5px 0 15px
}



@media screen and (max-width: 40.375em){

.phone{
    position: unset;
    margin-top: 110px;
    margin-left:0px ;
    width: 270px;
    display: flex;
}

.body{
     width: 100%;
}

.form {    
 
    position: unset;
}

}
</style>