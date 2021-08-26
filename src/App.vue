<template>
  <div id="app">
    <v-app>
      <preLoader  v-if="show"/>
      <v-app-bar
        app
        color="#28489d"
        dark>
        <v-btn
          class="-ma-1 mt-10 rounded-circle align-center"
          color="#ffffff"
         @click.stop="drawer = !drawer"
          width="68"
          height="68">
            <v-img
              alt="Prodigest Logo"
              contain
              src="@/../public/Fotos/logo-prodigest/logo.svg"
              transition="scale-transition"
              width="60"/>
        </v-btn>
            <v-spacer></v-spacer>      
          <v-toolbar-items class="hidden-sm-and-down">
             <div class="d-flex align-center">
                <router-link to="/blog">
                <v-btn text>
                Blog
                </v-btn>
                </router-link>
              </div>
            <v-divider vertical></v-divider>


            <div class="d-flex align-center">
                <router-link to="/exames">
                <v-btn text>
                Exames
                </v-btn>
                </router-link>
              </div>
            <v-divider vertical></v-divider>

            
              <div class="d-flex align-center">
                <router-link to="/consultas">
                <v-btn text>
                Consultas
                </v-btn>
                </router-link>
              </div>
            
            <v-divider vertical></v-divider>

            <div class="d-flex align-center">
            <router-link to="/unidades">
            <v-btn icon>
                <v-icon color="red">mdi-map-marker</v-icon>
            </v-btn>
            </router-link>
            </div>

          <v-divider vertical></v-divider>

          <div class="d-flex align-center">
            <router-link to="/contatos">
              <v-btn icon>
                <v-icon color="success">mdi-phone</v-icon>
              </v-btn>
            </router-link>
          </div>
          <v-divider vertical></v-divider>

            <v-btn icon>
              <v-icon color="rgb(94, 187, 171)">mdi-share-variant-outline</v-icon>
            </v-btn>
          <v-divider vertical></v-divider>

        </v-toolbar-items>
          <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
     </v-app-bar>

      <router-view/>


      <v-sheet
        height="100%"
        class="overflow-hidden"
        style="position: relative;">

      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary       
        color="#7898ed"
      >
      <v-sheet
        color="#ffffff"
        height="63">
        <v-list-item >
          <v-list-item-avatar>
            <v-img src="@/../public/Fotos/logo-prodigest/logo.svg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Pró Digest</v-list-item-title>
          </v-list-item-content>
          

            <v-icon 
              @click.stop="drawer = !drawer"
              class="ml-7">mdi-close-circle-outline</v-icon>

        </v-list-item> 
      </v-sheet>
        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon color="#28489d">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link style="color: white;" :to= item.route>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-navigation-drawer>
    </v-sheet>
              <v-fab-transition>
                <a style="color: white;" href="https://wa.me/send?phone=556132444638&text=Boa%20tarde!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Pr%C3%B3Digest" target="_blank">
                  <v-btn
                    color="success"
                    fab
                    dark
                    large
                    fixed
                    bottom
                    right
                  >
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-btn>
                </a>
              </v-fab-transition>
               <div class="text-center">
    <v-dialog
      persistent
      v-model="dialog"
      width="500"
    >    
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text class="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-container class="d-flex align-center" fluid>
            <v-checkbox 
              v-model="enabled"
              >
            </v-checkbox>
                <div>
                  Eu li, aceito e concordo com a
                    <a
                      target="_blank"
                      href="https://vuetifyjs.com"
                      @click.stop
                    >
                      Política de privacidade
                    </a>
                    e a 
                    <a
                      target="_blank"
                      href="https://vuetifyjs.com"
                      @click.stop
                    >
                      Política de dados
                    </a>
                </div>
          </v-container>

          <v-btn
            color="success"
            text
            :disabled="!enabled"
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    <v-footer
        dark
        padless
        class="mt-12"
      >
        <v-card
          flat
          tile
          width="100%"
          color="#28489d"
          class="lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

        <a style="color: white;" href="https://wa.me/send?phone=556132444638&text=Boa%20tarde!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Pr%C3%B3Digest" target="_blank">
         <p>Fale com a PróDigest</p>
        </a>

         <p>Unidade Asa Norte (61) 3443-2448</p>

         <p>Unidade Asa Sul (61) 3244-4638</p>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>PródDigest powered by ®PetrowaDigital and ®Consult with Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
      
    </v-app>
  </div>
</template>

<script>
import preLoader from './components/preLoader.vue'
export default {
  name: 'app',
  components: {
    preLoader
  },
  data () {
      return {
        drawer: null,
        show: true,
        items: [
          { title: 'Home', icon: 'mdi-home', route:'/' },
          { title: 'About', icon: 'mdi-book-open-blank-variant', route:'/about' },
          { title: 'Blog', icon: 'mdi-newspaper-variant-multiple', route:'/blog' },
          { title: 'Consultas', icon: 'mdi-human', route:'/consultas' },
          { title: 'Contatos', icon: 'mdi-phone', route:'/contatos' },
          { title: 'Convênios', icon: 'mdi-hospital-box-outline', route:'/convenios' },
          { title: 'Exames', icon: 'mdi-clipboard-check-multiple-outline', route:'/exames' },
          { title: 'Serviços', icon: 'mdi-doctor', route:'/servicos' },
          { title: 'Unidades', icon: 'mdi-map-marker', route:'/unidades' },
        ],
         icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
       dialog: true,
       enabled: false,
      }
    },
     watch: {
      '$route' (to) {
        document.title = to.meta.title || 'Pró Digest'
      }
    },
    mounted(){
      if(this.show) this.showToggle()
    },
    methods: {
      showToggle(){
        setTimeout(() => {
          this.show = false
        },7000)
      },
    }
}
</script>

<style lang="scss">
  a:link 
{ 
 text-decoration:none; 
} 
/*p{
    text-align: justify;
    line-height:35px;
}*/
</style>
