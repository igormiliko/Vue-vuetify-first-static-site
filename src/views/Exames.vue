<template>
    <div>
        <v-main>
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
                alt="Prodigest Logo"
                contain
                src="../assets/titles/exames.svg"
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
        </v-main>
        <v-container>
            <div class="mt-6">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-img
                                v-bind="attrs"
                                v-on="on"
                                alt="Pequenos médicos"
                                contain
                                src="../assets/ilustracao/exames.svg"
                                transition="slide-x-transition"
                                class="mx-auto"
                                width="50%"/>
                            </template>
                                <span>Vetor criado por macrovector.freepik.com</span>
                            </v-tooltip>
                    </div>
        <v-card
            elevation="14"
            style="padding: 8px;"
             class="mt-12 mx-auto pr-8 pl-8 pt-8"
             width="100%">
             <v-card-title class="title-re mb-6 mx-auto text-center">Vamos marcar o seu exame?</v-card-title>
                <p class="text-justify">Realizamos exames relacionados às especialidades de Gastroenterologia, 
                    Hepatologia, Proctologia, Radiologia e Ultrassonografia. Oferecemos uma ampla variedade de
                     métodos diagnósticos necessários ao tratamento dos distúrbios e patologias do aparelho 
                     digestivo.</p>
                <p class="text-justify">Abordagem holística – Os exames são analisados por uma equipe de médicos
                     multidisciplinar, otimizando assim o diagnóstico das patologias do aparelho digestivo.</p>
                <p>A PróDigest realiza exames de Endoscopia Digestiva Alta,
                        utilizando equipamentos modernos da marca Olympus.</p>
                <p>Os exames são realizados por uma equipe de médicos 
                     gastroenterologistas, especialistas em suas áreas, otimizando
                        o diagnóstico das patologias do aparelho digestivo, gerando
                        resolutividade.</p>
                <p>Todos os exames são realizados em um mesmo local, em nossas 
                    duas unidades, localizadas na Asa Sul e Norte, propiciando 
                    fácil acesso ao paciente tanto por meio de transporte particular, 
                    quanto utilizando transporte público.</p>
                <p class="text-justify">Para melhor comodidade dos nossos pacientes, disponibilizamos 
                    agendamentos de exames em horários comerciais (segundas a sextas feiras de 07:30 hs 
                    as 18:30 hs ) e em períodos não convencionais mais flexíveis tais como sábados 
                    matutinos / vespertinos e aos domingos matutinos .</p>
                <p class="text-justify">Verifique se você possui algum dos convênios que atendemos, 
                    <router-link to="/convenios">clicando aqui.</router-link></p>
                
             <exames/>

    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn class="mt-12 mb-12" v-bind="attrs"
          v-on="on" color="success" block>Vamos marcar o seu exame?</v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="#28489d"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Agendar exames</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step
             color="rgb(94, 187, 171)"
              :complete="e1 > 1"
              step="1"
            >
              Política de agendamento
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
             color="rgb(94, 187, 171)"
              :complete="e1 > 2"
              step="2"
            >
              Dados pessoais
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
             color="rgb(94, 187, 171)"
             :complete="e1 > 3"
             step="3">
              Dados da consulta
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
             color="rgb(94, 187, 171)" step="4">
              Data e hora
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                class="mb-12 d-flex flex-column align-center p-12">
                <v-card-title class="title-re mx-auto">Política de agendamento</v-card-title>
                <v-container>
                  <div style="width: 50%;" class="mx-auto">
                    <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-img
                                v-bind="attrs"
                                v-on="on"
                                alt="Ilustração de médicos"
                                contain
                                src="../assets/ilustracao/agendamento.jpg"
                                transition="slide-x-transition"
                                width="100%"/>
                            </template>
                              <span>Designed by pch.vector / Freepik</span>
                    </v-tooltip>
                  </div>
                </v-container>
                <v-card-text class="my-auto text-justify">
                 <p>Preencha o formulário dos passos a seguir para realizar o pré-agendamento da consulta. 
                  Informamos que a data e horário escolhidos correspondem apenas a uma previsão 
                  de agendamento sujeita a modificações após contato telefônico para confirmação 
                  dentro de até 8 horas. ATENÇÃO!! Os seus dados serão enviados através do WhatsApp
                  , por meio de um link, que o(a) redirecionará para uma de nossas atendentes. Conforme
                   está atestado em nossa <a>política de dados e privacidade</a>.</p>

                <div class="d-flex align-center" fluid>
                    <v-checkbox 
                      v-model="enabled"
                      >
                    </v-checkbox>
                        <div>
                          Eu aceito e concordo com a Política de agendamento citada acima.
                        </div>                        
                      </div>

                  <p>OBS: Caso queira agendamento imediato, por favor entre em contato através de um dos nossos 
                  canais de atendimento <router-link to="/contatos">clicando aqui</router-link>. Será um prazer atende-lo(a)!</p>

                <v-btn
                right
                :disabled="!enabled"
                color="success"
                @click="e1 = 2"
              >
                Continuar
              </v-btn>

              <v-btn @click="dialog = false" text>
                Cancelar
              </v-btn>
                </v-card-text>
              </v-card>

            </v-stepper-content>
                   <validation-observer
                    ref="observer"
                    v-slot="{ invalid }"
                    >
                      <form 
                      action="script.php"
                      method="post"
                      @submit.prevent="submit">
                        <section>
                          <v-stepper-content step="2">
                            <v-card
                              class="mb-12">
                              <v-card-title class="title-re mx-auto">Dados pessoais</v-card-title>
                            
                                <validation-provider
                                  v-slot="{ errors }"
                                  name="nome"
                                  rules="required|max:25"
                                >
                                  <v-text-field
                                  
                                      v-model="form.name"
                                      :counter="25"
                                      :error-messages="errors"
                                      class="mt-6"
                                      label="Nome"
                                      hide-details="auto"
                                      required
                                  ></v-text-field>
                                </validation-provider>

                                <validation-provider
                                  v-slot="{ errors }"
                                  name="email"
                                  rules="required|email"
                                >
                                  <v-text-field
                                      v-model="form.email"
                                      :error-messages="errors"
                                      class="mt-6"
                                      label="Email"
                                      hide-details="auto"
                                      required
                                  ></v-text-field>
                                </validation-provider>

                                <validation-provider
                                  v-slot="{ errors }"
                                  name="número"
                                  :rules="{
                                    required: true,
                                    regex: '^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$'
                                  }"
                                >      
                                  <v-text-field
                                      :error-messages="errors"
                                      v-model="form.phoneNumber"
                                      class="mt-6"
                                      label="Número de telefone"
                                      hide-details="auto"
                                      required
                                  ></v-text-field>
                                </validation-provider>

                                <validation-provider
                                  v-slot="{ errors }"
                                  name="CPF"
                                  :rules="{
                                    required: true,
                                    digits: 11,}"
                                >    
                                <v-text-field
                                    :error-messages="errors"
                                    v-model="form.cpf"
                                    type="number"
                                    class="mt-6"
                                    label="CPF"
                                    hide-details="auto"
                                    required
                                ></v-text-field>
                              </validation-provider>
                            </v-card>

                            <v-btn
                              color="success"
                              @click="e1 = 3"
                            >
                              Continuar
                            </v-btn>
                            
                          </v-stepper-content>
                        </section>
                          <section>
                            <v-stepper-content step="3">
                              <v-card
                                class="mb-12">
                                <v-card-title class="title-re mx-auto">Dados da Consulta</v-card-title>
                                  <v-row align="center">
                                    <v-col
                                      class="d-flex"
                                      cols="12"
                                      sm="6"
                                    >

                                      <v-select
                                        v-model="form.convenio"
                                        ref="convenios"
                                        :rules="[v => !!v || 'Selecione um item!']"
                                        :error-messages="errors"
                                        data-vv-name="select"
                                        :items="convenios"
                                        label="Convênio"
                                        required
                                      ></v-select>

                                    </v-col>
                                    <v-col
                                      cols="12"
                                      sm="6"
                                    >

                                  
                                      <v-select
                                        v-model="form.unidade"
                                        :error-messages="errors"
                                        :items="unidades"
                                        :rules="[v => !!v || 'Selecione um item!']"
                                        label="Unidade"
                                        required
                                      ></v-select>

                                    </v-col>
                                    <v-col
                                      class="d-flex"
                                      cols="12"
                                      sm="6"
                                    >
                                    
                                      <v-select
                                          v-model="form.medico"
                                          :error-messages="errors"
                                          :items="medicos"
                                          :rules="[v => !!v || 'Selecione um item!']"
                                          label="Médico"
                                          required
                                      ></v-select>

                                    </v-col>
                                    <v-col
                                      class="d-flex"
                                      cols="12"
                                      sm="6"
                                    >
                                      <v-select
                                        v-model="form.exame"
                                        :error-messages="errors"
                                        :items="exames"
                                        :rules="[v => !!v || 'Selecione um item!']"
                                        label="Exames"
                                        required
                                      ></v-select>

                                    </v-col>
                                  </v-row>
                              </v-card>

                              <v-btn
                                color="success"
                                @click="e1 = 4"
                              >
                                Continuar
                              </v-btn>

                              <v-btn  @click="e1 = 2" text>
                                Voltar
                              </v-btn>
                            </v-stepper-content>
                          </section>
                          <section>
                            <v-stepper-content step="4">
                              <v-card
                                class="mb-12">
                                <v-card-title class="title-re mx-auto">Data e hora</v-card-title>
                                  <v-row justify="space-around">
                                    <v-col
                                      cols="12"
                                      sm="6"
                                    >
                                                
                                      <v-menu
                                        v-model="menuData"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template v-slot:activator="{ on, attrs }">
                                          <validation-provider
                                            v-slot="{ errors }"
                                            name="data"
                                            rules="required"
                                          >
                                          <v-text-field
                                            v-model="form.consultDate"
                                            :error-messages="errors"
                                            label="Data"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            required
                                          ></v-text-field>
                                        </validation-provider>
                                        </template>
                                        <v-date-picker
                                          locale="pt-br"
                                          color="#28489d"
                                          v-model="form.consultDate"
                                          @input="menuData = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>

                                    <v-col
                                      cols="12"
                                      sm="6"
                                    >
                                    <v-menu
                                      ref="menu"
                                      v-model="menuTime"
                                      :close-on-content-click="false"
                                      :nudge-right="40"
                                      :return-value.sync="time"
                                      transition="scale-transition"
                                      offset-y
                                      max-width="290px"
                                      min-width="290px"
                                    >
                                      <template v-slot:activator="{ on, attrs }">
                                        <validation-provider
                                            v-slot="{ errors }"
                                            name="data"
                                            rules="required"
                                          >
                                        <v-text-field
                                          v-model="form.consultTime"
                                          :error-messages="errors"
                                          label="Hora"
                                          prepend-icon="mdi-clock-time-four-outline"
                                          readonly
                                          v-bind="attrs"
                                          v-on="on"
                                          required
                                        ></v-text-field>
                                      </validation-provider>
                                      </template>
                                      <v-time-picker
                                        format="24hr"
                                        color="#28489d"
                                        v-if="menuTime"
                                        v-model="form.consultTime"
                                        full-width
                                        @click:minute="$refs.menu.save(time)"
                                      ></v-time-picker>
                                    </v-menu>
                                    </v-col>
                                  </v-row>

                              </v-card>

                            <v-dialog
                              transition="dialog-top-transition"
                              max-width="300"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  v-bind="attrs"
                                  v-on="on"
                                  color="success"
                                  type="submit"
                                  :disabled="invalid"
                                  @click="submit"
                                >
                                  Enviar
                                </v-btn>
                                
                              </template>
                              <template v-slot:default="dialog">
                                <v-card>
                                  <v-toolbar
                                    class="d-flex-row text-center"
                                    color="success"
                                    dark
                                  > 
                                    Pré-agendamento marcado com sucesso!
                                    <v-btn
                                        right
                                        text
                                        @click="dialog.value = false"
                                      >Close</v-btn>
                                  </v-toolbar>
                                </v-card>
                              </template>
                            </v-dialog>

                              <v-btn text
                                @click="e1 = 3"
                              >
                                Voltar
                              </v-btn>
                            </v-stepper-content>
                          </section>
                        </form>
                      </validation-observer>
                    </v-stepper-items>
                  </v-stepper>
                </v-card>
              </v-dialog>
            </v-row>

     

            </v-card>            
        </v-container>
    </div>
