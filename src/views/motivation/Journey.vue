<template>
<v-content>
     <section id='fes-message' style="margin-top:6%;margin-bottom:6%">
        <v-layout column justify-center align-center class="message__items ma-1" >
            <h2 data-aos="fade-up" 
              data-aos-easing="ease" 
              data-aos-delay="100" 
              class="message__item display-1 font-weight-medium"
            >
                OUR JOURNEY
            </h2>

            <v-layout row justify-center align-center>
              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200" class="text-justify" style="width:462px; margin:26px;">
                 "When I learned accounting at college, it was not a nice experience. 
                 The teacher adopted a more teacher-centered approach, where he was in 
                 full control of the class. He was the only one who was responsible for 
                 imparting knowledge and he had always the final word. We, the students
                  were spectators in class. It was mainly “the teacher talks and we note 
                  down” with limited opportunities to comment or respond. His way of 
                  teaching accounting was not enjoyable at all. I had difficulties 
                  grasping the content. My parents were assured it would succeed because 
                  I was an exemplary student at mathematics in my A-levels.
              </p>
              <v-card data-aos="fade-left" class="mx-auto">
                <v-img :src="img"  width="200" height="250"></v-img>
              </v-card>
          </v-layout>
            <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                 The worst part was that the scenario had not changed fifteen years later 
                 when I got the opportunity to work at a private university famous for 
                 its state-of-the-art infrastructure and ambience for student learning. 
                 I had to teach student in the traditional ways and efforts to follow up 
                 with administrators were curtailed by slow bureaucratic operations. 
                 I was also shocked that the new ICT infrastructure had not been adopted 
                 or aligned to facilitate and ease learning and teaching for the 21st century 
                 student graduate and future professional.

              </p>


              <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                Accounting graduates were met with expansive trainings upon reaching their workplaces. 
                Various employers have upgraded their operations to meet the fast digitalized accounting and 
                financial processes in the markets. Even, several, employers would rant on social media about 
                costly on-job trainings for digital skills they expected university colleges have instructed 
                and equipped incoming fresh graduates.
              </p>

               
              
              <v-layout column>
                <span class="title ma-6">Innovative approach</span>
                    <v-card flat data-aos="fade-left" style="margin-left:2%; margin-bottom:4%;">
                       <v-img :src="img2"  width="670" height="150"></v-img>
                    </v-card>
                 <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                    When I came into the classroom, the most innovative approach to help students grasp the knowledge 
                     of the subject matter was by preparing power-point presentations and short videos. Sometimes, 
                    I would give examples of an industrial practice that I had encountered during my ten-year banking 
                    experience. Nonetheless, I didn’t explain most concepts, but rather, I was in a hurry to complete 
                    the syllabus.
                </p>

              </v-layout>
                <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" class="text-justify" style="width:680px; margin-left:27px;">
                  Often, students were expected to copy what I read out and explained for the purpose 
                   of passing exams. Sometimes, demotivated students gave an excuse not to attend the remaining session 
                  in class, during the half-time break. It was frustrating using “a-square-peg-in-a-round-hole” methods 
                  of learning and teaching. I barely achieve the learning objectives of the accounting students, 
                  the external accounting qualification examiner and the university college."
                </p>
              </v-layout>
        </section>
    <v-layout row wrap hidden-sm-and-down>
    <v-img :src="form__img" row id="questions-section">

    <v-layout column justify-center align-center justify-space-around ma-2 class="form"> 
      <v-card flat color="transparent" class="container text-center" v-if="formSubmitted">
          <v-card-text class="font-weight-medium white--text text--darken-2">Thank you, <span class="name">{{name}}</span> Your form has been submitted.</v-card-text>
      </v-card>


      <v-card color="transparent" :class="{ formSubmitted: formSubmitted }" id="contact-form" v-if="!isLoading" flat class="form-details">
        <v-layout column justify-center align-center class="questions-section_item details ">
            <h3 class="white--text text--darken-4 ma-3 text-capitalize">join our mailing list</h3>
            <p class="title font-weight-light white--text">Sign up to recieve email updates on our product release, get information on train your people. 
