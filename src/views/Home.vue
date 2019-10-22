<template>
  <v-content>
   <v-img :src="head__title" class="screen">
     <v-content>
       <v-layout column justify-center style="margin-top:10%" hidden-sm-and-down>
         <v-card data-aos="zoom-in" color="transparent" flat id="fes-intro">
            <h1>Bridging the gap between</h1>
            <h2>ecosystems in Education.</h2>
         </v-card>
         <v-layout column justify-center align-center>
            <v-card  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" color="transparent" flat id="fes-intro">
               <p>Providing revolutionary educational solutions that reduce <br>
               Strained teacher-student interactions, poor student<br>
               engagement and performance.</p>
            </v-card>
            <v-layout hidden-xs-only>
            <v-card  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="500" color="transparent" flat id="fes-intro">
              <v-btn flat class="connect__button" color="#Eb1204">CONNECT WITH US</v-btn>
            </v-card>
            </v-layout>
         </v-layout>
       </v-layout>



      <!-- tablet -->
      <v-layout column justify-center align-center style="margin-top:10%" hidden-md-and-up>
        <v-flex xs12 md6 style="max-width:730px">
         <v-card data-aos="zoom-in" color="transparent" flat id="fes-intro">
            <h1>Bridging the gap between</h1>
            <h2>ecosystems in Education.</h2>
         </v-card>
         </v-flex>
       </v-layout>
     </v-content>
     <img>
   </v-img>


