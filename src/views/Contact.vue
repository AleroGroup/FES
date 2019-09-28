<template>
<v-content class="screen">
   <v-img :src="head__title" style="margin-top:6%;margin-bottom:6%;">
    <v-layout column justify-center align-center>
  
   <v-card color="transparent" flat style="margin-bottom:2%;">
        <div id="contactform" class="questions-section_item details display-1 text-center">
            <h2>Have any questions? </h2>
            <h2 class="gray">Or need any assistance?</h2>
        </div>
        </v-card>
  
       <v-card color="transparent" flat class="questions-section_item form">
            <form ref="form" class="question-form" id="contact-form" v-if="!isLoading">
            <v-layout justify-center align-center column>
               <div class="text-danger" v-if="formInvalid">Please fill out all the fields.</div>
                 <v-flex xs12 md4 pa-1>
                    <input style="width:300px;" v-model="name" type="text"  placeholder="Name *" required="required" aria-invalid="true" />
                 </v-flex>
                <v-flex xs12 md4 pa-1>
                    <input style="width:300px;"  v-model="email" type="email" placeholder="Email *">
                </v-flex>
                <v-flex xs12 md4 pa-1>
                  <input  style="width:300px;" v-model="phone" type="text" placeholder="Phone number *">
                </v-flex>
                <v-flex xs12 pa-2>
                  <textarea style="width:300px;" rows="4" cols="50" v-model="message" type="textarea" placeholder="Your message" class="text-area" />
                </v-flex>
                
            </v-layout>
                   <v-layout justify-end>
                   <v-btn color="#2612A6" v-on:click="submit" type="submit" outlined style="border-radius:20px;">send</v-btn>
                </v-layout>  
            </form>
        </v-card>
    </v-layout>
   </v-img>

    <v-dialog
        v-model="dialogformSubmitted"
        width="400"
        v-if="formSubmitted"
      >
        <v-card width="auto" height="auto">
        <v-layout justify-center align-center>
           <v-card-text class="title font-weight-medium text-center pa-4">Thank you, <span class="name font-weight-medium">{{name}}</span>We have received your message and will get back to you</v-card-text>
        </v-layout>
      </v-card>
      
      
      </v-dialog>
    
</v-content>
</template>

<script>


export default {
  name:'contact',
  data: () => ({
     title:"Contact Us",

     //images
     head__title:'https://ik.imagekit.io/qpt2onjfe/fes/background_HRJ60zWCxI.svg',
     footer__link: 'https://ik.imagekit.io/qpt2onjfe/fes/pluto-message-sent-1_Cz5tBH1Ol.png',

     //form details
     name:'',
     email:'',
     phone: '',
     message:'',
     dialogformSubmitted:false,
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
      var template_params = {
      "reply_to": this.email,
      "name": this.name,
      "phone": this.phone,
      "message_html": this.message

}

const service_id = "default_service";
const template_id = "template_ukUBbp7Z";
      event.preventDefault()
      if (this.email !== null && this.name !== null && this.message !== null && this.phone !== null) {
        this.isLoading = true
        this.formSubmitted = false
        this.dialogformSubmitted = false
        emailjs.init('user_c0Q2llk67OnYN7obTBRkR')
        this.contact_number = Math.random() * 100000 | 0
        emailjs.send(
          service_id, 
          template_id,
           template_params
        ).then((response) => {
          this.formSubmitted = true
          this.dialogformSubmitted = true
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
  height: 89%;
}

#contactform > h2 {
    text-align: center;
    color: grey;
    font-size: 35px;
}
#contactform > h2.gray {
    text-align: center;
    color: #2612A6;
    font-size: 26px;
}

.question-form input{
    display:block;
    width: 100vw;
    max-width: 500px;
    padding:18px;
    background: #ffb25a44;
    height: 2.5rem;
    border-radius: 4px;
    margin-top: 0;
    margin-bottom:10px;
    
}
.question-form textarea{
    width: 100vw;
    max-width: 500px;
    padding:18px;
    background: #ffb25a44;
    border-radius: 4px;
    margin-top: 0;
    margin-bottom:10px;
    
}

textarea:focus, input:focus {
    outline: none;
    border: 2px solid #2612A6;

}


.title__contacts {
   color: #2612A6;
}

</style>