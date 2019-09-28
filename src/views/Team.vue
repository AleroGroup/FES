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
      name: 'Frida Ngari',
      style: 'border-radius:100px;width:200px;'
    },
    {
      url: 'https://ik.imagekit.io/qpt2onjfe/fes/download_5qmKj7b2N.png',
      name: 'Stephanie Kirathe',
      style: 'border-radius:100px;width:200px;'
    },
  ],
  teams: [
    {
      url: 'https://ik.imagekit.io/qpt2onjfe/fes/IMG-6041_OURNR1dl-.JPG',
      name: 'Joshua Kimbareeba',
      style: 'border-radius:100px;width:200px;height:200px'
    },
  {
    url: 'https://ik.imagekit.io/qpt2onjfe/fes/Group_9_Zqsgxo7jCi.svg',
    name: 'Evans Kimathi',
    style: 'border-radius:100px;width:200px;height:200px'
  },
   {
    url: 'https://ik.imagekit.io/qpt2onjfe/fes/660095_GwuNRca1v.JPG',
    name: 'Precious Wangu',
    style: 'border-radius:100px;width:200px;height:200px'
  },
  ]

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
.main__title {
  font-size: 35px;
}
</style>