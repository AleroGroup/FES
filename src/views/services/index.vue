<template>
  <v-content class="mt-10 mb-8">
  <v-img :src="head__title" class="screen">
   <v-layout justify-center align-center id="team-into" style="margin-top:4%">
      <h2 class="main__title display-1 pa-3 text-capitalize font-weight-medium"> Our Services </h2>
    </v-layout>
    <v-layout column justify-center ml-12>
    <v-container>
      <v-layout row justify-center align-center hidden-md-and-up ml-3>
            <!-- Services to the Graduate students -->
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="250">
               <v-hover v-slot:default="{ hover }" close-delay="70"> 
                  <router-link to="/services/to-graduate-students-researchers">
                    <v-card class="service__card"  :elevation="hover ? 8 : 0" width="190" height="106">
                      <v-layout column align-center>
                        <v-img
                          width="60"
                          height="auto"
                          :src="student"
                          class='ma-2'
                          alt="Graduate student"
                        >
                        </v-img> 
                        <v-layout>
                        <p class="subtitle service__item-button" style="text-decoration:none;">Graduate Students & Researchers</p>
                        </v-layout>        
                      </v-layout>
                     </v-card>
                    </router-link>
                </v-hover>
            </v-flex>

             <!-- Services to the Teachers-->
            <v-flex class="service__item " data-aos="fade-up"  data-aos-delay="350">
              <v-hover v-slot:default="{ hover }" close-delay="70"> 
                <router-link to="/services/to-teachers-librarians-and-faculty">
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="190" height="106">
                  <v-layout column align-center>
                      <v-img
                        width="60"
                        height="auto"
                        :src="education"
                        class='ma-2'
                      >
                      </v-img> 
                    <v-layout>
                      <p class="subtitle service__item-button text-centered">Teachers, Librarians & Faculty </p>
                    </v-layout>
                    </v-layout>
                  </v-card>
                </router-link>
              </v-hover>
            </v-flex>

            <!-- Services to the School Administrators -->
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="450">
               <v-hover v-slot:default="{ hover }" close-delay="70">
               <router-link to="/services/to-school-administrators-and-staff">
                <v-card class="service__card mt-12"  :elevation="hover ? 8 : 0" width="190" height="106">
                  <v-layout column align-center>
                      <v-img
                        width="60"
                        height="auto"
                        :src="staff"
                        class='ma-2'
                      >
                      </v-img> 
                     <v-layout>
                      <p class="subtitle service__item-button text-centered">School Administrators & Staff</p>
                     </v-layout>
                    </v-layout>
                  </v-card>
               </router-link>
              </v-hover>
            </v-flex>

            <!-- Services to Business Owners-->
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="550">
               <v-hover v-slot:default="{ hover }" close-delay="70">  
               <router-link to="/services/to-business-owners">
                <v-card class="service__card mt-12"  :elevation="hover ? 8 : 0" width="190" height="106">
                  <v-layout column align-center>
                      <v-img
                        width="60"
                        height="auto"
                        :src="manager"
                        class='ma-2'
                      >
                      </v-img> 
                    <v-layout>
                      <p class="subtitle service__item-button text-centered">Consultancy Services for Business Owners </p>
                    </v-layout>
                    </v-layout>
                  </v-card>
                </router-link>
              </v-hover>
            </v-flex>
      </v-layout>
    </v-container>

  
     <v-container>
      <v-layout row justify-center align-center hidden-sm-and-down>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="250">
                <v-card class="service__card"  :elevation="hover ? 8 : 2" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="100"
                        height="auto"
                        :src="student"
                        class='ma-3'
                        alt="Graduate student"
                      >
                      </v-img> 
                    <v-layout column hidden-sm-and-down>
                       <p class="subtitle service__item-button text-centered">Graduate Students & Researchers</p>
                       <v-btn small to="/services/to-graduate-students-researchers" text color="gray">Read more</v-btn>
                    </v-layout>
                    </v-layout>
                </v-card>    
            </v-flex>

            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="350">
                <v-card class="service__card"  :elevation="hover ? 8 : 2" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="100"
                        height="auto"
                        :src="education"
                        class='ma-3'
                      >
                      </v-img> 
                    <v-layout column hidden-sm-and-down>
                      <p class="subtitle service__item-button text-centered">Teachers, Librarians & Faculty </p>
                       <v-btn small to="/services/to-teachers-librarians-and-faculty" text color="gray">Read more</v-btn>
                    </v-layout>
                    </v-layout>
                  </v-card>
            </v-flex>

            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="450">
                <v-card class="service__card"  :elevation="hover ? 8 : 2" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="100"
                        height="auto"
                        :src="staff"
                        class='ma-3'
                      >
                      </v-img> 
                     <v-layout column hidden-sm-and-down>
                      <p class="subtitle service__item-button text-centered">School Administrators & Staff</p>
                       <v-btn small to="/services/to-school-administrators-and-staff" text color="gray">Read more</v-btn>
                     </v-layout>
                    </v-layout>
                  </v-card>
            </v-flex>

            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="550">
                <v-card class="service__card"  :elevation="hover ? 8 : 2" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="100"
                        height="auto"
                        :src="manager"
                        class='ma-3'
                      >
                      </v-img> 
                    <v-layout column hidden-sm-and-down>
                      <p class="subtitle service__item-button text-centered">Consultancy Services for Business Owners </p>
                    <v-btn small to="/services/to-business-owners" text color="gray">Read more</v-btn>
                    </v-layout>
                    </v-layout>
                  </v-card>
            </v-flex>
      </v-layout>
    </v-container>
   </v-layout>
    <img/> 
  </v-img>
  </v-content>
</template>

<script>
export default {
data: () => ({
     title:"Services",
     head__title:'https://ik.imagekit.io/qpt2onjfe/fes/background_HRJ60zWCxI.svg',
     icon_color: "red darken-2",
     image: 'https://ik.imagekit.io/qpt2onjfe/fes/accounting-black-budget-53621_gSHnz5ALb.jpg',

     student: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_6_ahiTVG6cW.svg',
     education: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_8_D6eRDvbXs6.svg',
     staff: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_7_2EMuCXHFz4.svg',
     manager:'https://ik.imagekit.io/qpt2onjfe/fes/Group_9_Zqsgxo7jCi.svg',

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

<style scoped>
.main__title {
     color: grey;
}

.service__item-button{
    color: gray;
}

.service__item{
    display:inline-block;
     text-align: center;
}

.service__item-button {
    text-decoration: none !important;
    border-radius: 10px;
    padding: 10px 16px;
    color: #2612A6;
    font-weight:700;
}
a {
  text-decoration: none !important;
}
.service__card {
    text-decoration: none;
    border-radius: 10px;
    border: 3px solid #80808003 !important;
    font-weight:600; 
    background-color: rgb(255, 255, 255);
}

</style>