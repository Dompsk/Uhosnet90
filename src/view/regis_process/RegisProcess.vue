<template>
  <div class="regis-process-container w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-white flex flex-col justify-center items-center">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
      <span class="text-[18px] font-bold text-[#0da2b6] tracking-[0.25em] uppercase block mb-3">
        Registration
      </span>
      <h1 class="text-[36px]  font-bold text-[#284a7e] leading-tight mb-4 font-sans">
        ขั้นตอนการลงทะเบียน
      </h1>
      <p class="text-[16px] text-gray-500 font-medium font-sans">
        สำหรับผู้เข้าร่วมประชุม UHosNet ครั้งที่ 90
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full mx-auto mb-16">
      <!-- Step 1 -->
      <div class="step-card bg-white rounded-3xl border border-gray-150/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-8 md:py-12 md:px-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(40,74,126,0.08)] group">
        <div class="w-[72px] h-[72px] bg-[#2DC544] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#2DC544]/30 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8.67 9 12.83 20 4.17 11 4.17 22t-4.33 22.5q-4.34 11.5-13.28 20.5L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H560l240 240v117.33h-66.67V-600H520v-213.33H226.67v666.66h266.66V-80H226.67Zm286.66-400ZM761-281l-19-18 37 37-18-19Z"/></svg>
        </div>
        <h3 class="text-lg md:text-[21px] font-bold text-[#284a7e] mb-3 font-sans">
          1.กรอกข้อมูล
        </h3>
        <p class="text-[14px] md:text-[15px] text-gray-500 font-medium leading-relaxed max-w-[220px] font-sans">
          ระบุชื่อ หน่วยงาน ประเภทผู้เข้าร่วม และข้อมูลติดต่อ
        </p>
      </div>

      <!-- Step 2 -->
      <div class="step-card bg-white rounded-3xl border border-gray-150/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-8 md:py-12 md:px-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(40,74,126,0.08)] group">
        <div class="w-[72px] h-[72px] bg-[#248EFF] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#3B82F6]/30 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M422-297.33 704.67-580l-49.34-48.67L422-395.33l-118-118-48.67 48.66L422-297.33ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>
        </div>
        <h3 class="text-lg md:text-[21px] font-bold text-[#284a7e] mb-3 font-sans">
          2. ตรวจสอบข้อมูล
        </h3>
        <p class="text-[14px] md:text-[15px] text-gray-500 font-medium leading-relaxed max-w-[220px] font-sans">
          ตรวจสอบความถูกต้องของอีเมล เบอร์โทร และกลุ่มประชุม
        </p>
      </div>

      <!-- Step 3 -->
      <div class="step-card bg-white rounded-3xl border border-gray-150/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-8 md:py-12 md:px-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(40,74,126,0.08)] group">
        <div class="w-[72px] h-[72px] bg-[#5500FF] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#8B5CF6]/30 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M120-513.33V-840h326.67v326.67H120ZM186.67-580H380v-193.33H186.67V-580ZM120-120v-326.67h326.67V-120H120Zm66.67-66.67H380V-380H186.67v193.33Zm326.66-326.66V-840H840v326.67H513.33ZM580-580h193.33v-193.33H580V-580Zm178.67 460v-81.33H840V-120h-81.33ZM513.33-364.67v-82h81.34v82h-81.34Zm81.34 81.34v-81.34h82v81.34h-82Zm-81.34 82v-82h81.34v82h-81.34ZM594.67-120v-81.33h82V-120h-82Zm82-81.33v-82h82v82h-82Zm0-163.34v-82h82v82h-82Zm82 81.34v-81.34H840v81.34h-81.33Z"/></svg>
        </div>
        <h3 class="text-lg md:text-[21px] font-bold text-[#284a7e] mb-3 font-sans">
          3. รับรหัสลงทะเบียน
        </h3>
        <p class="text-[14px] md:text-[15px] text-gray-500 font-medium leading-relaxed max-w-[220px] font-sans">
          ระบบจะสร้างรหัสลงทะเบียน สำหรับใช้ยืนยันตัวตนหน้างาน
        </p>
      </div>

      <!-- Step 4 -->
      <div class="step-card bg-white rounded-3xl border border-gray-150/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-8 md:py-12 md:px-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(40,74,126,0.08)] group">
        <div class="w-[72px] h-[72px] bg-[#1962B1] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#F59E0B]/30 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M0-240v-56.33q0-40.05 42.33-65.19 42.34-25.15 111.25-25.15 12.45 0 23.93.5 11.49.5 22.49 2.27-10 18.57-15 38.11-5 19.55-5 40.79v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-21.91-4.5-41.29t-14.17-37.56q11-1.82 22.28-2.32 11.29-.5 23.06-.5 69 0 111.16 24.68Q960-337.31 960-296.33V-240H780Zm-471.67-66.67H652v-4q-3.33-31.33-52.17-52Q551-383.33 480-383.33t-119.83 20.66Q311.33-342 308.33-310v3.33ZM153.04-420q-30.04 0-51.54-21.54T80-493.33q0-30.67 21.54-52 21.54-21.34 51.79-21.34 30.67 0 52 21.34 21.34 21.33 21.34 52.29 0 30.04-21.34 51.54Q184-420 153.04-420Zm653.34 0q-30.05 0-51.55-21.54-21.5-21.54-21.5-51.79 0-30.67 21.55-52 21.54-21.34 51.79-21.34 30.66 0 52 21.34Q880-524 880-493.04q0 30.04-21.33 51.54-21.34 21.5-52.29 21.5ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.23-66.67q22.77 0 37.94-15.4 15.16-15.4 15.16-38.16 0-22.77-15.26-37.94-15.27-15.16-37.84-15.16-22.56 0-38.06 15.26-15.5 15.27-15.5 37.84 0 22.56 15.4 38.06 15.4 15.5 38.16 15.5Zm.1 240ZM480-600Z"/></svg>
        </div>
        <h3 class="text-lg md:text-[21px] font-bold text-[#284a7e] mb-3 font-sans">
          4. เข้าร่วมประชุม
        </h3>
        <p class="text-[14px] md:text-[15px] text-gray-500 font-medium leading-relaxed max-w-[220px] font-sans">
          แสดงรหัสลงทะเบียน ณ จุดลงทะเบียนของงานประชุม
        </p>
      </div>
    </div>

    <!-- Bottom Button -->
    <div class="flex justify-center animate-bounce-subtle">
      <router-link to="/register-form" class="px-12 py-4 bg-[#fbb03b] hover:bg-[#e09d30] text-white font-bold text-[18px] md:text-[20px] rounded-full shadow-lg shadow-[#fbb03b]/20 hover:shadow-xl hover:shadow-[#fbb03b]/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-center flex items-center gap-2">
        ไปยังหน้าลงทะเบียน
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Registration Process component
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes bounceSubtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-bounce-subtle {
  animation: bounceSubtle 3s ease-in-out infinite;
}

.step-card {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Stagger cards animation */
.step-card:nth-child(1) { animation-delay: 0.1s; }
.step-card:nth-child(2) { animation-delay: 0.2s; }
.step-card:nth-child(3) { animation-delay: 0.3s; }
.step-card:nth-child(4) { animation-delay: 0.4s; }
</style>
