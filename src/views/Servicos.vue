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
                        src="../assets/titles/serviços.svg"
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
            <v-container>
                <v-card
                elevation="14"
                style="padding: 8px;"
                class="mt-12 mx-auto pr-8 pl-8 pt-8">
                    <v-card-title class="title-re text-center">Chekup Digestivo</v-card-title>
                    <div class="mt-6">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-img
                                v-bind="attrs"
                                v-on="on"
                                alt="Pequenos médicos"
                                contain
                                src="../assets/ilustracao/tinyDoctors.jpg"
                                transition="slide-x-transition"
                                class="mx-auto"
                                width="50%"/>
                            </template>
                                <span>Vetor criado por macrovector.freepik.com</span>
                            </v-tooltip>
                    </div>
                    <div style="width: 90%;padding:12px;" class="p-8 text-justify mx-auto">
                        <p>A PróDigest realiza um programa exclusivo de Check-up Digestivo, conceito totalmente inovador, voltado para a prevenção e o cuidado do seu aparelho digestivo!</p>
                        <p>O Check-up Digestivo foi desenvolvido pensando em facilitar a vida do cliente, são no máximo 6 horas de consultas, testes laboratoriais, exames de imagem, testes funcionais e outros procedimentos de avaliação que vão compor um mapa da saúde do aparelho digestivo de cada indivíduo.</p>
                    </div>
                    <v-btn class="mx-auto mb-8" color="success" block>
                     faça aqui o seu Check–Up Digestivo!
                    </v-btn>
                
                        <v-container class="mb-8">
                             <v-row justify="center">
                                <v-expansion-panels>
                                 <v-expansion-panel>
                                  <v-expansion-panel-header class="title-exp-panel">Avaliação Individual</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <ul>
                                            <li>Análise dos resultados, traçando o perfil da saúde (risco) do aparelho digestivo do cliente;</li>
                                            <li>Recomendações em decorrência dos achados clínico-laboratoriais, funcionais e do perfil de saúde do aparelho digestivo do cliente.</li>
                                        </ul>
                                    </v-expansion-panel-content>
                                 </v-expansion-panel>
                                 <v-expansion-panel>
                                  <v-expansion-panel-header class="title-exp-panel">Avaliação Global</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <ul>
                                            <li>Avaliação da população de executivos examinada no período de 1 ano;</li>
                                            <li>Tratamento estatístico dos dados coletados e apresentação com gráficos ilustrativos;</li>
                                            <li>Comparação com a população geral;</li>
                                            <li>Recomendações e sugestões para a população específica.</li>
                                        </ul>
                                    </v-expansion-panel-content>
                                 </v-expansion-panel>
                                 <v-expansion-panel>
                                  <v-expansion-panel-header class="title-exp-panel">Monitoramento</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <ul>
                                            <li>Gerenciamento dos riscos à saúde do aparelho digestivo individual;</li>
                                            <li>Acompanhamento e apoio nas metas estabelecidas visando otimizar as condições de saúde dos clientes.</li>
                                        </ul>
                                    </v-expansion-panel-content>
                                 </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header class="title-exp-panel">Diferenciais</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <ul>
                                            <li>Equipe de saúde focada no atendimento ao indivíduo;</li>
                                            <li>Equipe médica experiente e renomada;</li>
                                            <li>Utilização de sala VIP e acompanhamento individualizado, em tempo integral;</li>
                                            <li>Praticidade, rapidez e conforto (com sala para leitura de jornais, acesso à Internet e som ambiental);
                                            <li>Café da manhã;</li>
                                            <li>Ambiente distinto do hospitalar;</li>
                                            <li>Cortesia de estacionamento.</li>
                                        </ul>
                                    </v-expansion-panel-content>
                                 </v-expansion-panel>
                                </v-expansion-panels>
                            </v-row>
                        </v-container>
                </v-card>

                <v-card
                    elevation="14"
                    style="padding: 8px;"
                    class="mt-12 mx-auto pr-8 pl-8 pt-8">
                    <v-card-title class="title-re text-center">PróDigest empresas</v-card-title>
                    <div class="mt-6">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-img
                                v-bind="attrs"
                                v-on="on"
                                alt="ilustração de medicos com gráficos"
                                contain
                                src="../assets/ilustracao/doctorsChart.jpg"
                                transition="slide-x-transition"
                                class="mx-auto"
                                width="50%"/>
                            </template>
                                <span>Designed by katemangostar / Freepik</span>
                            </v-tooltip>
                    </div>

                    <a style="color: white;" href="https://wa.me/send?phone=556132444638&text=Boa%20tarde!%20Eu%20gostaria%20de%20saber%20sobre%20o%20serviço%20para%20empresas%20da%20PróDigest" target="_blank">
                        <v-btn class="mx-auto m-8" color="success" block>
                            Fale com o nosso especialista!
                        </v-btn>
                    </a>
                            <div style="width: 90%;padding:12px;" class="p-8 mt-6 text-justify mx-auto">
                                <p>A PróDigest resolveu ajudar a sua empresa a gerar bem estar para o seu funcionário!
                                Através de soluções completas de exames e consultas do aparelho digestivo a PróDigest
                                    gera praticidade e eficiência para o dia a dia da área de saúde de sua organização.
                                    É isso que faz da PróDigest Empresas uma excelente opção para a obtenção de melhores 
                                    resultados para a sua organização!</p>
                                <p>A PróDigest Empresas engloba uma gama de serviços direcionados ao mercado corporativo. 
                                    Sua empresa contará com o atendimento de um gerente, médico especializado em programas
                                    de prevenção e cuidado à saúde do aparelho digestivo, que identificará e implantará, 
                                    juntamente com a sua empresa, soluções de acordo com cada uma de suas necessidades.</p>
                                <p>O conceito envolve a prestação de serviços corporativos com o que há de mais importante 
                                    para a ProDigest: solução completa de tratamento e prevenção do aparelho digestivo para 
                                    seus funcionários, com elevada segurança técnica, profissionais altamente qualificados e modernos 
                                    equipamentos para a realização de exames.</p>
                            </div>       
                </v-card>
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
.title-exp-panel{
  color: rgb(94, 187, 171);
  font-size:20px;
}
li{
    color: rgb(155, 155, 155);
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
export default {
    name: 'Servicos'
}
</script>
<style lang="">
    
</style>