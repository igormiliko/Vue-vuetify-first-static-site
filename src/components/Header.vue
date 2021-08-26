<template>
  <div class="home">
    <v-main class="justify-center">
      <v-carousel
          cycle
          height="500">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
    </v-carousel>
     <v-divider></v-divider>
     
        <v-container class="mt-12 align-center  justify-center" width="100%">
          <div id="title-photo">
            <div id="logo-1" class="my-auto">
              <v-img
                alt="Prodigest Logo"
                contain
                src="@/../public/Fotos/logo-prodigest/logo.svg"
                transition="scale-transition"
                width="100%"/>
              </div>
            <div id="faixa-logo"><v-img
                alt="Prodigest Logo"
                contain
                src="../assets/Home/home_h1.svg"
                transition="scale-transition"
                width="100%"
                class="mx-auto"
              /></div>
              <div id="logo-1" class="my-auto">
              <v-img
                alt="Prodigest Logo"
                contain
                src="@/../public/Fotos/logo-prodigest/logo.svg"
                transition="scale-transition"
                width="100%"/>
              </div>
          </div>
        </v-container>
        <div style="background-color: #5fcbe766;" class="mt-6">
        <v-container>
            <div id="text-intro">
             <p>A clinica PróDigest surgiu há 14 anos, inicialmente com o nome de oncogastroclínica, 
               instalada numa pequena sala localizada no centro clínico Oswaldo Cruz, como concretização 
               de um sonho, que nos imporia um caminho trabalhoso e com muitos obstáculos a serem 
               transpostos.</p>
             <p>Com o tempo , veio a experiência , o reconhecimento do nosso trabalho, e o grande 
                     aumento do número de pacientes, trazendo consigo a necessidade de mais espaço e 
                     profissionais com boa formação em suas respectivas áreas de atuação, selecionados, 
                     segundo rigorosos critérios de capacitação, tais como, residência médica, títulos de
                      especialização conferidos pelas respectivas Sociedades de saúde ( SOBED, FGB, CBC, 
                      SBMD, SOBRACIL, SBR ), além de experiência profissional comprovada.</p>
             <p>Adicionalmente, a necessidade de mudança do nome da nossa clínica para PróDigest 
                      surgiu em função da demanda crescente entre os pacientes pela ampliação do número 
                      de especialidades atendidas, relacionadas a patologias do aparelho digestivo.</p>
             <p>Como objetivo permanente, colocamos a busca incessante e obstinada por novas
                       tecnologias que agreguem precisão de diagnóstico e da excelência no tratamento
                        das patologias do aparelho digestivo, sem perder de vista a qualidade no atendimento
                         ao nossos pacientes. A clínica oferece um ambiente com:</p>
            </div>
        </v-container>
        </div>
          <v-container>
            <v-divider></v-divider>
             <div id="cards-container" class="mt-6 d-inline-flex flex-column flex-sm-row flex-lg-row" >
               <div  class="d-inline-flex flex-column flex-lg-row">
               <v-card class="text-center px-8 py-4 card-size mt-6 mx-auto" elevation="4">
                <v-card-title class="text-center justify-center m-10 py-6 title-mission">Segurança</v-card-title>
                  <v-icon class="icon-sized" color="blue">mdi-security</v-icon>
                  <v-card-actions>
                    <v-btn class="mx-auto" color="success">
                      Agende sua consulta
                    </v-btn>
                  </v-card-actions>
                <v-card-text>
                  Lavadoras automaticas de ultima geração recomendadas pela ANVISA para processamento 
                  dos aparelhos de endoscopia digestiva e colonoscopia. Pinças de biopsias esterelizadas 
                  de uso individual por paciente durante cada exame. Enfermeira com treinamento em endoscopia 
                  / colonoscopia para coordenar atendimento aos pacientes.
                </v-card-text>
               </v-card>
               <v-card class="text-center px-8 py-4 card-size mt-6 mx-auto" elevation="4">
                <v-card-title class="text-center justify-center py-6 title-mission">Comodidade</v-card-title>
                  <v-icon class="icon-sized" color="blue">mdi-seat-recline-extra</v-icon>
                  <v-card-actions>
                    <v-btn class="mx-auto" color="success">
                      Conheça a clínica
                    </v-btn>
                  </v-card-actions>
                <v-card-text>
                  As duas unidades localizadas na Asa Sul e Norte propiciam rápido e fácil acesso ao 
                  paciente tanto por meios particulares quanto utilizando transporte público. A clinica
                   PRODIGEST ASA NORTE, possui amplo estacionamento e três níveis de garagens disponíveis
                    aos pacientes usuários da clínica.
                </v-card-text>
               </v-card>
               </div>
               <div class="d-inline-flex flex-column flex-lg-row">
               <v-card class="text-center px-8 py-4 card-size mt-6 mx-auto" elevation="4">
                <v-card-title class="text-center justify-center py-6 title-mission">Tecnologia</v-card-title>
                  <v-icon class="icon-sized" color="blue">mdi-microscope</v-icon>
                   <v-card-actions>
                    <v-btn class="mx-auto" color="success">
                      Marque seu exame
                    </v-btn>
                  </v-card-actions>
                <v-card-text>
                  Padronização de aparelhos de Vídeo-endoscopia / Vídeo- colonoscopia marca Olympus
                   comprovadamete os melhores da categoria. Laboratório de motilidade com aparelhagem 
                   de ultima geração ulilizada no diagnóstico dos disturbios e patologias esofágicas : 
                   Phmetria esofágica de duplo canal, Manometria esofágica e Impedâncio Phmetria.
                </v-card-text>
               </v-card>
               
               <v-card class="text-center px-4 py-4 card-size mt-6 mx-auto" elevation="4">
                <v-card-title class="text-center justify-center py-6 title-mission">Satisfação</v-card-title>
                  <v-icon class="icon-sized" color="blue">mdi-account-check-outline</v-icon>
                  <v-card-actions>
                    <v-btn class="mx-auto" color="success">
                     Visite nosso Blog
                    </v-btn>
                  </v-card-actions>
                <v-card-text>
                  Treinamento em recursos humanos dos funcionários de todos 
                  os setores da clinica (secretarias , telefonistas , auxiliares de enfermagem).
                  Equipe de medicos multidisciplinar com especialidades afins otimizando o diagnostico 
                  das patologias do aparelho digestivo resultando em resolutividade.
                </v-card-text>
               </v-card>
               </div>
               </div>
        </v-container>
          <v-btn class="mt-12" color="success" width="100%">
                Agende já a sua consulta!
            </v-btn>
 
    
          <div id="faixa">
            <v-container>
              <div id="container2" class="mx-auto d-lg-column pt-12 pb-12">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                  <div id="ilustracao" class="mx-auto my-auto">
                    <v-img
                      alt="Prodigest Logo"
                      contain
                      src="../assets/Home/ilustr.jpg"
                      transition="scale-transition"
                      width="100%"
                      v-bind="attrs"
                      v-on="on"
                      class="mx-auto rounded-circle"
                    />
                  </div>
                  </template>
                    <span>Vetor criado por macrovector-br.freepik.com</span>
                </v-tooltip>
                <div id="missao" class="mx-auto mt-12">
                  <p class="title-mission">Missão</p>
                  “Proporcionar assistencia médica com foco em Aparelho Digestico atraves de 
                  ações de prevenção , promoção a saúde e tratamento priorizando a qualidade e 
                  segurança no atendimento aos pacientes, sempre buscando novas tecnologias que 
                  reforcem a nossa missão no Distrito Federal.”
                  <v-divider></v-divider>
                  <p class="title-mission">Valores</p>
                  “Transparência, respeito a vida, responsabilidade socioambiental, ética, qualidade e 
                  comprometimento com o paciente.”
                  <v-divider></v-divider>
                  <p class="title-mission">Visão</p>
                  “Ser reconhecida pela sociedade pela excelência em segurança e qualidade na 
                  prestação de serviços médicos na sua área de atuação.”
                  
                  
                </div>
              </div>
              </v-container>
          </div>
          <v-container class="mt-12">
            <p name="convenios" class="title-mission  mb-12 text-center justify-center">
              Convênios
            </p>
              <swiper/>
          </v-container>

        
  </v-main>

  </div>
