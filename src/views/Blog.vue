<template>
    <v-main>
      <v-parallax
          height="500"
          src="../assets/blogparallax.jpg"
          >

          <v-container absolute width="100%">
            <div id="title-photo" class="align-center justify-center justify-space-around">
              <div id="logo-1" class="my-auto">
                <v-img
                  alt="Prodigest Logo"
                  contain
                  src="@/../public/Fotos/logo-prodigest/lefttitle.svg"
                  transition="scale-transition"
                  width="100%"/>
                </div>
              <div id="faixa-logo"><v-img
                  alt="Prodigest Logo"
                  contain
                  src="../assets/titles/blog.svg"
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
        </v-parallax>

        <div style="background-color: #28489d; color:white;">
        <v-container>
            <div id="text-intro">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis sit amet erat vitae eleifend. Nunc nec eros et dui iaculis tempus. Integer sagittis convallis lectus ut pulvinar. Aenean quis mollis neque, egestas sagittis turpis. Vestibulum vitae eros a arcu efficitur ornare sit amet in erat. Phasellus tristique egestas magna, sit amet tincidunt mi aliquam sed. Vestibulum vitae suscipit urna. Duis urna elit, fermentum eu leo congue, egestas fermentum nibh. Quisque fringilla a eros at blandit. Suspendisse lacinia eros ex, ornare fringilla libero ornare sit amet. Morbi imperdiet facilisis arcu, ullamcorper vulputate purus dictum non. Nunc eleifend volutpat lacus in laoreet. Suspendisse in sem congue, efficitur massa sed, vulputate velit.</p>
             <p>Cras id mi bibendum, elementum risus eget, lobortis felis. Mauris tempus mi non ipsum pellentesque, sit amet auctor velit consectetur. Integer risus ante, commodo eget varius id, pretium nec velit. Morbi sodales semper placerat. Morbi fringilla neque a felis efficitur mattis venenatis nec tortor. Ut faucibus justo vitae pulvinar cursus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tempus sit amet metus a hendrerit. Ut lacinia erat pulvinar iaculis venenatis.</p>
            </div>
        </v-container>
        </div>

         <h1 class="title-re mt-12 text-center">Publicações</h1>

        <v-container class="mt-12 p-12 d-flex flex-wrap justify-space-between">
          <v-card elevation="12" class="mx-auto mb-6" width="340px">
            <v-card-title class="title-re">Câncer Colorretal, Fique atento!</v-card-title>
                <v-img
                  alt=""
                  contain
                  src="../assets/blog/cancerColoretal.jpg"
                  transition="scale-transition"
                  width="100%"/>
            <v-card-actions>
             
             <router-link to="/blog/cancerColorretal">
             <v-btn
              elevation="12"
              absolute
              bottom
              right
              color="success"
             >
               ler sobre
             </v-btn>
             </router-link>
            </v-card-actions>
          </v-card>
              <v-card elevation="12" class="mx-auto mb-6" width="340px">
                <v-card-title class="title-re">Teste respiratório de hidrogênio expirado.</v-card-title>
                    <v-img
                      alt=""
                      contain
                      src="../assets/blog/hidrogenioExpirado.jpg"
                      transition="scale-transition"
                      width="100%"/>
                <v-card-actions>
                  <router-link to="/blog/hidrogenioExpirado">
                    <v-btn
                      elevation="12"
                      absolute
                      bottom
                      right
                      color="success"
                    >
                      ler sobre
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            <v-card elevation="12" class="mx-auto mb-6" width="340px">
                <v-card-title class="title-re">Manifestações extraesofágicas ( ou sintomas atípicos) da Doença do Refluxo Gastroesofágico (DRGE)</v-card-title>
                    <v-img
                      alt=""
                      contain
                      src="../assets/blog/drge.jpg"
                      transition="scale-transition"
                      width="100%"
                      />
                <v-card-actions>
                  <router-link to="/blog/drge">
                    <v-btn
                      elevation="12"
                      absolute
                      bottom
                      right
                      color="success"
                    >
                      ler sobre
                    </v-btn>
                  </router-link>
                </v-card-actions>
            </v-card>
            <v-card elevation="12" class="mx-auto mb-6" width="340px">
                <v-card-title class="title-re">Esofagite eosinofílica</v-card-title>
                    <v-img
                      alt=""
                      contain
                      src="../assets/blog/esofagite1.jpg"
                      transition="scale-transition"
                      width="100%"
                      />
                <v-card-actions>
                  <router-link to="/blog/esofagiteEosinofilica">
                    <v-btn
                      elevation="12"
                      absolute
                      bottom
                      right
                      color="success"
                    >
                      ler sobre
                    </v-btn>
                  </router-link>
                </v-card-actions>
            </v-card>
            <v-card elevation="12" class="mx-auto mb-6" width="340px">
                <v-card-title class="title-re">Hepatite Viral</v-card-title>
                    <v-img
                      alt=""
                      contain
                      src="../assets/blog/HEPATITES-VIRAIS.jpg"
                      transition="scale-transition"
                      width="100%"
                      />
                 <v-card-actions>
                  <router-link to="/blog/hepatiteViral">
                    <v-btn
                      elevation="12"
                      absolute
                      bottom
                      right
                      color="success"
                    >
                      ler sobre
                    </v-btn>
                  </router-link>
                </v-card-actions>
            </v-card>
            <v-card elevation="12" class="mx-auto mb-6" width="340px">
                <v-card-title class="title-re">Doença hepática gordurosa não alcoólica</v-card-title>
                    <v-img
                      alt=""
                      contain
                      src="../assets/blog/doencadofigado.jpg"
                      transition="scale-transition"
                      width="100%"
                      />
                 <v-card-actions>
                  <router-link to="/blog/hepatiteGordurosa">
                    <v-btn
                      elevation="12"
                        absolute
                        bottom
                        right
                        color="success"
                      >
                      ler sobre
                    </v-btn>
                  </router-link>
                </v-card-actions>
            </v-card>            
        </v-container>
    </v-main>
</template>
<script>
export default {
    name: 'Blog'
}
</script>
<style scoped>
.title-re{
    color:#28489d;
}
#text-intro{
  padding: 22px;
  text-align: justify;
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
</style>
