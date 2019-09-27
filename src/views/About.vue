<template>
  <v-content>
     <v-img :src="head__title" class="screen">
     <v-content>
       <v-layout column justify-center style="margin-top:12%">
         <v-card data-aos="zoom-in" color="transparent" flat id="fes-intro">
            <h1>Transforming the learning experience</h1>
         </v-card>
         <v-layout column justify-center align-center style="margin-top:2%">
            <v-card  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" color="transparent" flat id="fes-intro">
               <p>Firefly Edtech Solutions is a management system solutions company that aims <br>
                to transform the education experience in the African contient by providing<br>
                solutions that produce unique learning and teaching experiences using the <br>
                latest emerging technologies.
            </p>
            </v-card>
          
         </v-layout>
       </v-layout>    
     </v-content>
     <img>
   </v-img>
  
  <div id="fes-motivation">
   <v-layout column justify-center align-center  style="margin-top:10%">
     <h2 data-aos="fade-up" style="margin-top:4%">Our Motivation</h2>
   </v-layout>
    <v-layout  row justify-space-around class="motivation__items">
          <v-card flat color="transparent" class="motivation__item text-center" data-aos="fade-up"  data-aos-delay="250">
             <img :src="journy">
             <p class="btn">OUR JOURNEY</p>
          </v-card>
          <v-card flat color="transparent" class="motivation__item text-center" data-aos="fade-up"  data-aos-delay="350">
             <img :src="crus">
             <p class="btn">OUR CRUCIBLE</p>
          </v-card>
          <v-card flat color="transparent" class="motivation__item text-center" data-aos="fade-up"  data-aos-delay="450">
            <img :src="design" >
            <p class="btn">CONCEPT & DESIGN</p>
          </v-card>
      </v-layout>
    </div>
        <v-layout  column justify-center align-center>
            <section id='fes-message'>
            <v-layout column justify-center align-center class="message__items">
                <h2 class="message__item">OUR JOURNEY</h2>
                <v-layout  row justify-center align-center>
                   <v-hover data-aos="fade-right" v-slot:default="{ hover }">
                      <v-card :elevation="hover ? 12 : 2" class="mx-auto">
                        <v-img :src="journey" width="330" height="200"></v-img>
                      </v-card>
                   </v-hover>
                  <p class="text-justify" style="width:350px; margin:26px;">
                    When i learned accounting at college, it was not a nice experience. The teacher adopted a more teacher-
                    centered approach, where he was in full control of the class. He was the only one who was responsible for
                    imparting knowledge and he had always the final word. We, the students were spectators in class. It was
                    mainly,"the teacher talks... 
                 </p>
                 
              </v-layout>
                <v-layout column justify-center align-center class="message__btn" style="margin-bottom:10%">Read more
                   <v-btn icon>
                      <v-icon color="#2612A6" class="font-weight-bold" width="170px">{{ arrowDown }}</v-icon>
                   </v-btn>
                </v-layout>
            </v-layout>
        </section>
        <section id='fes-message'>
            <v-layout column justify-center align-center class="message__items">
            <h2 class="message__item">OUR CRUCIBLE</h2>
            <v-layout row justify-center align-center>
              <p class="text-justify" style="width:350px; margin:26px;">
                   Technology is the best approach that a teacher and student can use to implement a transformation in
                   achieving their learning objectives. The university college ICT infrastructure available was an Learning
                   Management System that was used to post students' grades, list reading materials and update crucial
                   communication to teachers and students...
              </p>
            <v-hover data-aos="fade-left" v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" class="mx-auto">
                <v-img :src="technology" width="330" height="200"></v-img>
              </v-card>
            </v-hover>
          </v-layout>
             <v-layout column justify-center align-center class="message__btn" style="margin-bottom:10%">Read more
                   <v-btn icon>
                      <v-icon color="#2612A6" class="font-weight-bold" width="170px">{{ arrowDown }}</v-icon>
                   </v-btn>
                </v-layout>
            </v-layout>
        </section>
        <section id='fes-message' style="margin-bottom:20%">
            <v-layout column justify-center align-center class="message__items">
            <h2 class="message__item">CONCEPT & DESIGN</h2>
            <v-layout row justify-center align-center>
                   <v-hover data-aos="fade-right" v-slot:default="{ hover }">
                      <v-card :elevation="hover ? 12 : 2" class="mx-auto">
                        <v-img class="img__item" :src="desiging" width="330" height="200"></v-img>
                      </v-card>
                   </v-hover>
               <p class="text-justify" style="width:350px; margin:26px;">
                  Today, we have an opportunity to make authentic learning environments where students 
                  and teachers enjoy their scholarly journeys and graduate to be change agents in their 
                  societies. We have a chance to embrace and expose the understanding of how a variety 
                  of technologies and tools can be fit for educators and students to meet their learning...
               </p>
            </v-layout>
                <v-layout column justify-center align-center class="message__btn" style="margin-bottom:13%">Read more
                   <v-btn icon>
                      <v-icon color="#2612A6" class="font-weight-bold" width="170px">{{ arrowDown }}</v-icon>
                   </v-btn>
                </v-layout>
            </v-layout>
        </section>
        </v-layout>

  </v-content>
</template>

<script>
import { mdiChevronDown } from '@mdi/js'
export default {
  name:'contact',
  data: () => ({
     title:"About Us",

     //icons
     arrowDown: mdiChevronDown,

     //images
     head__title:'https://ik.imagekit.io/qpt2onjfe/fes/background_HRJ60zWCxI.svg',
     journy: 'https://ik.imagekit.io/qpt2onjfe/fes/journy-icon_XNqELlZDr.svg',
     crus:'https://ik.imagekit.io/qpt2onjfe/fes/crus-icon_Lxqq9-LGCr.svg',
     design:'https://ik.imagekit.io/qpt2onjfe/fes/design-icon_4d7CzCiAy.svg',
     journey:'https://ik.imagekit.io/qpt2onjfe/fes/adventure-blur-cartography-408503_rz2ipacN_.jpg',
     technology:'https://ik.imagekit.io/qpt2onjfe/fes/address-adult-african-1061576_b8_cCtAO6.jpg',
     desiging:'https://ik.imagekit.io/qpt2onjfe/fes/agenda-concept-development-7376_oKaUWwiqNh.jpg',

  }),
    head: {
        title: function () {
            return {
                inner: 'Firefly Edtech Solutions',
                complement: this.title
            }
        }
    },
    
  components: {
    //
  },
};
</script>

<style scoped>
.screen{
  height: 22%;
}
#fes-motivation {
    background: #fdf6d662;
    height: 420px;
    margin-bottom: 10%;
}
#fes-intro > h1 {
    text-align: center;
    color: grey;
    font-size: 45px;
}
#fes-intro > h2 {
    text-align: center;
    color: #2612A6;
    font-size: 36px;
}
#fes-intro > p {
    text-align: center;
    padding-top: 4%;
    font-weight: bold;
    font-size: 20px;
}

.motivation__items{
 margin:4.3%
}


.motivation__item > img {
  width: 180px;
  height: auto;
  
}

p.btn {
    padding: 10px 30px !important;
    background:#fda503;
    height: 3rem;
    border-radius: 25px !important;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    
}


h2.message__item {
    padding: 10px 30px !important;
    background:#fdf6d6;
    height: 3rem;
    border-radius: 25px !important;
    color: #727171;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px
}

.message__btn {
    height: 3rem;
    border-radius: 25px !important;
    color: #bbb8b8;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
}
.img__item {
  border-radius: 80px;
}
</style>