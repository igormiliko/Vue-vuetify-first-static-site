import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Consultas from '../views/Consultas.vue'
import Contatos from '../views/Contatos.vue'
import Convenios from '../views/Convenios.vue'
import Exames from '../views/Exames.vue'
import Home from '../views/Home.vue'
import Noticias from '../views/Home.vue'
import Servicos from '../views/Servicos.vue'
import Unidades from '../views/Unidades.vue'

//Articles
import cancerColorretal from '../views/Articles/cancerColorretal.vue'
import drge from '../views/Articles/drge.vue'
import esofagite from '../views/Articles/esofagite.vue'
import hepatiteGordurosa from '../views/Articles/hepaticaGordurosa.vue'
import hepatiteViral from '../views/Articles/hepatiteViral.vue'
import hidrogenioExpirado from '../views/Articles/hidrogenioExpirado.vue'



Vue.use(VueRouter)

const routes = [
  //Unir essas três páginas em about, porque a pro digest?, missao visao e valores,
  // e nossa historia que fazem parte de sobre a clínica
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Sobre a PróDigest | Brasília-DF'
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog | PróDigest | Brasília-DF'
    },
  },
  {
    path: '/blog/cancerColorretal',
    name: 'cancerColorretal',
    component: cancerColorretal,
    meta: {
      title: 'Câncer Colorretal | Blog | PróDigest | Brasília-DF'
    },
  },
  {
    path: '/blog/hidrogenioExpirado',
    name: 'hidrogenioExpirado',
    component: hidrogenioExpirado,
    meta: {
      title: 'Hidrogênio Expirado | Blog | PróDigest | Brasília-DF'
    },
  },
  {
    path: '/blog/drge',
    name: 'drge',
    component: drge,
    meta: {
      title: 'DRGE | Blog | PróDigest | Brasília-DF'
    },
  },
  {
    path: '/blog/esofagiteEosinofilica',
    name: 'esofagite',
    component: esofagite,
    meta: {
      title: 'Esofagite Eosinofílica | Blog | PróDigest | Brasília-DF'
    },
  },
  {
    path: '/blog/hepatiteGordurosa',
    name: 'hepatiteGordurosa',
    component: hepatiteGordurosa,
    meta: {
      title: 'Hepatite Gordurosa | Blog | PróDigest | Brasília-DF'
    },
  },
  {
    path: '/blog/hepatiteViral',
    name: 'hepatiteViral',
    component: hepatiteViral,
    meta: {
      title: 'Hepatite Viral | Blog | PróDigest | Brasília-DF'
    },
  },
 

  {
    path: '/consultas',
    name: 'Consultas',
    component: Consultas,
    meta: {
      title: 'Consultas | PróDigest | Brasília-DF'
    }
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: Contatos,
    meta: {
      title: 'Contatos | PróDigest | Brasília-DF'
    }
  },
  {
    path: '/convenios',
    name: 'Convenios',
    component: Convenios,
    meta: {
      title: 'Convenios | PróDigest | Brasília-DF'
    }
  },
  // Páginas dos exames, onde constará todos 
  // os exames, marcar exames e resultados
  {
    path: '/exames',
    name: 'Exames',
    component: Exames,
    meta: {
      title: 'Exames | PróDigest | Brasília-DF'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | PróDigest | Brasília-DF'
    }
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias,
    meta: {
      title: 'Notícias | PróDigest | Brasília-DF'
    }
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: Servicos,
    meta: {
      title: 'Serviços | PróDigest | Brasília-DF'
    }
  },
  {
    path: '/unidades',
    name: 'Unidades',
    component: Unidades,
    meta: {
      title: 'Unidades | PróDigest | Brasília-DF'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router
