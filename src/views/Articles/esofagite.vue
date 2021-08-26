<template>
    <v-main>
        <v-container class="mt-12 pr-8 pl-8">
            <h1 class="title-blog">Esofagite eosinofílica</h1>
                <div class="sub-title">19/04/12 Escrito por Dra.Camila Nascimento de Freitas Diniz em Doenças</div>
                <div class="sub-title">Dra.Camila Nascimento de Freitas Diniz</div>
                <div class="sub-title">Hepatologia e Gastroenterologia CRM-DF 14413</div>
            
            <p class="mt-12">A esofagite eosinofílica é (EE) uma doença inflamatória do esôfago caracterizada pelo
                acúmulo de um tipo de célula de defesa – eosinófilo- na parede do órgão. Os 
                eosinófilos são células relacionadas com processos alérgicos em nosso organismo,
                estando, por isso, a EE associada a outros tipos de alergia principalmente 
                respiratórias, cutâneas e alimentares.</p>
            <p>A EE acomete geralmente pessoas jovens, principalmente homens, com uma prevalência variável
                nos estudos entre 0,002 a 6%. Seu sintoma mais importante é a disfagia para alimentos 
                sólidos (sensação  de parada de progressão do bolo alimentar), muitas vezes com impactação
                destes alimentos no esôfago. Cerca de 20% dos pacientes apresenta sintomas como azia, 
                dor no peito, regurgitação alimentar, o que faz da EE um diagnóstico diferencial da 
                doença do refluxo (que é bastante prevalente).</p>
            <p>Quando há suspeita clínica o paciente deve realizar endoscopia digestiva alta com a qual o médico
                poderá observar achados comuns nesta doença como a presença de anéis ou estrias longitudinais
                no esôfago. O diagnóstico definitivo se dá por meio de biópsias realizadas durante o exame.</p>
            <p>O tratamento da EE consiste na administração local de corticóides como a fluticasona ou budesonida,
                é eficaz e apresenta poucos efeitos colaterais. Recentemente vem sendo demonstrada a importância 
                da cessação do tabagismo e do manejo nutricional no acompanhamento dos portadores da EE. Eliminar 
                da dieta alimentos sabidamente alergênicos para cada paciente é de fundamental importância para o 
                uso de menores doses de medicações e manutenção da doença sob controle.</p>
            <p>Portanto, a EE é uma doença pouco prevalente, mas que tem sido cada vez mais diagnosticada nos 
                últimos 10 anos. É uma importante causa de disfagia entre indivíduos jovens, mas que conta com
             tratamento seguro e eficaz.</p>
              <div class="d-md-flex mx-auto">
                <div class="mx-auto text-center">
                <v-img
                    name="img1"
                    contain
                    src="../../assets/blog/esofagite1.jpg"
                    transition="scale-transition"
                    width="100%"
                    />
                    <label for="img1">Anéis Concêntricos</label>
                </div>
                <div class="mx-auto text-center mt-4">
                <v-img
                    name="img2"
                    contain
                    src="../../assets/blog/esofagite2.jpg"
                    transition="scale-transition"
                    width="100%"
                    />
                    <label>Estrias Longitudinais</label>
                </div>
            </div>
             <p>Bibliografia:</p>
             <ol>
                 <li>Enns R, Kazemi P, Chung W, Lee M. Eosinophilic esophagitis: Clinical features, endoscopic findings and response to treatment. Can J Gastroenterol Vol 24 No 9 September 2010</li>
                 <li>Krishna S, Kakati B, Olden K, Brown D. Treatment of Eosinophilic Esophagitis: Is Oral</li>
                 <li>Viscous Budesonide Superior to Swallowed Fluticasone Spray? Gastroenterology & Hepatology Volume 7, Issue 1 January 2011</li>
                 <li>Basilious A, Liem J. Nutritional management of Eosinophilic Gastroenteropathies: Case series from the community. Allergy, Asthma & Clinical Immunology 2011, 7:10</li>
                 <li>Jonathan Ricker, Scott McNear, Timothy Cassidy, Eric Plott, Hays Arnold,Brian Kendall and Kevin Franklin</li>
                 <li>Alexander J, Katzka.  Therapeutic Options for Eosinophilic Esophagitis. Gastroenterology & Hepatology Volume 7, Issue 1 January 2011</li>
             </ol>
        </v-container>
    </v-main>
</template>
<script>
export default {
    name: 'esofagite',
}
</script>
<style scoped>
.title-exp-panel{
  color: rgb(94, 187, 171);
  font-size:20px;
  margin-bottom: 6px;
}
li{
    margin-bottom: 8px;
}
p{
    text-align: justify;
    line-height:40px;
}
.title-blog{
    font-size: 50px;
    color:#28489d;
}
.sub-title{
    font-size: 12px;
    color: rgb(158, 158, 158);
}
</style>