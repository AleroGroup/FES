<template>
     <section id='fes-message' style="margin-top:8%">
        <v-layout column justify-center align-center class="message__items ma-3" >
            <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" class="message__item display-1 font-weight-medium">OUR CRUCIBLE</h2>
            <v-layout row justify-center align-center>
              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200" class="text-justify" style="width:680px; margin:26px;">
                 Technology is the best approach that a teacher and student can use to implement a transformation in achieving 
                 their learning objectives. The university college ICT infrastructure available was an Learning Management System 
                 that was used to post students’ grades, list an reading materials and update crucial communication to teachers 
                 and students; a universal email address domain given upon joining the university; a huge team of computer science 
                 and IT staff to support students’ and teachers’ concerns on about the application of their personal digital devices 
                 during on-campus and off –campus assignments and obtain authorized access to ICT facilities on campus.
              </p>
          </v-layout>
           
                <v-card data-aos="fade-left" class="mx-auto" style="margin-left:2%; margin-bottom:2%;">
                    <v-img :src="img2"  width="630" height="250"></v-img>
                </v-card>

              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                Thus far, student-centered learning approach is yet to be adopted at the university; there is limited access to other 
                information outside the reading materials provided within the syllabus that would provide a student with different ways 
                to learn a concept; students are exposed to a variety of resources: Computers, laptops, tablets and other forms of 
                technology that they often use for social media updates and not learning; and classrooms are yet to be a space 
                integrated with technologies that makes it fun and engaging for students to learn.

              </p>
              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                 Often, annual financial and operations reports present the years the ICT infrastructure was introduced and has been 
                 in existence in a university – a good capital investment, making it stand out from its competition. Unfortunately, 
                 there is little reporting on the impact and significance of the technology to existing operations and even financial 
                 successes. This denies the investor, teachers, students an opportunity to experience the unprecedented dimensions of 
                 direct of ICT in daily teaching and learning tasks and activities.
              </p>
                
          </v-layout>
        </section>

</template>

<script>
import { mdiChevronDown,mdiChevronLeft } from '@mdi/js'

export default {
name: 'crucible',
 data: () => ({
     title:"About Us",

     arrowleft: mdiChevronLeft,

     //images
     img:'https://ik.imagekit.io/qpt2onjfe/0_Pz9kyUGrZ.jpeg',
     img2:'https://ik.imagekit.io/qpt2onjfe/fes/architecture-city-cityscape-771327_nW9k0MbZp.jpg',
  

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