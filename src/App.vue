<script setup>
import Nav from "./components/Nav.vue";
import About from "./view/about/About.vue";
import Agenda from "./view/agenda/Agenda.vue";
import Footer from "./view/footer/Footer.vue";
import Home from "./view/home/Home.vue";
import News from "./view/news/News.vue";
// import Speaker from "./view/speaker/Speaker.vue";
import UhosnetGroup from "./view/uhosnet_group/UhosnetGroup.vue";


</script>

<template>
  <Nav />
  <Home />
  <About />
  <!-- Placeholder sections with scroll anchors (Removed to fix duplicate IDs) -->
  <News />
  <Agenda />
  <!-- <Speaker />  -->
  <UhosnetGroup />
  <Footer />
</template>

<style scoped></style>
