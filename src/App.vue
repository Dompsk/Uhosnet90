<script setup>
import { useRoute } from "vue-router";
import Nav from "./components/Nav.vue";
import About from "./view/about/About.vue";
import Agenda from "./view/agenda/Agenda.vue";
import Footer from "./layout/footer/Footer.vue";
import Home from "./view/home/Home.vue";
import News from "./view/news/News.vue";
// import Speaker from "./view/speaker/Speaker.vue";
import UhosnetGroup from "./view/uhosnet_group/UhosnetGroup.vue";
import RegisProcess from "./view/regis_process/RegisProcess.vue";

const route = useRoute();
</script>

<template>
  <Nav />
  <div v-if="route.path === '/'">
    <Home />
    <About />
    <UhosnetGroup />
    <News />
    <RegisProcess />
    <Agenda />
    
  </div>
  
  <!-- Router View for other pages like registration -->
  <div v-else>
    <router-view />
  </div>
  
  <Footer />
</template>

<style scoped></style>
