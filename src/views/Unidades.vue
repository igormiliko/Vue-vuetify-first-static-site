<template lang="">
    <div>
        <v-container class="mt-12 align-center " width="100%">
          <div id="title-photo" class="mt-12 align-center justify-center justify-space-around">
            <div id="logo-1" class="my-auto">
              <v-img
                alt="Prodigest Logo"
                contain
                src="@/../public/Fotos/logo-prodigest/lefttitle.svg"
                transition="scale-transition"
                width="100%"/>
              </div>
            <div id="faixa-logo"><v-img
                alt="Unidades prodigest"
                contain
                src="../assets/titles/unidades.svg"
                transition="scale-transition"
                width="100%"
                class="mx-auto"
              /></div>
              <div id="logo-1" class="my-auto">
              <v-img
                alt="Prodigest Logo"
                contain
                src="@/../public/Fotos/logo-prodigest/righttitle.svg"
                transition="scale-transition"
                width="100%"/>
              </div>
          </div>
        </v-container>

        <v-container class="d-flex align-center flex-column flex-sm-column flex-lg-row justify-center justify-md-space-around">
            <v-card
             elevation="14"
             class="mt-12 mx-auto"
             max-width="340">
             <v-card-title class="title-re">Asa Norte-Brasília DF</v-card-title>
                <v-carousel
                    cycle
                    height="300"
                    :hide-delimiters="true">
                    <v-carousel-item
                    v-for="(item,i) in itemsNorte"
                    :key="i"
                    :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
                <v-card-text>
                    <p class="title-card">Endereço:<p>
                    <p>SMHN Qd. 02 Bl. C salas 205/217 – Edifício Dr. Crispim</p>
                    <p class="title-card">Atendimento:<p>
                    <p>Segunda a Sexta de 7h30 às 19h</p>
                    <p>Sábados de 7h30 às 12h</p>
                    <p class="title-card">Tel: (61) 3443-2448</p>
                </v-card-text>
              <v-dialog
                transition="scale-transition"
                max-width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-fab-transition>
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          color="red"
                          fab
                          dark
                          large
                          absolute
                          bottom
                          right
                        >
                          <v-icon>mdi-map-marker</v-icon>
                        </v-btn>
                      </v-fab-transition>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar
                      color="primary"
                      dark
                    >Asa Norte-Brasília DF</v-toolbar>
                    <v-card-text>
                      <div class="map-style d-flex justify-center">
                        <gmapMap
                          :center="{lat:-15.783726854399642, lng:-47.884852702112426}"
                          :zoom="15"
                          map-type-id="terrain"
                          style="width: 500px; height: 300px;"
                        >
                             <GmapMarker ref="myMarker" href="https://www.google.com.br/maps/place/Prodigest/@-15.8113072,-47.9154458,17z/data=!4m5!3m4!1s0x935a2558ab5507bd:0x6a168f77a7964d1d!8m2!3d-15.8113124!4d-47.9132571"
                            :position="google && new google.maps.LatLng(-15.783726854399642, -47.884852702112426)" />
                        </gmapMap>
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <a target="_blank" href="https://www.google.com.br/maps/place/Clinica+Prodigest/@-15.7839488,-47.8870414,17z/data=!3m1!4b1!4m5!3m4!1s0x935a3afe8a460437:0x518c70454e05a6c4!8m2!3d-15.783945!4d-47.8848524"><v-btn
                        color="success"
                        text
                      >Vamos até lá?</v-btn></a>
                      <v-btn
                        text
                        @click="dialog.value = false"
                      >Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>  
            </v-card>
            <div class="d-flex flex-column">
              
               
              <div style="width: 200px;" class="mx-auto mt-12">
                 <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      alt="Ilustração de médicos"
                      contain
                      src="../assets/ilustracao/crewunity.svg"
                      transition="slide-x-transition"
                      width="100%"/>
                  </template>
                    <span>Vetor criado por macrovector.freepik.com</span>
                 </v-tooltip>
              </div>

            <router-link to="consultas">
             <v-btn 
                  class="mt-12" 
                  color="success"
                  dark
                 >Marque sua consulta!</v-btn>             
            </router-link>
            </div>
            <v-card
             elevation="14"
             class="mt-12 mx-auto"
             max-width="340">
             <v-card-title class="title-re">Asa Sul-Brasília DF</v-card-title>
                <v-carousel
                    cycle
                    height="300"
                    :hide-delimiters="true">
                    <v-carousel-item
                    v-for="(item,i) in itemsSul"
                    :key="i"
                    :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
                <v-card-text>
                    <p class="title-card">Endereço:<p>
                    <p>SGAS 910 Bloco “F” salas 19/29 – Edifício Mix Park Sul</p>
                    <p class="title-card">Atendimento:<p>
                    <p>Segunda a Sexta de 7h30 às 19h</p>
                    <p>Sábados de 7h30 às 12h</p>
                    <p class="title-card">Tel: (61) 3244-4638</p>
                </v-card-text>
                <v-dialog
                transition="scale-transition"
                max-width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-fab-transition>
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          color="red"
                          fab
                          dark
                          large
                          absolute
                          bottom
                          right
                        >
                          <v-icon>mdi-map-marker</v-icon>
                        </v-btn>
                      </v-fab-transition>
                </template>
                <template v-slot:default="dialog">
                  <v-card class="justify-center">
                    <v-toolbar
                      color="primary"
                      dark
                    >Asa Sul - Brasília DF</v-toolbar>
                    <v-card-text>
                      <div class="map-style d-flex justify-center">
                        <gmapMap
                          :center="{lat:-15.811116253803423, lng:-47.91322491560278}"
                          :zoom="15"
                          map-type-id="terrain"
                          style="width: 500px; height: 300px"
                        >
                             <GmapMarker ref="myMarker"
                            :position="google && new google.maps.LatLng(-15.811116253803423, -47.91322491560278)" />
                        </gmapMap>
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <a target="_blank" href="https://www.google.com.br/maps/place/Prodigest/@-15.8113072,-47.9154458,17z/data=!3m1!4b1!4m5!3m4!1s0x935a2558ab5507bd:0x6a168f77a7964d1d!8m2!3d-15.8113124!4d-47.9132571"><v-btn
                        color="success"
                        text
                      >Vamos até lá?</v-btn></a>
                      <v-btn
                        text
                        @click="dialog.value = false"
                      >Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>  
            </v-card>
        </v-container>        
    </div>
