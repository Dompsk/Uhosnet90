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
        <div class="w-[72px] h-[72px] bg-[#284a7e] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#284a7e]/20 transition-transform duration-300 group-hover:scale-110">
          <span class="material-symbols-outlined text-white text-[36px] select-none">
            edit_document
          </span>
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
        <div class="w-[72px] h-[72px] bg-[#284a7e] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#284a7e]/20 transition-transform duration-300 group-hover:scale-110">
          <span class="material-symbols-outlined text-white text-[36px] select-none">
            check_circle
          </span>
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
        <div class="w-[72px] h-[72px] bg-[#284a7e] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#284a7e]/20 transition-transform duration-300 group-hover:scale-110">
          <span class="material-symbols-outlined text-white text-[36px] select-none">
            qr_code_2
          </span>
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
        <div class="w-[72px] h-[72px] bg-[#284a7e] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#284a7e]/20 transition-transform duration-300 group-hover:scale-110">
          <span class="material-symbols-outlined text-white text-[36px] select-none">
            groups
          </span>
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
      <router-link to="/aboutinfo" class="px-12 py-4 bg-[#fbb03b] hover:bg-[#e09d30] text-white font-bold text-[18px] md:text-[20px] rounded-full shadow-lg shadow-[#fbb03b]/20 hover:shadow-xl hover:shadow-[#fbb03b]/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-center flex items-center gap-2">
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
