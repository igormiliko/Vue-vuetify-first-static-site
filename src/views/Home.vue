<template>
  <div v-if="!showContent" class="about">
    <v-main>
     <v-carousel
          cycle
          height="500"
          :hide-delimiters="true">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
    </v-carousel>
     
     <v-container class="mt-12 align-center " width="100%">
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
                src="../assets/titles/bem-vindo.svg"
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
       <v-divider></v-divider>
      <v-container class="text-center mb-12">
         <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
        <v-img
          alt="Prodigest Logo"
          contain
          src="../assets/medicalCrew.svg"
          transition="scale-transition"
          width="350px"
          v-bind="attrs"
          v-on="on"
          class="mx-auto mt-12"/>
          </template>
                    <span>Vetor criado por macrovector-br.freepik.com</span>
                </v-tooltip>
          <p class="mt-12">Bem vindo à PróDigest! A clínica possui um corpo clínico constituído por
             25 médicos especialistas, atendendo nas áreas de gastroenterologia, proctologia,
              cirurgia do aparelho digestivo, hepatologia e ecografia. O ambiente é desenhado especialmente para você ser
              atendido de uma forma especial pela nosa equipe, configurando um ambiente confortável para a sua consulta. Aproveite já e conheça nossas unidades!
          </p>
          <router-link to="/unidades">
            <v-btn 
              color="success">
              Conheça nossas unidades!
            </v-btn>
          </router-link>
      </v-container>
     <div id="faixa">
     
     
     <v-container class="d-flex flex-column flex-sm-column flex-md-row justify-center justify-md-space-around">
       <div class="d-inline-flex flex-column flex-md-column justify-center">
        <v-card
        elevation="14"
         class="mt-12 mx-auto"
         max-width="330">
          <v-img
            height="125"
            src="../assets/antigo/homeCards/exames.jpg"
          ></v-img>
          <v-card-title class="title-re">Exames</v-card-title>
          <v-card-text>
            A PróDigest realiza exames nas áreas de gastroenterologia,
             proctologia e cirurgia do aparelho digestivo. Conheça nossos exames
          </v-card-text>
          <router-link to="/exames">
            <v-btn 
              color="success" block>
                Marque um exame
            </v-btn>
          </router-link>
       </v-card>
        <v-card
        elevation="14"
        class="mt-12 mx-auto"
         max-width="330">
          <v-img
            height="125"
            src="../assets/antigo/homeCards/festa2.jpg"
          ></v-img>
          <v-card-title class="title-re">Blog</v-card-title>
          <v-card-text>
            Espaço de interação entre pacientes e médicos com notícias, 
            eventos, novidades e muito mais, aproveite e acesse!
          </v-card-text>
          <router-link to="/blog">
            <v-btn 
              color="success" block>
                Visite nosso blog
            </v-btn>
          </router-link>
       </v-card>
       </div>
       <div class="d-inline-flex flex-column flex-md-column justify-center">
        <v-card
          elevation="14"
          class="mt-12 mx-auto"
          max-width="330">
          <v-img
            height="125"
            src="../assets/antigo/homeCards/equipe3.jpg"
          ></v-img>
          <v-card-title class="title-re">Equipe médica</v-card-title>
          <v-card-text>
            Equipe médica formada por profissionais altamente treinados
             e capacitados a atender você bem.
          </v-card-text>
          <router-link to="/contatos">
            <v-btn 
              color="success" block>
                Fale conosco
            </v-btn>
          </router-link>
       </v-card>
        <v-card
        elevation="14"
         class="mt-12 mx-auto"
         max-width="330">
          <v-img
            height="125"
            src="../assets/antigo/homeCards/clinica.jpg"
          ></v-img>
          <v-card-title class="title-re">Serviços</v-card-title>
          <v-card-text>
           A PróDigest também oferece serviços especializados como
            Medicina ocupacional entre outros. Saiba mais
          </v-card-text>
          <router-link to="/servicos">
            <v-btn 
              color="success" block>
                Conheça nossos serviços
            </v-btn>
          </router-link>
       </v-card>
       </div>
     </v-container>
     </div>
     <v-container class="mt-12">
            <p name="convenios" class="title-re mb-12 text-center justify-center">
              Convênios
            </p>
              <swiper/>
          </v-container>
    </v-main>
  </div>
</template>
<style scoped>
.title-re{
    color: #28489d;
    font-size: 30px;
    margin-top: 5px;
  }
  #faixa{
    padding-bottom: 42px;
    position: relative;
    width: 100%;
    background-image: linear-gradient(#28489d, #5fcbe7);
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
<script>
import swiper from '../components/swiper.vue'

export default {
  name: 'Home',
  components: {
    swiper,
    },
  data () {
      return {
        showContent: true,
        items: [
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
      }
    },
	mounted(){
    if(this.showContent) this.showToggleContent()
	},
	methods: {
		showToggleContent(){
			setTimeout(() => {
				this.showContent = false
			},7000)
		}
	}
}
</script>

