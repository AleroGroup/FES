<template>
  <v-content>
    <v-layout column justify-center align-center py-2 hidden-sm-and-down>
    <v-layout row justify-space-around>
      <div class="footer_item">
            <h4 class="footer__title">Services</h4>
            <p>Graduate students</p>
            <p>Teacher & faculty</p>
            <p>School admin & staff</p>
            <p>Business Owners</p>
        </div>
        <div class="footer_item">
            <h4 class="footer__title">Company</h4>
            <p><router-link to="/aboutus">About us</router-link></p>
            <p><router-link to="/team">Our Team</router-link></p>
            <p>Blog</p>
        </div>
        <div  class="footer_item">
            <h4 class="footer__title">Stay in touch</h4>
            <p><a :href="facebook"> Facebook </a></p>
            <p><a :href="linkedIn"> LinkedIn </a></p>
        </div>
        </v-layout>
    </v-layout>
        

     <v-layout row justify-space-around  style="margin-bottom:15px;">
        <v-card flat color="transparent" class="email font-weight-medium">firefly.edtech@gmail.com</v-card>
        <v-card flat color="transparent"  class="rights font-weight-medium">2018-2019 Firefly Edtech Solutions All Rights Reserved</v-card>
    </v-layout>


  </v-content>
</template>

<script>

export default {
  data: () => ({

   //social media
   facebook:'https://www.facebook.com/FESltd/?__tn__=kC-R&eid=ARC2EDPHpdVMmOxH5mUwZwKB4EWpmk2aVTTa0iVDb4V2E64ZolTbPf37b1BleRhInGMhvaldFubZiYYc&hc_ref=ARQ7Lg2IY3I-v4ODNx08XEfDDpL0xdaOYbPW12rfQEytQ01GI7mkchuzpcJmlrW1cts&fref=nf',
   linkedIn:'https://www.linkedin.com/company/firefly-edtech-solutions-ltd/'
 })
}
</script>

   <style scoped>
   
#footer {
    text-align:center;
    margin-bottom: 30px;
}
.footer_item{
    
    margin-top: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: inline-block;
    margin-right: 80px;
    vertical-align: top;
    
}
.copyright {
   display: inline;
    padding-left: 10px;
   
}

.footer_item p, .footer_item h4 {
   text-align: left;
   padding: 2px;
}

.footer_item p > a {
    text-decoration: none;
    color:#000803;

}
.footer_items p > a:hover {
    color:red;
}


.footer__title {
    margin-bottom: 10px;
}
   </style>
