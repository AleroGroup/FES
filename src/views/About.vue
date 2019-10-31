<template>
  <v-content>
     <v-img :src="head__title" class="screen" height="550">
     <v-con tent>
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
   <v-layout column justify-center align-center hidden-xs-only>
     <h2 data-aos="fade-up" class="display-1 font-weight-medium" style="margin-top:4%">Our Motivation</h2>
   </v-layout>
    <v-layout  row justify-space-around class="motivation__items" hidden-xs-only style="margin-bottom:100px;">
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
                <v-card data-aos="fade-right" class="mx-auto">
                  <v-img :src="journey" width="170" height="200"></v-img>
                </v-card>
                <p class="text-justify" style="width:450px; margin:20px;">
                When i learned accounting at college, it was not a nice experience. 
                The teacher adopted a more teacher- centered approach, where he was 
                in full control of the class. He was the only one who was... 
                <v-layout row align-center class="message__btn ma-8" style="margin-bottom:6%">
                    <v-btn color="blue-grey lighten-2" class="text-lowercase"  icon to="/about/journey">Read more
                    <v-icon color="#2612A6">mdi-chevron-right</v-icon>
                    </v-btn>
                </v-layout>
                </p>
              
            </v-layout>
          </v-layout>
      </section>


        <section id='fes-message'>
        <v-layout column justify-center align-center class="message__items ma-3">
            <h2 class="message__item">OUR CRUCIBLE</h2>
            <v-layout row justify-center align-center>
              <p class="text-justify" style="width:450px; margin:20px;">
                 Technology is the best approach that a teacher and student can use 
                 to implement a transformation in achieving their learning objectives. 
                 The university college ICT infrastructure available was an Learning...
              <v-layout row align-center class="message__btn ma-8" style="margin-bottom:6%">
                <v-btn color="blue-grey lighten-2" class="text-lowercase" icon to="/about/crucible"> Read more
                <v-icon color="#2612A6">mdi-chevron-right</v-icon>
                </v-btn>
              </v-layout>
              </p>
              <v-card data-aos="fade-left" class="mx-auto">
                <v-img :src="technology"  width="170" height="200"></v-img>
              </v-card>
          </v-layout>
          </v-layout>
        </section>


        <section id='fes-message' >
            <v-layout column justify-center align-center class="message__items ma-3">
            <h2 class="message__item">CONCEPT & DESIGN</h2>
            <v-layout row justify-center align-center>
            <v-card data-aos="fade-right" class="mx-auto">
                <v-img class="img__item" :src="desiging" width="170" height="200"></v-img>
            </v-card>

              <p class="text-justify" style="width:450px; margin:20px;">
                Today, we have an opportunity to make authentic learning 
                environments where students and teachers enjoy their scholarly 
                journeys and graduate to be change agents in their societies...
               <v-layout row align-center class="message__btn ma-8" style="margin-bottom:7%">
                  <v-btn color="blue-grey lighten-2" class="text-lowercase" icon to="/about/conceptdesign">Read more
                  <v-icon color="#2612A6">mdi-chevron-right</v-icon>
                </v-btn>
              </v-layout>
              </p>
            </v-layout>
            </v-layout>
        </section>
        </v-layout> 

  <div id="fes-motivation" style="margin-bottom:2%">
   <v-layout column justify-center align-center hidden-xs-only>
     <h2  data-aos="fade-up" class="display-1 font-weight-medium">Our Objectives</h2>
   </v-layout>
  
   <v-layout data-aos="fade-up"  data-aos-delay="420" column justify-center align-center  hidden-sm-and-down>
      <section id='fes-message'>
        <v-layout  column justify-center>
          <v-flex xs8>
            <p class="text-justify" style="width:640px; margin:26px;">
              1. To provide an environment where thought-leaders, practitioners in educational 
              technology, educators, innovators, instructional designers of educational technology 
              applications and students and researchers in educational technologies converge 
              to inquire, investigate, improve, innovate, incubate and inform on uses of 
              emerging technologies to transform pedagogy of accounting and finance education.
            
            </p>
          </v-flex>
        <v-layout justify-center align-center style="margin-left:5%;">
          <p class="text-justify display-1 font-weight-medium" style="width:200px;margin-left:20px;margin-right:20px;">
            "inquire,
            <br /> investigate,
            <br /> improve,
            <br /> innovate,
            <br /> incubate
            <br /> and inform"          
          </p>
          <img data-aos="fade-left" :src="analysisblackboard" width="auto" height="auto"/>
        </v-layout>
        </v-layout>
      

        <v-layout row justify-center align-center style="margin-bottom:5%">
            <p class="text-justify" style="width:650px; margin:26px;">

               2. To facilitate out-of-the-box teaching approaches that resolve contextually unique 
               educational challenges and design models for the teaching and learning of the ‘future’.

               <br /><br />

               3. To become a center of recognition and dissemination of ‘good’ educational technology 
              practices through reward and showcasing excellence in teaching, exhibited by the caliber 
              of graduates joining the workforce.

                <br /><br />

              4. To become a center of educational technology pedagogical research in Kenya and across 
              the continent.

              <br /><br />
                  
              5. To become a leading venture for building 21st century educators capable of exploiting 
              ubiquitous technologies to influence education in the present and the future.
              
              </p>
        </v-layout>
       
       </section>
    </v-layout>

    <v-layout data-aos="fade-up"  data-aos-delay="420" column justify-center align-center  hidden-md-and-up>
      <section id='fes-message'>
        <v-layout  column justify-center align-center style="margin-left:6%;">
            <p class="text-justify" style="width:370px; margin:30px;">
              1. To provide an environment where thought-leaders, practitioners in educational 
              technology, educators, innovators, instructional designers of educational technology 
              applications and students and researchers in educational technologies converge 
              to inquire, investigate, improve, innovate, incubate and inform on uses of 
              emerging technologies to transform pedagogy of accounting and finance education.
            
            </p>
        <v-layout justify-center align-center style="margin-left:7%;" hidden-sm-and-down>
          <p class="text-justify display-1 font-weight-medium" style="width:200px;margin-left:20px;margin-right:20px;">
            "inquire,
            <br /> investigate,
            <br /> improve,
            <br /> innovate,
            <br /> incubate
            <br /> and inform"          
          </p>
          <img data-aos="fade-left" :src="analysisblackboard" width="auto" height="auto"/>
        </v-layout>
        </v-layout>
      

        <v-layout row justify-center align-center style="margin-left:3%;margin-bottom:7%">
            <p class="text-justify" style="width:370px; margin:30px;">

               2. To facilitate out-of-the-box teaching approaches that resolve contextually unique 
               educational challenges and design models for the teaching and learning of the ‘future’.

               <br /><br />

               3. To become a center of recognition and dissemination of ‘good’ educational technology 
              practices through reward and showcasing excellence in teaching, exhibited by the caliber 
              of graduates joining the workforce.
              </p>
        </v-layout>

       <v-layout row justify-center align-center style="margin-left:3%;margin-bottom:7%">
            <p class="text-justify" style="width:370px; margin:30px;">     
              4. To become a center of educational technology pedagogical research in Kenya and across 
              the continent.

              <br /><br />
                  
              5. To become a leading venture for building 21st century educators capable of exploiting 
              ubiquitous technologies to influence education in the present and the future.
            </p>
        </v-layout>
      </section>
    </v-layout>
  </div >

  <div id="fes-motivation" style="margin-bottom:2%">
    <v-layout column justify-center align-center hidden-xs-only>
      <h2  data-aos="fade-up" class="display-1 font-weight-medium">Our Vision and Our Hope</h2>
    </v-layout>

      <v-layout  column justify-center align-center>
            <section id='fes-message'>
            <v-layout column justify-center align-center class="message__items">
              
              <v-layout column data-aos="fade-up"  data-aos-delay="420"  row justify-center align-center>
                <p class="text-justify" style="width:650px; margin:20px;">
                  The past 20 years of the digital age in Kenya have been met with skepticism about 
                  what its impact is on education, business, politics and society. So far, business 
                  has led in embracing the benefits and challenges of integration technology, 
                  leaving others behind. The result has led to costly yet better goods and services 
                  but very expensive for the user in education, politics and social arena. And this 
                  had further increased the gap between the rich and the poor, increased crime and 
                  insecurity when doing business. 
                </p>

                <p class="text-justify" style="width:650px;">
                  Martin Weller (2018) suggests that “given the use of social media for extremism, 
                  data scares such as the Facebook breach by Cambridge Analytica, anxieties about 
                  Russian bots, concerted online abuse, and increased data surveillance, the 
                  unbridled optimism that technology will create an educational utopia now seems naïve... 
                  In 2018, Educational Technology stands on the brink of a new era, one that has a 
                  substantial underpinning of technology but that needs to build on the ethical, 
                  practical, and conceptual frameworks that combat the nefarious applications of 
                  technology”.
                </p>

                 <p class="text-justify" style="width:650px;">
                  Firefly Edtech Solutions Limited aims at providing learners an environment to explore, 
                  construct and design, imagine, discard and re-imagine pedagogies and educational 
                  applications for existing and emerging technologies in a dynamic, interactive, 
                  collaborative manner in line with the 21st Century demands. We are pleased to promote 
                  this concept. It is an opportunity to make local and global connections, to cross 
                  disciplines, and to engage in meaningful discussions about harness the possibility 
                  of abundant content and networked learners transforming learning and teaching with 
                  technology.
                </p>
              
              
              </v-layout>
            </v-layout>
        </section>
      </v-layout>
    </div>

  </v-content>
</template>

<script>

export default {
  name:'about',
  data: () => ({
     title:"About Us",

     //icons

     //images
     head__title:'https://ik.imagekit.io/qpt2onjfe/fes/background_HRJ60zWCxI.svg',
     journy: 'https://ik.imagekit.io/qpt2onjfe/Group_1_MQVSI-d1V.svg',
     crus:'https://ik.imagekit.io/qpt2onjfe/Group_1_p90BwlRpj.svg',
     design:'https://ik.imagekit.io/qpt2onjfe/Group_1_x38b2IjzX.svg',
     journey:'https://ik.imagekit.io/qpt2onjfe/0_Pz9kyUGrZ.jpeg',
     technology:'https://ik.imagekit.io/qpt2onjfe/fes/address-adult-african-1061576_b8_cCtAO6.jpg',
     desiging:'https://ik.imagekit.io/qpt2onjfe/fes/agenda-concept-development-7376_oKaUWwiqNh.jpg',
     analysisblackboard: 'https://ik.imagekit.io/qpt2onjfe/fes/A4_-_1_vkUjPzwj7.png'


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
    
  components: {
    //
  },
};
</script>

<style scoped>
.screen{
  height: 22%;
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
    background:#EB1204;
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