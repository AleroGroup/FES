<template>
  <v-content class="mt-10 mb-12">
  <v-img :src="head__title" class="screen">
   <v-layout id="team-into" style="margin-left:12%;margin-top:4%">
      <h2 class="main__title font-weight-regular pa-3 ma-6 text-capitalize font-weight-medium"> To teachers, librarians and faculty </h2>
    </v-layout>
    <v-layout column justify-center ml-12 style="margin-bottom:2%;">
      <div class="title__board font-weight-medium" style="width:600px;margin-left:15%;font-size:16px;"> We help develop built-in knowledge, broad subject coverage, reflective learning and intuitive coding empowering teachers, librarians and faculty to design products and services along:
      </div>
      <v-layout row wrap>
          
            <v-layout column mt-10 style="margin-left:18%;">
                <div> 
                     <p class="services_list"> 
                        <v-icon :color="icon_color">mdi-check</v-icon> 
                        Data Repository 
                     </p>
                </div> 
                 <div> 
                      <p class="services_list"> 
                        <v-icon :color="icon_color">mdi-check</v-icon> 
                        Learning Design
                      </p>
                </div> 
                <div>
                     <p class="services_list"> 
                        <v-icon :color="icon_color">mdi-check</v-icon> 
                         Digital Humanities
                     </p>
                </div>
                <div> 
                     <p class="services_list"> 
                        <v-icon :color="icon_color">mdi-check</v-icon> 
                          Educational Technology
                     </p>
                </div>
                <div> 
                     <p class="services_list"> 
                        <v-icon :color="icon_color">mdi-check</v-icon> 
                          Machine Learning
                     </p>
                </div> 
            </v-layout>
            <!-- <img :src="image" class="image"> -->
        </v-layout>
    </v-layout>
    <img/> 
  </v-img>
   <v-btn icon to="/services" style="margin-left:15%; margin-top:6%">
       <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </v-content>
</template>

<script>
export default {
data: () => ({
     title:"Services | To teachers, librarians and faculty",
     head__title:'https://ik.imagekit.io/qpt2onjfe/fes/background_HRJ60zWCxI.svg',
     icon_color: "red darken-2",
     image: 'https://ik.imagekit.io/qpt2onjfe/fes/accounting-black-budget-53621_gSHnz5ALb.jpg'
  }),
    head: {
        title: function () {
            return {
                inner: 'Firefly Edtech Solutions',
                complement: this.title
            }
        }
    },
    
}
</script>

<style>
.main__title {
      color: grey;
}
.image {
    width:520px; 
    height:auto; 
    margin-right:250px;
    margin-top: 40px;
}

</style>