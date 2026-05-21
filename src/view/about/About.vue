<template>
  <section id="about" class="bg-[#f4faff] overflow-hidden">
    <div class="flex flex-col xl:flex-row justify-between items-start 
                py-10 px-5 
                sm:py-14 sm:px-8 
                md:py-16 md:px-12 
                xl:py-20 xl:px-28 
                2xl:px-40
                gap-10">

      <!-- left side -->
      <div class="w-full xl:max-w-[630px]">
        <p class="text-[#0da2b6] font-bold text-[14px] sm:text-[16px] md:text-[18px] mb-3 uppercase tracking-[0.2em]">
          ABOUT CONFERENCE
        </p>
        <h2 class="text-[#003d7e] text-[28px] sm:text-[34px] md:text-[38px] xl:text-[42px] font-bold leading-[1.25]">
          เชื่อมโยงเครือข่ายโรงพยาบาล<br>
          มหาวิทยาลัย สู่ระบบสุขภาพที่ทันสมัย
        </h2>
        <p class="text-[#4b4b4b] text-[14px] sm:text-[15px] md:text-[16px] mt-6 leading-relaxed">
          งานประชุม UHosNet จัดขึ้นเพื่อแลกเปลี่ยนประสบการณ์ด้านการบริหารโรงพยาบาล
          การพัฒนาคุณภาพบริการ เทคโนโลยีสารสนเทศทางสุขภาพ และการทำงานร่วมกันของสหวิชาชีพ
        </p>
        <p class="text-[#003d7e] text-[14px] sm:text-[15px] md:text-[16px] mt-6 leading-relaxed font-medium">
          การประชุมเครือข่ายโรงพยาบาลกลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย (UHosNet) ครั้งที่ 90<br>
          จัดโดยโรงพยาบาลสงขลานครินทร์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์<br>
          ระหว่างวันที่ <span class="font-bold">25-26 มิถุนายน 2569</span> ณ โรงแรมคริสตัล อำเภอหาดใหญ่ จังหวัดสงขลา
        </p>
      </div>

      <!-- right side -->
      <div class="flex flex-col items-center xl:items-end gap-8 w-full xl:w-auto xl:pt-10">
        <!-- Stat cards with radial glow -->
        <div class="relative w-full xl:w-auto">
          <!-- Glow background -->
          <div class="absolute inset-0 rounded-[30px] pointer-events-none scale-125"
               style="background: radial-gradient(ellipse at center, rgba(172, 212, 255, 0.85) 0%, rgba(185, 226, 255, 0) 75%); filter: blur(10px);"></div>

          <!-- Stat cards row — full width บน mobile/tablet, fixed size บน xl -->
          <div class="relative flex flex-row justify-center gap-3 sm:gap-4">
            <!-- Stat 1 -->
            <div class="bg-white flex-1 xl:flex-none xl:w-[170px] h-[100px] sm:h-[110px] xl:h-[120px] max-w-[170px]
                        rounded-2xl border border-[#c9e4f6] flex flex-col items-center justify-center 
                        transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <span class="text-[#003d7e] text-[24px] sm:text-[30px] xl:text-[36px] font-bold leading-none">31</span>
              <span class="text-[#6b7b8d] text-[11px] sm:text-[13px] xl:text-[14px] mt-2 text-center px-1">สถาบันเครือข่าย</span>
            </div>
            <!-- Stat 2 -->
            <div class="bg-white flex-1 xl:flex-none xl:w-[170px] h-[100px] sm:h-[110px] xl:h-[120px] max-w-[170px]
                        rounded-2xl border border-[#c9e4f6] flex flex-col items-center justify-center 
                        transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <span class="text-[#198768] text-[24px] sm:text-[30px] xl:text-[36px] font-bold leading-none">280+</span>
              <span class="text-[#6b7b8d] text-[11px] sm:text-[13px] xl:text-[14px] mt-2 text-center px-1">ผู้เข้าร่วมประชุม</span>
            </div>
            <!-- Stat 3 -->
            <div class="bg-white flex-1 xl:flex-none xl:w-[170px] h-[100px] sm:h-[110px] xl:h-[120px] max-w-[170px]
                        rounded-2xl border border-[#c9e4f6] flex flex-col items-center justify-center 
                        transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <span class="text-[#f8b704] text-[24px] sm:text-[30px] xl:text-[36px] font-bold leading-none">90</span>
              <span class="text-[#6b7b8d] text-[11px] sm:text-[13px] xl:text-[14px] mt-2 text-center px-1">ครั้งของการประชุม</span>
            </div>
          </div>
        </div>

        <!-- Button -->
        <router-link to="/aboutinfo"
          class="group flex h-[46px] sm:h-[50px] w-[140px] sm:w-[150px] items-center justify-center 
                 rounded-4xl border border-[#003D7E] bg-white 
                 transition-all duration-300 hover:bg-[#003D7E]">
          <span class="text-[17px] sm:text-[20px] font-extrabold text-[#003D7E] transition-colors duration-300 group-hover:text-white">
            อ่านเพิ่มเติม
          </span>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>