<template>
  <div id="home" class="home-container relative w-full font-sans bg-gray-50">
    <!-- Banner Section -->
    <section
      class="relative w-full h-[500px] md:h-[700px] lg:h-[680px] bg-cover bg-center"
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
        class="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 pb-52"
      >
        <h1
          class="text-white text-[3.5rem] font-bold leading-tight text-shadow-md"
        >
          การประชุมเครือข่ายโรงพยาบาล<br />
          กลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย
        </h1>
        <p
          class="text-white text-[20px] font-light max-w-6xl mt-[5px] mb-15 text-shadow-sm opacity-70"
        >
          เวทีแลกเปลี่ยนองค์ความรู้ นวัตกรรม และความร่วมมือด้านบริการสุขภาพ
          ระหว่างโรงพยาบาลมหาวิทยาลัยทั่วประเทศ
        </p>

        <div class="flex flex-wrap gap-10 mt-4">
          <a
            href="#register"
            @click.prevent="scrollToSection('register')"
            class="bg-[#fbb03b] hover:bg-[#e09d30] text-[#1e293b] text-[20px] px-5 py-2 w-fit rounded-full font-bold shadow-md transition-all transform hover:scale-105 active:scale-95 text-center cursor-pointer"
          >
            ลงทะเบียน
          </a>
          <a
            href="#about"
            @click.prevent="scrollToSection('about')"
            class="bg-transparent border border-white text-white text-[20px] hover:bg-white/10 px-5 py-2 w-fit rounded-full font-medium shadow-sm transition-all text-center cursor-pointer"
          >
            ดูรายละเอียด
          </a>
        </div>
      </div>

      <!-- Info Cards - positioned at bottom of banner -->
      <div
        class="absolute bottom-35 left-0 right-0 z-20 flex gap-14 px-8 lg:px-24 xl:px-32 justify-center flex-wrap items-stretch translate-y-1/2"
      >
        <!-- Conference Date -->
        <div
          class="info-card rounded-[20px] p-6 flex-1 min-w-[260px] max-w-[330px] h-[162px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          style="
            background: linear-gradient(
              135deg,
              rgba(91, 128, 171, 0.42),
              rgba(194, 197, 173, 0.42)
            );
            box-shadow: 0 8px 32px rgba(40, 74, 126, 0.25);
          "
        >
          <div
            class="bg-white backdrop-blur-sm rounded-[0.75rem] w-[50px] h-[55px] flex items-center justify-center mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[34px] h-[34px] text-[#0052AA] mb-[3px]"
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
          <h3 class="text-[1.3rem] font-bold text-white mb-1 text-shadow-md">
            Conference Date
          </h3>
          <p class="text-[1rem] text-white/80 leading-[1.6]">
            24 - 26 มิถุนายน 2569
          </p>
        </div>

        <!-- Venue -->
        <div
          class="info-card rounded-[20px] p-6 flex-1 min-w-[260px] max-w-[360px] h-[162px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          style="
            background: linear-gradient(
              135deg,
              rgba(91, 128, 171, 0.42),
              rgba(194, 197, 173, 0.42)
            );
            box-shadow: 0 8px 32px rgba(40, 74, 126, 0.25);
          "
        >
          <div
            class="bg-white backdrop-blur-sm rounded-[0.75rem] w-[50px] h-[60px] flex items-center justify-center mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="38px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#004894"
            >
              <path
                d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
              />
            </svg>
          </div>
          <h3 class="text-[1.3rem] font-bold text-white mb-1 text-shadow-md">
            Venue
          </h3>
          <p class="text-[1rem] text-white/80 leading-[1.5]">
            ห้องปารีสแกรนด์บอลรูม
          </p>
          <p class="text-[0.8rem] text-white/60 mt-0.5 leading-[1.4]">
            ชั้น 2 โรงแรมคริสตัล อำเภอหาดใหญ่ จังหวัดสงขลา
          </p>
        </div>

        <!-- Theme -->
        <div
          class="info-card rounded-[20px] p-6 flex-1 min-w-[260px] max-w-[330px] h-[162px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          style="
            background: linear-gradient(
              135deg,
              rgba(91, 128, 171, 0.42),
              rgba(194, 197, 173, 0.42)
            );
            box-shadow: 0 8px 32px rgba(40, 74, 126, 0.25);
          "
        >
          <div
            class="bg-white backdrop-blur-sm rounded-[0.75rem] w-[50px] h-[50px] flex items-center justify-center mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[34px] h-[34px] text-[#004894]"
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
          <h3 class="text-[1.3rem] font-bold text-white mb-1 text-shadow-md">
            Theme
          </h3>
          <p class="text-[1.05rem] text-white/80 leading-[1.6]">
            Smart Hospital Network
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer for the overlapping cards -->
    <div class="h-24"></div>
  </div>
</template>

<script setup>
import BannerImg from "@/asset/banner/banner.jpg";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = document.querySelector("header")?.offsetHeight || 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
</script>

<style scoped>
.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}
.text-shadow-sm {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
