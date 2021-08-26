<template lang="">
    <div>
        <v-main class="justify-center">
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
                        src="../assets/titles/convenios.svg"
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
            <v-card
            elevation="14"
            style="padding: 8px;"
             class="mt-12 mx-auto text-center pt-8"
             width="90%">
                <p>Com mais de 15 anos de mercado, a PróDigest acumulou experiência 
                    e parcerias para melhor atender o seu público. Com toda 
                    essa carga, chegamos a 40 convênios! Isso mesmo, 
                    são quarenta convênios médicos, com o objetivo de proporcionar 
                    maior facilidade e acesso à população, sempre pensando no seu bem-estar
                    e na sua saúdae.</p>
                
                <router-link to="/consultas">
                    <v-btn color="success" class="text-center mt-8 mb-8">
                        Marque sua consulta!
                    </v-btn>
                </router-link>
            </v-card>          
        <v-card elevation="14"
             class="mt-12 pt-8 pb-6 pl-6 pr-6 mx-auto text-center d-flex flex-wrap justify-space-between"
             width="90%">
                 <div><v-img width="125px" src="../assets/convenios/allianz.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/amil.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/assefaz.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/bcb.png"/></div>

                 <div><v-img width="125px" src="../assets/convenios/bradesco.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/brb.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/cape.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/cassi.jpg"/></div>

                 <div><v-img width="125px" src="../assets/convenios/codevasf.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/correios.jpeg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/eletronorte.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/embrapa.jpg"/></div>

                 <div><v-img width="125px" src="../assets/convenios/embratel.svg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/FACEB.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/funsaHfab.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/fusex.png"/></div>

                 <div><v-img width="125px" src="../assets/convenios/gama-saude.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/goldencross.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/hospitalNaval.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/Infraero.png"/></div>

                 <div><v-img width="125px" src="../assets/convenios/intermédica.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/Life-Empresarial-1.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/Logo-Conab-Vertical_1.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/logo-tjdft.jpg"/></div>

                 <div><v-img width="125px" src="../assets/convenios/medial.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/mediservice.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/omint.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/petrobras.png"/></div>
                 
                 <div><v-img width="125px" src="../assets/convenios/plan-assiste.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/portoSeguro.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/saúdeCaixa.svg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/serpro.png"/></div>

                 <div><v-img width="125px" src="../assets/convenios/stf-med.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/stj-logo.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/sulamerica.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/treDF.png"/></div>

                 <div><v-img width="125px" src="../assets/convenios/trf.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/tst.jpg"/></div>
                 <div><v-img width="125px" src="../assets/convenios/unafisco.png"/></div>
                 <div><v-img width="125px" src="../assets/convenios/unimedcentral.png"/></div>
                </v-card>
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
  width: 5%;
}
</style>
<script>
export default {
    name: 'Convenios',
}
</script>
