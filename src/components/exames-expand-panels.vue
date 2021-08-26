<template>
    <v-container class="mb-8">
            <p class="title-re text-center mb-8">
                <strong>Confira os nossos exames:</strong>
            </p>
                    <v-row justify="center">
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="title-exp-panel"> 
                                    Endoscopia Digestiva Alta / Videoendoscopia Digestiva Alta
                                </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                   <li>A esofagogastroduodenoscopia ou endoscopia digestiva alta é um tipo de exame médico 
                                       que se utiliza de um endoscópio para obter imagens do trato digestivo objetivando
                                        o diagnóstico e enventualmente o tratamento de patologias que porventura o acometa.</li>
                                   <li>Clique no botão a baixo para ver como se preparar para o exame:</li>
                                    <a href="pré-endoscopia.pdf" target="_blank"><v-btn color="#28489d" style="color: white;" class=" justify-end mt-4 mb-4" right>
                                        Preparo pré-exame</v-btn></a>
                                </ul>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header class="title-exp-panel">Colonoscopia / Videocolonoscopia</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li>A colonoscopia é um método seguro e eficaz de examinar toda a mucosa (revestimento interno) do cólon 
                                        e do reto, usando um instrumento tubular longo e flexível, chamado de colonoscópio. Ela é utilizada 
                                        para diagnosticar problemas do cólon e reto, para realizar biópsias e remover pólipos quando indicado.</li>
                                    <li>Clique no botão a baixo para ver como se preparar para o exame:</li>
                                     <a href="pre-colono.pdf" target="_blank">
                                         <v-btn color="#28489d" style="color: white;" class=" justify-end mt-4 mb-4" right>
                                        Preparo pré-exame</v-btn>
                                     </a>
                                </ul>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header class="title-exp-panel">Retossigmoidoscopia</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li>O exame de retossigmoidoscopia é um procedimento que permite a avaliação das paredes 
                                        do reto e do cólon sigmóide, que compõe a parte inferior do aparelho digestivo. 
                                        A diferença da retossigmoidoscopia e da colonoscopia é o alcance de cada aparelho na 
                                        realização do exame.</li>
                                    <li>Clique no botão a baixo para ver como se preparar para o exame:</li>
                                        <a href="Pre-Retossigmoidoscopia.pdf" target="_blank">
                                            <v-btn color="#28489d" style="color: white;" class=" justify-end mt-4 mb-4" right>
                                                Preparo pré-exame</v-btn>
                                                </a>
                                </ul>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header class="title-exp-panel">Manometria Esofágica</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li>Uma manometria esofágica é um exame médico para avaliar o movimento, 
                                        a capacidade e força da contração muscular dos esfíncteres e do corpo 
                                        do esófago. É geralmente realizado para identificar a causa de pirose, 
                                        de dificuldades de deglutição ou de dor torácica.</li>
                                    <li>Clique no botão a baixo para ver como se preparar para o exame:</li>
                                        <a href="PreManometria.pdf" target="_blank">
                                            <v-btn color="#28489d" style="color: white;" class=" justify-end mt-4 mb-4" right>
                                                Preparo pré-exame</v-btn>
                                        </a>
                                </ul>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header class="title-exp-panel">Impedâncio PHmetria esofagica</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li> A impedância intraluminal esofágica é um método diagnóstico que registra o 
                                        fluxo retrógrado de conteúdo gástrico, independente de seu pH. Quando combinado 
                                        com pHmetria (Impedâncio-pHmetria), permite detectar o Refluxo Gastro-Esofágico 
                                        (RGE) ácido e “não-ácido”.</li>
                                    <li>Clique no botão a baixo para ver como se preparar para o exame:</li>
                                        <a href="Pre-ImpedancioPhmetria.pdf" target="_blank">
                                            <v-btn color="#28489d" style="color: white;" class=" justify-end mt-4 mb-4" right>
                                                Preparo pré-exame</v-btn>
                                        </a>
                                </ul>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header class="title-exp-panel">PHmetria Esofágica de 24 Horas</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li>Phmetria esofágica é um exame que permite ao médico avaliar o refluxo (retorno) 
                                        de material ácido contido no estômago para o interior do esôfago, monitorizando 
                                        o paciente por um período aproximado de 24 horas através de uma sonda fina colocada 
                                        em uma das narinas sendo esta conectada a um computador (gravador).</li>
                                    <li>Clique no botão a baixo para ver como se preparar para o exame:</li>
                                        <a href="Pre-Phmetria24.pdf" target="_blank">
                                            <v-btn  color="#28489d" style="color: white;" class=" justify-end mt-4 mb-4" right>
                                                Preparo pré-exame</v-btn>
                                        </a>
                                </ul>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                </v-container>
</template>
<script>
export default {
    name: 'exames-expand-panels',
}
</script>
<style scoped>
.title-re{
    color: #28489d;
    font-size: 24px;
  }
.title-exp-panel{
  color: rgb(94, 187, 171);
  font-size:20px;
}
li{
    color: rgb(155, 155, 155);
    margin-bottom: 8px;
}
</style>