,get research or measure results.
Name *
Email *
  </p>
        </v-layout>
        </v-card>
        <v-card color="transparent" flat class="questions-section_item form" >
            <form ref="form" class="question-form" :class="{ formSubmitted: formSubmitted }" id="contact-form" v-if="!isLoading">
               <div class="text-danger" v-if="formInvalid">Please fill out all the fields.</div>
                <input v-model="name" type="text"  placeholder="Name *" required="required" aria-invalid="true" />
                <input v-model="email" type="email" placeholder="Email *">
                <v-layout justify-end>
                   <v-btn color="white" v-on:click="submit" type="submit" outlined>Get Started</v-btn>
                </v-layout>
            </form>
        </v-card>
      </v-layout>
      <v-layout row wrap v-if="isLoading">
      <v-flex class="loading-container">
        <div class="loader">
          <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </div>
      </v-flex>
      </v-layout>
      <img>
  </v-img>
    </v-layout>
</v-content>
</template>

<script>
import { mdiChevronDown,mdiChevronLeft } from '@mdi/js'

export default {
 name: 'journey',
 data: () => ({
     title:"Our Journey",

     arrowleft: mdiChevronLeft,

     //images
     img:'https://ik.imagekit.io/qpt2onjfe/0_Pz9kyUGrZ.jpeg',
     img2:'https://ik.imagekit.io/qpt2onjfe/fes/chairs-classroom-college-289740_7Kgq8jrak.jpg',
     form__img:'https://ik.imagekit.io/qpt2onjfe/fes/contact_D1y1LU-qg.svg',

    // content

    name:'',
    email:'',
    isLoading: false,
    overlay: true,
    formInvalid: false,

   
 
  }),

head: {
    title: function () {
        return {
            inner: 'Firefly Edtech Solutions',
            complement: this.title
        }
    }
},

watch: {
    overlay (val) {
    val && setTimeout(() => {
    this.overlay = false
        }, 3000)
      }
},

mounted () {
    this.$nextTick(function () {
        const emailJSscript = document.createElement('script')
        emailJSscript.setAttribute('src', 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js')
        document.head.appendChild(emailJSscript)
    })
},

methods: {
    submit () {
    const template_params = {
        "reply_to": this.email,
        "name": this.name,
}

/* eslint-disable */
const service_id = "default_service";
const template_id = "contacts";
    event.preventDefault()
      if (
            this.email !== null && this.name !== null) {
            this.isLoading = true
            this.formSubmitted = false
            emailjs.init('user_c0Q2llk67OnYN7obTBRkR')
            this.contact_number = Math.random() * 100000 | 0
       
            emailjs.send(
                service_id,
                template_id,
                template_params
            ).then((response) => {
            
            this.formSubmitted = true
            this.isLoading = false
        
          console.log('SUCCESS You just sent an email...', response)
        }, (error) => {
          console.log('FAILED Throw an error to user...', error)
          this.isLoading = false
        })
      } else {
        //
      }
      this.$refs.form.reset()
    }
  }
    
}
</script>

<style scoped>

#questions-section {
   background:#2612A6;
   padding-top:1px;
   width:100%;    
   height:300px;
   vertical-align: middle;
    
}
.question-form input{
    display:block;
    width: 100vw;
    max-width: 450px;
    padding:18px 80px 18px 20px;
    background: #ffffff;
    height: 1.2rem;
    border-radius: 4px;
    margin-top: 0;
    margin-bottom:8px;
    font-size: 16px;
    
}

.question-form button {
    border-radius: 16px;
   
}

.question-form .text-area {
    padding-bottom: 60px;
}

.questions-section_item{
    font-size: 25px;

}
.form{
    margin-top: 3%;
}
::placeholder{
  color: #2612A6
}
.v-application a {
    color: orange !important;
}
</style>