</template>
<style scoped>
#title-photo{
  display: flex;
  justify-content: space-between;
}
#faixa-logo{
  width:75%;
}
#logo-1{
  width: 8%;
}
#text-intro{
  margin-bottom: 18px;
  margin-top: 36px;
  text-align: justify;
}
  #cards-container{
    display: flexbox;
    width: 100%;
    justify-content:space-evenly;
    align-items: center;
     background-image: url(/../public/Fotos/logo-prodigest/logo.svg);
  }
  #ilustracao{
    width:278px;
    height: 321px;
    border-radius: 50%;
    box-shadow: 5px 5px 5px #00000077;
  }
  #missao{
    text-align: justify;
    width: 70%;
    color: gray;
  }
  #faixa{
    position: relative;
    width: 100%;
    padding-top:24px;
    padding-bottom:24px;
    background-image: linear-gradient(#28489d, #5fcbe7);
  }
  #container2{
    box-shadow: 6px 5px 5px 5px #00000077;
    background-color: #ffffff;
    border-radius: 5px;
    width: 100%;
    justify-content:space-between;
  }
  .card-size{
    width: 300px;
    height: 550px;
    font-size: 1rem;
  }
  .icon-sized{
    font-size: 80px;
  }
  .title-mission{
    color: #28489d;
    font-size: 30px;
    margin-top: 5px;
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
        items: [
          {
            src: 'https://image.freepik.com/fotos-gratis/maos-da-medica-irreconhecivel-escrevendo-no-formulario-e-digitando-no-teclado-do-laptop_1098-20374.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_960_720.jpg',
          },
          {
            src: 'https://image.freepik.com/fotos-gratis/mulher-afro-descontente-sente-desconforto-no-estomago-mantem-as-palmas-das-maos-na-barriga-tem-colicas-menstruais-veste-uma-camiseta-casual-comeu-comida-estragada-isolada-na-parede-azul-expressa-emocoes-negativas-com-imitacao_273609-38321.jpg',
          },
          {
            src: 'https://image.freepik.com/vetores-gratis/conceito-de-gastroenterologia-medico-estomacal_126608-121.jpg',
          },
        ],
      }
    },
    
}

</script>