</template>
<style scoped>
.title-re{
    color: #28489d;
    font-size: 30px;
    margin-top: 5px;
  }
.title-card{
  color: rgb(94, 187, 171);
  font-size:20px;
}
 #title-photo{
  display: flex;
  justify-content: space-between;
}
#faixa-logo{
  width:75%;
}
#logo-1{
  width: 5%;
}
.map-style{
  border-radius: 5px;
  width: 100%;
}
</style>
<script>
import {gmapApi} from 'vue2-google-maps'

export default {
    name: 'Unidades',
     computed: {
    google: gmapApi
    },
    data () {
      return {
        itemsNorte: [
          {
            src: require('../assets/antigo/asanorte/1.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/2.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/3.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/5.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/7.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/8.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/9.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/11.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/12.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/13.jpg'),
          },
          {
            src: require('../assets/antigo/asanorte/14.jpg'),
          },
        ],
        
        itemsSul: [
            {
            src: require('../assets/antigo/asaSul/foto_016.jpg'),
          },
          {
            src: require('../assets/antigo/asaSul/foto_019.jpg'),
          },
          {
            src: require('../assets/antigo/asaSul/foto_023.jpg'),
          },
          {
            src: require('../assets/antigo/asaSul/foto_036.jpg'),
          },
          {
            src: require('../assets/antigo/asaSul/foto_038.jpg'),
          },
        ],
      }
    },
}
</script>