<!-- mobile -->
  <v-layout column justify-center align-center id="service-section" style="margin-top:10%">
    <v-layout justify-center hidden-md-and-up>
      <v-flex xs9 md3 >
        <h5 class="text-center" style="margin-top:28%">Consultation & training solutions</h5> 
      </v-flex>
    </v-layout>
    <v-container grid-list-xs style="margin-bottom:5%;">
      <v-layout row justify-center align-center hidden-md-and-up>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="250">
               <v-hover v-slot:default="{ hover }" close-delay="70">  </v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="180" height="80">
                  <v-layout column align-center>
                      <v-img
                        width="50"
                        height="auto"
                        :src="student"
                        class='ma-4'
                        alt="Graduate student"
                      >
                      </v-img> 
                 <v-layout hidden-sm-and-down>
                   <p class="title service__item-button">Graduate Students & Researchers</p>
                 </v-layout>
                      
                    </v-layout>
                  </v-card>
             
            </v-flex>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="350">
              <v-hover v-slot:default="{ hover }" close-delay="70"> </v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="180" height="80">
                  <v-layout column align-center>
                      <v-img
                        width="50"
                        height="auto"
                        :src="education"
                        class='ma-4'
                      >
                      </v-img> 
                    <v-layout hidden-sm-and-down>
                      <p class="title service__item-button">Teachers, Librarians & Faculty </p>
                    </v-layout>
                    </v-layout>
                  </v-card>
              
            </v-flex>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="450">
               <v-hover v-slot:default="{ hover }" close-delay="70"> </v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="180" height="80">
                  <v-layout column align-center>
                      <v-img
                        width="50"
                        height="auto"
                        :src="staff"
                        class='ma-4'
                      >
                      </v-img> 
                     <v-layout hidden-sm-and-down>
                      <p class="title service__item-button">School Administrators & Staff</p>
                     </v-layout>
                    </v-layout>
                  </v-card>
              
            </v-flex>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="550">
               <v-hover v-slot:default="{ hover }" close-delay="70">  </v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="180" height="80">
                  <v-layout column align-center>
                      <v-img
                        width="50"
                        height="auto"
                        :src="manager"
                        class='ma-4'
                      >
                      </v-img> 
                    <v-layout hidden-sm-and-down>
                      <p class="title service__item-button">Teachers, Librarians & Faculty </p>
                    </v-layout>
                    </v-layout>
                  </v-card>
             
            </v-flex>
      </v-layout>
    </v-container>

    <v-layout hidden-md-and-down>
      <v-flex xs9 md12 >
      <h5 style="margin-top:10%">No matter who you are, FES offers the best <br>
      consultation & training solutions</h5> 
    </v-flex>
    </v-layout>
     <v-container grid-list-sm style="margin-bottom:6%">
      <v-layout row justify-center align-center hidden-sm-and-down>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="250">
               <v-hover v-slot:default="{ hover }" close-delay="70"></v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="60"
                        height="auto"
                        :src="student"
                        class='ma-4'
                        alt="Graduate student"
                      >
                      </v-img> 
                 <v-layout hidden-sm-and-down>
                   <p class="title service__item-button">Graduate Students & Researchers</p>
                 </v-layout>
                      
                    </v-layout>
                  </v-card>
               
            </v-flex>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="350">
              <v-hover v-slot:default="{ hover }" close-delay="70"> </v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="60"
                        height="auto"
                        :src="education"
                        class='ma-4'
                      >
                      </v-img> 
                    <v-layout hidden-sm-and-down>
                      <p class="title service__item-button">Teachers, Librarians & Faculty </p>
                    </v-layout>
                    </v-layout>
                  </v-card>
              
            </v-flex>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="450">
               <v-hover v-slot:default="{ hover }" close-delay="70"> </v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="60"
                        height="auto"
                        :src="staff"
                        class='ma-4'
                      >
                      </v-img> 
                     <v-layout hidden-sm-and-down>
                      <p class="title service__item-button">School Administrators & Staff</p>
                     </v-layout>
                    </v-layout>
                  </v-card>
              
            </v-flex>
            <v-flex class="service__item" data-aos="fade-up"  data-aos-delay="550">
               <v-hover v-slot:default="{ hover }" close-delay="70"> </v-hover>
                <v-card class="service__card"  :elevation="hover ? 8 : 0" width="200">
                  <v-layout column align-center>
                      <v-img
                        width="60"
                        height="auto"
                        :src="manager"
                        class='ma-4'
                      >
                      </v-img> 
                    <v-layout hidden-sm-and-down>
                      <p class="title service__item-button">Teachers, Librarians & Faculty </p>
                    </v-layout>
                    </v-layout>
                  </v-card>
              
            </v-flex>
      </v-layout>
    </v-container>
   </v-layout>
 
  <v-layout row wrap hidden-sm-and-down>
    <v-img :src="form__img" row id="questions-section">

    <v-layout row justify-center align-center justify-space-around ma-2 class="form"> 
      <v-card flat color="transparent" class="container text-center" v-if="formSubmitted">
          <v-card-text class="font-weight-medium white--text text--darken-2">Thank you, <span class="name">{{name}}</span> Your form has been submitted.</v-card-text>
      </v-card>


      <v-card color="transparent" :class="{ formSubmitted: formSubmitted }" id="contact-form" v-if="!isLoading" flat class="form-details">
        <div class="questions-section_item details white--text">
            <h5>Train your people. <br>
            Get research done right. <br>
            Measure results. </h5>
        </div>
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
export default {
  name:'home',
  data: () => ({
     title:"Home",

     //images
     head__title:'https://ik.imagekit.io/qpt2onjfe/fes/background_HRJ60zWCxI.svg',
     form__img:'https://ik.imagekit.io/qpt2onjfe/fes/contact_D1y1LU-qg.svg',
     student: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_6_ahiTVG6cW.svg',
     education: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_8_D6eRDvbXs6.svg',
     staff: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_7_2EMuCXHFz4.svg',
     manager:'https://ik.imagekit.io/qpt2onjfe/fes/Group_9_Zqsgxo7jCi.svg',

     name:'',
     email:'',
     message:'',
     formSubmitted: false,
     isLoading: false,
     overlay: true,
     formInvalid: false
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
      var template_params = {
      "reply_to": this.email,
      "name": this.name,
}
/* eslint-disable */

const service_id = "default_service";
      const template_id = "contacts";
      event.preventDefault()
      if (this.email !== null && this.name !== null) {
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
};
</script>

<style scoped>
.screen{
  height: 35%;
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
    padding-top: 8%;
    font-weight: bold;
    font-size: 20px;
}
.connect__button {
    text-decoration: none;
    background:orange;
    color: white;
    border-radius: 20px;
    padding: 10px 26px;
    font-weight: bold;
    font-size: 18px; 
    margin-top: 30px;   
}

#service-section {
    background:  linear-gradient(180deg, rgba(255, 215, 136, 0.171) 18.09%, rgba(255, 245, 193, 0.301) 70.17%);
    padding-top: 35px;
   padding-bottom: 8%;
    height: 420px;
}
#service-section h5 {
    font-size: 25px;
    text-align: center;
     margin-bottom: 2%;
}
.service__intro {
    width: 100%;
    text-align: center;
   
}
.service__intro  img {
    margin-left: 35px;
    margin-bottom: 1.4px;
    margin-top: 18px;
}
.service__item{
    display:inline-block;
     text-align: center;
}
.service__item-button  {
    list-style: none;
    margin-top:0;
}
.service__item-button {
    text-decoration: none;
    border-radius: 10px;
    padding: 10px 16px;
    color: #2612A6;
    font-weight:bold; 
}
.service__card {
    text-decoration: none;
    border-radius: 10px;
    border: 3px solid #2612A6;
    font-weight:bold; 
    background-color: rgba(255, 255, 255, 0.068);
}

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
    max-width: 500px;
    padding:18px 80px 18px 20px;
    background: #cbd9fa;
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
    margin-top: 6%;
}
::placeholder{
  color: #2612A6
}
</style>