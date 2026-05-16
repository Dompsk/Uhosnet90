<script setup>
import Nav from "./components/Nav.vue";
import About from "./view/about/About.vue";
import Footer from "./view/footer/Footer.vue";
import Home from "./view/home/Home.vue";
import News from "./view/news/News.vue";
import UhosnetGroup from "./view/uhosnet_group/UhosnetGroup.vue";


</script>

<template>
  <Nav />
  <Home />
  <About />
  <!-- Placeholder sections with scroll anchors -->
  <div id="agenda"></div>
  <div id="speaker"></div>
  <News />
  <UhosnetGroup />
  <Footer />
</template>

<style scoped></style>
