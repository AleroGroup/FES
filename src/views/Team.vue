<template>
  <v-content >
    <v-layout id="team-into" style="margin-left:12%;margin-top:4%;
    margin-bottom:2%">
      <h2 class="main__title font-weight-regular pa-3 ma-6"> Our Team </h2>
    </v-layout>
    <v-layout column justify-center align-center style="margin-bottom:2%">
      <div class="title title__board"> Board of Directors</div>
      <v-layout row justify-center align-center >
         <v-card flat class="ma-6" id="Board of Directors" v-for="board in boards" :key="board.id">
            <v-layout column justify-center align-center>
              <v-img :src='board.url' :style="board.style"></v-img>
              <v-card-title>
                <div class="team__name"> {{ board.name }}</div>
              </v-card-title>
              <v-card-text>
                <div class="team__title"> {{ board.title }}</div>
              </v-card-text>
         </v-layout>
      </v-card>
    </v-layout>

     <div class="title title__board"> Technical team</div>
     <v-layout row justify-center align-center >
        <v-card flat class="ma-6" id="Board of Directors" v-for="team in teams" :key="team.id">
          <v-layout column justify-center align-center>
            <v-img :src='team.url' :style="team.style"></v-img>
            <v-card-title>
              <div class="team__name"> {{ team.name }}</div>
            </v-card-title>
             <v-card-text>
              <div class="team__title"> {{ team.title }}</div>
            </v-card-text>
         </v-layout>
      </v-card>
     </v-layout>
    </v-layout>

    <v-layout row wrap>
    <v-img :src="form__img" row id="questions-section">

    <v-layout row justify-center align-center justify-space-around ma-2 class="form"> 
      <v-card flat color="transparent" class="container text-center" v-if="formSubmitted">
          <v-card-text class="title font-weight-medium white--text text--darken-2">Thank you, <span class="name">{{name}}</span>Your form has been submitted.</v-card-text>
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
  name:'team',
  data: () => ({
    title:"OurTeam",

    boards: [
       {
         url: 'https://ik.imagekit.io/qpt2onjfe/0_Pz9kyUGrZ.jpeg',
         name: 'Frida Wawira Ngari',
         title: 'Founder and CEO works as Lead Strategist on Educational Technologies',
         style: 'border-radius:100px;width:200px;'
       },
       {
         url: 'https://ik.imagekit.io/qpt2onjfe/fes/download_5qmKj7b2N.png',
         name: 'Stephanie Wangari Kirathe',
         title: 'Chief Technical Officer (CTO) and also works as the Chief Operations Officer (COO)',
         style: 'border-radius:100px;width:200px;'
       },
    ],
    teams: [
       {
         url: 'https://ik.imagekit.io/qpt2onjfe/fes/IMG-6041_OURNR1dl-.JPG',
         name: 'Joshua Kimbareeba',
         title: 'Fullstack Developer',
         style: 'border-radius:100px;width:200px;height:200px'
       },
       {
         url: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_9_Zqsgxo7jCi.svg',
         name: 'Evans Kimathi',
         title: 'Designer and also works as Frontend Developer',
         style: 'border-radius:100px;width:200px;height:200px'
       },
       {
         url: 'https://ik.imagekit.io/qpt2onjfe/fes/660095_GwuNRca1v.JPG',
         name: 'Precious Wangu',
         title: 'Designer and also works as UX Researcher',
         style: 'border-radius:100px;width:200px;height:200px'
       },
    ],
    //images
    form__img:'https://ik.imagekit.io/qpt2onjfe/fes/contact_D1y1LU-qg.svg',
 
    name:'',
    email:'',
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
      let emailJSscript = document.createElement('script')
      emailJSscript.setAttribute('src', 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js')
      document.head.appendChild(emailJSscript)
    })
  },

  methods: {
    submit () {

      const service_id = "default_service";
      const template_id = "contacts";
      const template_params = {
      "reply_to": this.email,
      "name": this.name,
}

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
#team-into > h2 {
  color: rgb(90, 89, 89);
}

.title__board {
  margin-bottom: 1%;
  margin-top: 2%;
  color: #2612A6;
}

.team__name {
  color: #ff5100;
  font-weight: 400 !important;
  font-size: 20px;
}
.team__title {
  text-align: center;
  width: 250px;
}

.main__title {
  font-size: 35px;
}

#questions-section {
   background:#2612A6;
   padding-top:2px;
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
    margin-bottom:10px;
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