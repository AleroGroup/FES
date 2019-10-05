<template>
    <section id='fes-message' style="margin-top:8%">
        <v-layout column justify-center align-center class="message__items ma-3" >
            <h2 data-aos="fade-up" 
                data-aos-easing="ease" 
                data-aos-delay="100" 
                class="message__item display-1 font-weight-medium"
            >
            CONCEPT & DESIGN
            </h2>

          

            <v-layout column justify-center align-center>
              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200" class="text-justify" style="width:680px; margin:26px;">
                Today, we have an opportunity to make authentic learning environments where students and teachers enjoy their 
                scholarly journeys and graduate to be change agents in their societies. We have a chance to embrace and expose 
                the understanding of how a variety of technologies and tools can be fit for educators and students to meet their 
                learning and career objectives inn my community. We have the chance to shift mindsets within the administration 
                of university colleges and ignite innovative ways of using existing ICT infrastructures to create student-centered 
                learning spaces and approaches.
              </p>
      
           
               <v-card data-aos="fade-left" class="mx-auto" style="margin-left:2%; margin-bottom:2%;">
                <v-img :src="img2"  width="630" height="250"></v-img>
            </v-card>
              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                At Firefly Edtech Solutions Limited, we provide a ‘sandpit for educators’ where educators from all walks of life 
                are invited to play within a safe and secure environment, to imagine and innovate, to engage with and experiment, 
                and through such play to become more confident and self-assured in the use of emerging technologies in their 
                various classrooms. ‘Sandpit for Educators’ is a concept borrowed from one of my educational technology supervisor 
                at the University of Cape Town, Professor Dick Ng’ambi. 

              </p>
              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                  He promotes the idea that we should find spaces to teach emerging technologies to our fellow educators, who in turn, 
                  transform the face of our educational systems in our home countries to one that ignites creativity, innovation, 
                  critical thinking among learners, making them competent change agents in their workplaces and society. 
                  Sandpits are furthermore believed to encourage imagination and creativity in children where several structures 
                  can be imagined, designed and built, and just as easily discarded in a non-threatening environment.
              </p>
         </v-layout>   
        </v-layout>
    </section>

</template>

<script>
import { mdiChevronDown,mdiChevronLeft } from '@mdi/js'

export default {
name: 'conceptdesign',
 data: () => ({
     title:"About Us",

     arrowleft: mdiChevronLeft,

     //images
     img:'https://ik.imagekit.io/qpt2onjfe/0_Pz9kyUGrZ.jpeg',
     img2:'https://ik.imagekit.io/qpt2onjfe/fes/agenda-concept-development-7376_oKaUWwiqNh.jpg',
  

    // content
 
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

</style>