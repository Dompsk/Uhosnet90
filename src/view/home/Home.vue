<template>
  <div class="home-container relative w-full min-h-screen font-sans bg-gray-50">
    <!-- Navbar Component -->
    <Navbar />

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

    <div class="flex gap-30 p-8 justify-center flex-wrap items-stretch">
      <!-- Conference Date -->
      <div
        class="bg-white rounded-[1rem] shadow-[0_2px_16px_rgba(0,0,0,0.08)] p-8 flex-1 min-w-[120px] max-w-[400px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(40,74,126,0.15)]"
      >
        <div
          class="bg-[#284a7e] rounded-[0.75rem] w-[52px] h-[52px] flex items-center justify-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[26px] h-[26px] text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <h3 class="text-[1.5rem] font-bold text-[#284a7e] mb-2">
          Conference Date
        </h3>
        <p class="text-[26px] text-[#374151] leading-[1.6]">
          24 - 26 มิถุนายน 2569
        </p>
      </div>

      <!-- Venue -->
      <div
        class="bg-white rounded-[1rem] shadow-[0_2px_16px_rgba(0,0,0,0.08)] p-1 flex-1 min-w-[120px] max-w-[400px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(40,74,126,0.15)]"
      >
        <div
          class="bg-[#284a7e] rounded-[0.75rem] w-[52px] h-[52px] flex items-center justify-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[26px] h-[26px] text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <h3 class="text-[1.5rem] font-bold text-[#284a7e] mb-2">Venue</h3>
        <p class="text-[26px] text-[#374151] leading-[1.6]">
          โรงพยาบาลสงขลานครินทร์
        </p>
        <p class="text-[0.9rem] text-[#6b7280] mt-[0.25rem] leading-[1.5]">
          15 ถ.กาญจนวณิชย์ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110
        </p>
      </div>

      <!-- Theme -->
      <div
        class="bg-white rounded-[1rem] shadow-[0_2px_16px_rgba(0,0,0,0.08)] p-8 flex-1 min-w-[120px] max-w-[400px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(40,74,126,0.15)]"
      >
        <div
          class="bg-[#284a7e] rounded-[0.75rem] w-[52px] h-[52px] flex items-center justify-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[26px] h-[26px] text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <line x1="12" y1="2" x2="12" y2="6" />
            <path
              d="M12 6a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z"
            />
            <line x1="9" y1="21" x2="15" y2="21" />
            <line x1="10" y1="18" x2="14" y2="18" />
          </svg>
        </div>
        <h3 class="text-[1.5rem] font-bold text-[#284a7e] mb-2">Theme</h3>
        <p class="text-[26px] text-[#374151] leading-[1.6]">
          Smart Hospital Network
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
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
