<template>
 <nav>
  <div v-if="name" id="logo" v-on:click="openMobileHome()">
         
         <router-link to="/">{{ name }}</router-link>
      </div>

  <ul class="nav-links">
   <li v-on:click="openMobileNav()">     

    <router-link to="/">Home</router-link>
    <router-link to="/pedir">Pedir</router-link>
    <router-link to="/contacto">Contacto</router-link>
    <router-link to="/estado">Estado</router-link>
   </li>
  </ul>
  <div v-on:click="openMobileNav()" id="burger">
   <div class="line1"></div>
   <div class="line2"></div>
   <div class="line3"></div>
  </div>
 </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['name', 'logoImg', 'navLinks'],
  methods: {
    openMobileNav() {
      const burger = document.getElementById('burger')
      const nav = document.querySelector('.nav-links')
      const navLinks = document.querySelectorAll('.nav-links li')

      // Toggle navigation on mobile
      nav.classList.toggle('nav-active')
      // Burger toggler
      burger.classList.toggle('toggle')

      // Animate navigation links
      navLinks.forEach((link, index) => {
        if (link.style.animation || link.style.webkitAnimation) {
          link.style.animation = ''
          link.style.webkitAnimation = ''
        } else {
          link.style.webkitAnimation = `navLinkFade 0.5s ease forwards ${
            index / 7
          }s`
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        }
      })
    },
    // si está abierta la navbar mobile y hace click en home, se cierra nav
    openMobileHome() {
      const burger = document.getElementById('burger');

      if(burger.classList.value =='toggle'){
        document.getElementById('burger').click();
      } 
    },




  },
  mounted() {
  },
}
</script>

<style >
.mt-5{
  margin-top: 140px !important;
}
nav {
  
  position:relative;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #448ceb;
min-height: 8vh;
font-family: 'Montserrat', sans-serif;
}
div#logo {
  
letter-spacing: 5px;
color: #fefefe ;
font-weight: 800;
font-size: 2rem;

}
a{
  text-decoration: none;
  color: #fefefe ;
}
a:active{
  text-decoration: none;
  color: #fefefe ;
}
a:hover{
  text-decoration: none;
  color: #fefefe ;
}

ul.nav-links {
display: flex;
justify-content: space-between;
width: 40%;
line-height: 75px;
}
ul.nav-links li {
list-style: none;
}
ul.nav-links a {
text-decoration: none;
color: #fefefe;
font-size: 1.2rem;
font-weight: 500;
display: inline-flex;
margin-right: 30px;
}
#burger {
display: none;
cursor: pointer;
}
#burger div {
width: 30px;
height: 3px;
margin: 8px;
background-color: #fefefe;
transition: all 0.3s ease-in;
}
ul.dropdown-menu {
position: absolute;
top: 8vh;
background-color: #115fc5;
min-width: 140px;
cursor: pointer;
display: none;
}
ul.dropdown-menu li:first-child {
margin: 0 0 10px 0;
}
ul.dropdown-menu li {
margin: 10px 0;
}
ul.dropdown-menu li:last-child {
margin: 10px 0 0 0;
}
ul.dropdown-menu a {
line-height: 8vh;
padding: 5px 15px;
background-color: #b3c5dd;
line-height: 50px;
}

/* Tablet */
@media screen and (max-width: 1024px) {
  ul.nav-links {
    width: 50%;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  ul.nav-links {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    top: 8vh;
    right: 0;
    padding: 100px;
    align-items: center;
    justify-content: flex-start;
    background-color:#448ceb;

    opacity: 0.8;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  ul.nav-links li {
    opacity: 0;
  }

  ul.nav-links a {
    width: 100%;
    display: block;
    margin-right: 0;
  }

  div#burger {
    display: block;
  }

  ul.dropdown-menu {
    position: relative;
    top: 0;
  }
}

.nav-active {
  transform: translateX(0) !important;
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-9px, 10px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>