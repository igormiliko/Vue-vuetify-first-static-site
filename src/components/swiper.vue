<template lang="">
    <div>
<splide :options="options" >
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/allianz.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/amil.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/assefaz.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/bcb.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/bradesco.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/brb.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/cape.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/cassi.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/codevasf.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/correios.jpeg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/eletronorte.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/embrapa.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/embratel.svg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/FACEB.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/funsaHfab.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/fusex.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/gama-saude.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/goldencross.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/hospitalNaval.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/Infraero.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/intermédica.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/Life-Empresarial-1.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/Logo-Conab-Vertical_1.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/logo-tjdft.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/medial.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/mediservice.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/omint.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/petrobras.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/plan-assiste.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/portoSeguro.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/saúdeCaixa.svg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/serpro.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/stf-med.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/stj-logo.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/sulamerica.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/treDF.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/trf.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/tst.jpg">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/unafisco.png">
    </splide-slide>
    <splide-slide>
      <img class="miniLogo" src="../assets/convenios/unimedcentral.png">
    </splide-slide>
  </splide>
    </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


export default {
  name: 'swiper',
  components: {
    Splide,
    SplideSlide,
  },
   data() {
      return {
        options: {
          type: 'loop',
          focus: 'center',
          rewind : true,
          width  : '100%',
          padding : 1,
          gap: '4em',
          speed: 250,
          autoplay: true,
          pagination: false,
          perPage: 4,
        },
      };
    },
}
</script>
<style scope>
#back{
    width: 100%;
    display: block;
}
#container{
    align-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.miniLogo{
        width: 85px;
    }
</style>