</template>
<script>
import exames from '../components/exames-expand-panels.vue'
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} precisa ter {length} dígitos.',
  })

  extend('required', {
    ...required,
    message: 'O(a) {_field_} não pode ficar vazio',
  })

  extend('max', {
    ...max,
    message: '{_field_} não pode ter mais que {length} caracteres',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} deve ser (XX)XXXXX-XXXX',
  })

  extend('email', {
    ...email,
    message: 'O email deve ser válido',
  })

  export default {
    name: 'Consultas',
    components: {
      ValidationProvider,
      ValidationObserver,
      exames
    },
    data: ()=> ({
        errors: '',
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        e1: 1,
        date: new Date().toISOString().substr(0, 10),
        time: null,
        menuData: false,
        menuTime: false,
        enabled: false,
        form: {
          name: null,
          phoneNumber: null,
          email: null,
          cpf: null,
          dataNascimento: null,
          unidade: null,
          particular: false,
          convenio: null,
          exame: null,
          consultDate: null,
          consultTime: null,
        },
        unidades: ['Asa norte', 'Asa sul'],
        convenios: [
                    'PARTICULAR', 'ALLIANZ (AGF)','AMIL','ASSEFAZ','BANCO CENTRAL','BRADESCO SAÚDE','BRB SAÚDE','CAIXA','CAPE SAÚDE','CASSI',
                    'CODEVASF','CONAB','ECT','ELETRONORTE','EMBRAPA','EMBRATEL','FACEB','FUNSA/HFAB','FUSEX','GAMA SAÚDE','GOLDEN CROSS',
                    'HOSPITAL NAVAL','INFRAERO','INTERMÉDICA','LIFE EMPRESARIAL','MEDIAL SAUDE','MEDISERVICE','NOTRE DAME SEGURADORA',
                    'OMINT','PETROBRAS','PLAN ASSISTE – MPT','PLAN ASSISTE – MPF','PLAN ASSISTE – MPM','PLAN ASSISTE – MPDFT',
                    'PORTO SEGURO','SAÚDE', 'SENADO FEDERAL', '(SIS)','SERPRO','STM','STF MED','STJ','STF',
                    'SUL AMÉRICA','TJDFT','TRE','TRF','TRT','TST','UNAFISCO','UNIMED CENTRAL NACIONAL','UNIMED CONFEDERAÇÃO'
                    ],
        exames: [ 'Endoscopia Digestiva Alta / Videoendoscopia Digestiva Alta', 
                  'Colonoscopia / Videocolonoscopia', 'Retossigmoidoscopia', 
                  'Manometria Esofágica', 'Impedâncio PHmetria esofagica', 
                  'PHmetria Esofágica de 24 Horas'
                ],
        medicos: [     
                  'Camila Nascimento de Freitas Diniz (CRM 14413)',
                  'Carlos Fernando Pinheiro Martins (CRM 13251) ',
                  'Cintia Bracarense Melo (CRM 18783)',
                  'Danielle Talamonte (CRM 15434)',
                  'Danilo José Munhoz da Silva ( CRM 25847)',
                  'Eduardo Jurkiv Lobo (CRM 13233)',
                  'Erilane Leite Guedes (CRM 14687)',
                  'Fernanda Coelho Ferrreira (CRM 15163)',
                  'Flávia Berford Leão dos Santos (CRM 12133)',
                  'Franciara Leticea Moraes da Cunha (CRM 18249)',
                  'Helenice Arantes de Faria (CRM 4502)',
                  'Joele Maria de Moraes Mesquita Melo Campos (CRM 136818)',
                  'Juliana Portela Fontana (CRM 18026)',
                  'Lucília Alves Teixeira Chaves (CRM 21246)',
                  'Luiz Sérgio Magalhães Braga (CRM 7440)', 
                  'Fabiana Matos Barbosa Celoni (CRM 21427)', 
                  'Maria Leopoldina Lopes Ferreira (CRM 12853)', 
                  'Mariana de Morais Lira Gouveia (CRM 18844)', 
                  'Milene Adriana Dantas Diogo Barbosa (CRM 10130)', 
                  'Neyva Marianna Bezerra Sales ( CRM 21094)', 
                  'Natascha Mourão Moreira (CRM 20259)', 
                  'Patricia Maria Barros Cavalcanti (CRM 11598)',
                  'Oswaldo de Moraes Filho (CRM 20697)',
                  'Paula Suzzani Mendonça (CRM 13755)', 
                  'Paulo Gonçalves (CRM 4153)', 
                  'Pedro Robério de Melo Nogueira Junior (CRM 15696)', 
                  'Raimunda Maristela Santos Garcia (CRM 13054)', 
                  'Reinaldo Falluh Filho (CRM 17100)', 
                  'Renata Macedo da Fonseca Feijão (CRM 9940)', 
                  'Ricardo Augusto Nahuz de Oliveira (CRM 12171)', 
                  'Soraia Vianna da Silva ( CRM 19556)', 
                  'Tessia Regina Leal Reis (CRM 15433)', 
                  'Valéria Dantas de Oliveira (CRM 17292)'
        ]
    }),
     methods: {
     submit() {
          let formattedData = this.form.consultDate.split('-').reverse().join('/')
          let text = `Olá, me chamo ${this.form.name}, gostaria de marcar uma consulta com o doutor ${this.form.medico}, na especialidade de ${this.form.especialidade}, através do convênio ${this.form.convenio}. Vocês teriam espaço para o dia ${formattedData}, no horário das ${this.form.consultTime}? Aqui estão os meus dados do formulário:\n
                      -Nome: ${this.form.name}\n
                      -CPF: ${this.form.cpf}\n
                      -Email: ${this.form.email}\n
                      -Número telefone: ${this.form.phoneNumber}\n`
          let textUri = window.encodeURIComponent(text);
          //console.log(textUri)
          this.e1= 1
          return window.open(`https://wa.me/send?phone=556132444638&text=${textUri}`);
      }   
    },
  }

</script>
<style scoped>
.title-re{
    color: #28489d;
    font-size: 24px;
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