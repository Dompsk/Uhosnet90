<template>
  <div class="home-container relative w-full min-h-screen font-sans bg-gray-50">
    <!-- Navbar Component -->

    <!-- Banner Section -->
    <section
      class="relative w-full h-[600px] md:h-[700px] lg:h-[550px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${BannerImg})` }"
    >
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 z-0"
        style="
          background: linear-gradient(
            90deg,
            rgba(0, 66, 136, 0.9) 45%,
            rgba(86, 117, 2, 0.3) 100%
          );
        "
      ></div>

      <!-- Content -->
      <div
        class="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32"
      >
        <h1
          class="text-white text-[7rem] md:text-5xl lg:text-[5rem] font-bold leading-tight text-shadow-md"
        >
          การประชุมเครือข่ายโรงพยาบาล<br />
          กลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย
        </h1>
        <p
          class="text-white text-[10rem] md:text-lg lg:text-[32px] font-light max-w-6xl mt-[-10px] mb-10 text-shadow-sm opacity-70"
        >
          เวทีแลกเปลี่ยนองค์ความรู้ นวัตกรรม และความร่วมมือด้านบริการสุขภาพ
          ระหว่างโรงพยาบาลมหาวิทยาลัยทั่วประเทศ
        </p>

        <div class="flex flex-wrap gap-10 mt-4">
          <router-link
            to="/register"
            class="bg-[#fbb03b] hover:bg-[#e09d30] text-[#1e293b] text-[1.5rem] px-8 py-3 rounded-full font-bold shadow-md transition-all transform hover:scale-105 active:scale-95 text-center min-w-[160px]"
          >
            ลงทะเบียน
          </router-link>
          <router-link
            to="/about"
            class="bg-transparent border border-white text-white text-[1.5rem] hover:bg-white/10 px-8 py-3 rounded-full font-medium shadow-sm transition-all text-center min-w-[160px]"
          >
            ดูรายละเอียด
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from "@/components/Nav.vue";
import BannerImg from "@/asset/banner/banner.jpg";
</script>

<style scoped>
.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}
.text-shadow-sm {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
