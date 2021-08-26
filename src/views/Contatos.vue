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
                alt="Contatos prodigest"
                contain
                src="../assets/titles/contatos.svg"
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
              
               
              <v-card
             elevation="14"
             class="mt-12 mx-auto"
             max-width="340">
             <v-card-title class="title-re">WhatsApp</v-card-title>
                
                <v-card-text>
                     <p>Agora a nossa clínica está disponibilizando
                         atendimento via whatsApp.</p>
                    <p class="title-card">Atendimento:</p>
                    <p></p>
                    <p>Segunda a Sexta de 7h30 às 19h</p>
                    <p>Sábados de 7h30 às 12h</p>
                    <p class="title-card">Telefone: </p>
                        <p>(61) 3244-4638</p>
                </v-card-text>
                        
                       <a style="color: white;" href="https://wa.me/send?phone=556132444638&text=Boa%20tarde!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Pr%C3%B3Digest" target="_blank"> 
                        <v-btn
                          color="success"
                          fab
                          dark
                          large
                          absolute
                          bottom
                          right
                        >
                          <v-icon>mdi-whatsapp</v-icon>
                        </v-btn>   
                       </a>                   
            </v-card>            
            </div>
            <v-card
             elevation="14"
             class="mt-12 mx-auto"
             max-width="340">
             <v-card-title class="title-re">Asa Sul-Brasília DF</v-card-title>
                
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
<script>
import {gmapApi} from 'vue2-google-maps'

export default {
    name: 'Contatos',
    computed: {
    google: gmapApi
    },
}
</script>
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