<template lang="">
    <transition name="slide-fade">
		<div class="preLoader align-center">
            <div class="mx-auto logo">
                <v-img
                src="@/../public/Fotos/logo-prodigest/logo.svg"
                width="100%"/>
            </div>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'preloader',
}
</script>
<style scoped>
.preLoader{
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 9999;
}
	.logo{
		width: 10rem;
		height: 10rem;
		animation: circle 2s linear 3;
    }
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@keyframes softFade {
	0% {
		transform: scale(100%) ;
	}
	50% {
		transform: scale(50%) ;
	}
	100% {
		transform: scale(0%) ;
	}
}
@keyframes circle {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.3;
		transform: scale(110%)
	}
	100% {
		opacity: 1;	
	}
}
</style>