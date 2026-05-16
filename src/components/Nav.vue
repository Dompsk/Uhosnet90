<template>
  <header class="w-full font-sans sticky top-0 z-50 shadow-md">
    <!-- Top Bar -->
    <div
      class="bg-[#284a7e] text-white py-0.25 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-[7px] md:text-[14px]"
    >
      <div class="mb-1 md:mb-0 text-center md:text-left">
        เจ้าภาพโดย โรงพยาบาลสงขลานครินทร์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์
      </div>
      <div class="flex items-center gap-2 md:gap-4">
        <span>0-7445-5000</span>
        <span class="hidden md:inline text-gray-400">|</span>
        <span>support.hospital@medicine.psu.ac.th</span>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav
      class="bg-white py-1 px-4 md:px-10 flex justify-between items-center relative"
    >
      <!-- Logo Section -->
      <router-link to="/" class="flex items-center gap-2">
        <img
          src="@/asset/logo/uhosnetlogo.png"
          alt="Uhosnet Logo"
          class="h-14 md:h-16 w-auto object-contain mb-2"
        />
        <span
          class="text-[#284a7e] text-xl md:text-[2.5rem] font-bold tracking-tight"
          >UhosNet</span
        >
      </router-link>

      <!-- Mobile Menu Toggle -->
      <button
        @click="toggleMenu"
        class="lg:hidden p-2 text-gray-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <div
        class="hidden lg:flex items-center gap-6 xl:gap-12 text-[#1e293b] font-medium text-[18px]"
      >
        <a @click.prevent="scrollToSection('home')" :class="['nav-link', activeSection === 'home' ? 'active-nav' : '']" href="#home">หน้าหลัก</a>
        <a @click.prevent="scrollToSection('about')" :class="['nav-link', activeSection === 'about' ? 'active-nav' : '']" href="#about">เกี่ยวกับ</a>
        <a @click.prevent="scrollToSection('news')" :class="['nav-link', activeSection === 'news' ? 'active-nav' : '']" href="#news">ข่าวประชาสัมพันธ์</a>
        <a @click.prevent="scrollToSection('uhosnet_group')" :class="['nav-link', activeSection === 'uhosnet_group' ? 'active-nav' : '']" href="#uhosnet_group">กลุ่มงาน</a>
        <a @click.prevent="scrollToSection('contact')" :class="['nav-link', activeSection === 'contact' ? 'active-nav' : '']" href="#contact">ติดต่อเรา</a>
        <router-link
          to="/register"
          class="bg-[#fbb03b] hover:bg-[#e09d30] text-[#1e293b] px-6 py-2 rounded-full font-bold shadow-sm transition-all transform hover:scale-105 active:scale-95"
        >
          ลงทะเบียน
        </router-link>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl lg:hidden flex flex-col p-4 z-40"
        >
          <a @click.prevent="scrollToSection('home'); closeMenu()" href="#home" class="py-3 px-2 border-b border-gray-50 text-gray-700">หน้าหลัก</a>
          <a @click.prevent="scrollToSection('about'); closeMenu()" href="#about" class="py-3 px-2 border-b border-gray-50 text-gray-700">เกี่ยวกับ</a>
          <a @click.prevent="scrollToSection('uhosnet_group'); closeMenu()" href="#agenda" class="py-3 px-2 border-b border-gray-50 text-gray-700">กำหนดการ</a>
          <a @click.prevent="scrollToSection('news'); closeMenu()" href="#news" class="py-3 px-2 border-b border-gray-50 text-gray-700">ข่าวประชาสัมพันธ์</a>
          <a @click.prevent="scrollToSection('contact'); closeMenu()" href="#contact" class="py-3 px-2 border-b border-gray-50 text-gray-700">ติดต่อเรา</a>
          <router-link
            @click="closeMenu"
            to="/register"
            class="mt-5 bg-[#fbb03b] text-center py-5 rounded-lg font-bold text-[#1e293b]"
            >ลงทะเบียน</router-link
          >
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuOpen = ref(false);
const activeSection = ref('home');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const scrollToSection = async (id) => {
  // If not on the home page, navigate there first
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    // Wait for DOM to render
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  const el = document.getElementById(id);
  if (el) {
    const navHeight = document.querySelector('header')?.offsetHeight || 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    activeSection.value = id;
  }
};

// Highlight active section based on scroll position
const sections = ['home', 'about', 'uhosnet_group', 'news', 'contact'];
const onScroll = () => {
  const navHeight = document.querySelector('header')?.offsetHeight || 80;
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i]);
    if (el && el.getBoundingClientRect().top <= navHeight + 40) {
      activeSection.value = sections[i];
      return;
    }
  }
  activeSection.value = 'home';
};

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 8px;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #284a7e;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #284a7e;
}

.nav-link:hover::after,
.active-nav::after {
  width: 100%;
}

.active-nav {
  color: #284a7e;
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
