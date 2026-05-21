<script setup>
import { useRoute } from "vue-router";
import Nav from "./components/Nav.vue";
import About from "./view/about/About.vue";
import Agenda from "./view/agenda/Agenda.vue";
import Footer from "./layout/footer/Footer.vue";
import Home from "./view/home/Home.vue";
import News from "./view/news/News.vue";
import Speaker from "./view/speaker/Speaker.vue";
import UhosnetGroup from "./view/uhosnet_group/UhosnetGroup.vue";
import RegisProcess from "./view/regis_process/RegisProcess.vue";
import AboutInfo from "./view/about/AboutInfo.vue";

const route = useRoute();
</script>

<template>
  <!-- nav ในทุกหน้า -->
  <Nav />

  <!-- หน้าหลัก -->
  <div v-if="route.path === '/'">
    <Home />
    <About />
    <UhosnetGroup />
    <News />
    <RegisProcess />
    <Agenda />
    <Speaker />
  </div>

  <!-- หน้ารายละเอียด About -->
  <div v-if="route.path === '/aboutinfo'">
    <AboutInfo />
  </div>

  <!-- footer ในทุกหน้า -->
  <Footer />
</template>

<style scoped></style>
