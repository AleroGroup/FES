<template>
  <v-content style="margin-top:3%;">
        <v-toolbar dense flat color="transparent">
          <v-toolbar-title style="margin-left:2%;">
            <v-img :src="title__logo"></v-img>
          </v-toolbar-title>
          <v-spacer/>
          <v-layout row  justify-center hidden-xs-only>
             <router-link small class="main-nav__item text-uppercase" to="/" text exact active-class="">Home</router-link>
             <router-link small class="main-nav__item text-uppercase" to="/aboutus" text exact>About us</router-link>
             <router-link small class="main-nav__item text-uppercase" to="/team" text exact>Team</router-link>
            <router-link small class="main-nav__item text-uppercase" to="/contact" text exact>Contact</router-link>

          </v-layout>

       <v-layout justify-end hidden-sm-and-up>
       <v-menu offset-y>
         <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>{{ svgPath }}</v-icon>
        </v-btn>
        </template>
         <v-list>
           <v-list-item  v-for="(link, index) in links"
          :key="index" >
             <v-list-item-title >
               <v-btn text :to="link.to">
                 {{ link.title }}
               </v-btn>
               </v-list-item-title>
           </v-list-item>
         </v-list>
       </v-menu>
         </v-layout>
        </v-toolbar>
  </v-content>
  </template>

<script>
import { mdiMenu } from '@mdi/js'

export default {
  data: () => ({
   title__logo:"https://ik.imagekit.io/qpt2onjfe/fes/Logo_N-oJ4sdWk6.svg",
    svgPath: mdiMenu,
    links: [
      { title: 'Home', to: '/' },
      { title: 'About us', to: '/aboutus' },
      { title: 'contact', to: '/contact' },
       { title: 'Our Team', to: '/team' }
    ]
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

.title_ {
    font-family: 'Abril Fatface', cursive;
}

.main-nav__item {
  margin : 0 10px;
  font-weight: bold;
  font-size: 15px;
}

a.main-nav__item  {
    text-decoration: none;
    color: #2612A6;
    vertical-align: center;
  
}

a:hover, .router-link-exact-active {
    border-bottom: 2px solid orange !important;
}

</style>
