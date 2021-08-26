<template>
    <v-main>
        <v-container class="mt-12 pr-8 pl-8">
            <h1 class="title-blog">Doença hepática gordurosa não alcoólica</h1>
            <div class="sub-title">19/11/10 Escrito por Dra. CARMEM ALVES PEREIRA em Doenças</div>
            <div class="sub-title">Dra. CARMEM ALVES PEREIRA</div>
            <div class="sub-title">CRM/DF: 10453</div>
            <p class="mt-12">A doença hepática godurosa não alcoólica, também conhecida com esteatose hepática,
                 é o acúmulo de gordura no fígado que pode atingir cerca de 40% do órgão, sendo 
                 que o padrão normal é de 5%.</p>
            <p>As causas mais frequentes da doença são: obesidade, diabettes mellitus tipo II e 
                hiperlipidemia (triglicérides alto e HDL – colesterol “bom baixo). Apesar de ser
                 mais comum em obesos , pode ocorrer entre 10% a 51% dos indivíduos com peso 
                 normal.</p>
            <p>Outros fatores de risco secundários são: medicamentos (amiodarona, nifedipina, 
                tamoxifeno, cloroquina, corticosteróides e estrógenos), doença celíaca e o 
                virus da hepatite C. A grande maioria dos pacientes é assintomática. Os 
                sintomas, quando ocorrem, são inspecíficos, como desconforto na região abdominal
                 (epigastro ou hipocôndrio direito).</p>
            <p>A doença hepática gordurosa não alcoólica pode evoluir para formas graves com 
                cirrose . Entretanto não está bem definida a sua história natural e prognóstico.</p>
            
            <p class="title-exp-panel"><strong>Diagnóstico:</strong></p>
            <ol>
                <li>Exames de laboratório (sangue): os níveis das enzimas hepáticas (TGO, TGP e GGT)
                     geralmente estão aumentados.</li>
                <li>Ultrassonografia de abdome: é o exame mais utilizado por não ser invasivo e possuir
                     alta especificidade</li>
                <li>Tomografia de abdome e ressonância nuclear magnética: também podem ser utilizados,
                     mas não são mais específicos que a ultrassonografia</li>
                <li>Biópsia hepatica: a indicação deve ser individualizada e discutida com cada paciente.
                     Não é obrigatória a sua realização.</li>
            </ol>

            <p class="title-exp-panel"><strong>Tratamento:</strong></p>
            <ol>
                <li>Hábitos alimentares saudáveis e dietas equilibradas.</li>
                <li>Atividade física regular. O ideal é escolher uma atividade 
                    que lhe dê prazer para que não ocorra abandono da mesma</li>
                <li>A perda de peso deve ser gradual. Perdas muito rápidas podem acelerar 
                    a agressão ao fígado</li>
                <li>Controle da dislipidemia e do diabetes</li>
                <li>Ainda não existe uma medicação específica para tratar a doença. Podem 
                    ser usadas medicações chamadas sensibilizadores de insulina (metformina, 
                    pioglitazona e rosiglitazona). Drogas antioxidantes como vitamina E, 
                    N aceticisteína e probióticos mostram melhora apenas dos parâmetros laboratoriais.</li>
            </ol>
                
                <v-img
                    alt=""
                    class="mx-auto mt-8"
                    contain
                    src="../../assets/blog/doencadofigado.jpg"
                    transition="scale-transition"
                    width="40%"
                    />

        </v-container>
    </v-main>
</template>
<script>
export default {
    name: 'hepaticaGordurosa'
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