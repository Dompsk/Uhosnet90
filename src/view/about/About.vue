<template>
  <section id="about" class="bg-[#f4faff]">
    <!-- container -->
    <div class="flex flex-row justify-between items-start py-20 px-40">
        <!-- left site -->
        <div class="max-w-[620px]">
            <p class="text-[#0da2b6] font-bold text-[18px] mb-3 uppercase tracking-[0.2em]">ABOUT CONFERENCE</p>
            <h2 class="text-[#003d7e] text-[42px] font-bold leading-[1.25]">
                เชื่อมโยงเครือข่ายโรงพยาบาล<br>
                มหาวิทยาลัย สู่ระบบสุขภาพที่ทันสมัย
            </h2>
            <p class="text-[#4b4b4b] text-[16px] mt-6 leading-relaxed">
                งานประชุม UHosNet จัดขึ้นเพื่อแลกเปลี่ยนประสบการณ์ด้านการบริหารโรงพยาบาล<br>
                การพัฒนาคุณภาพบริการ เทคโนโลยี สารสนเทศทางสุขภาพ และการทำงานร่วมกันของสหวิชาชีพ
            </p>
            <p class="text-[#003d7e] text-[16px] mt-6 leading-relaxed font-medium">
                การประชุมเครือข่ายโรงพยาบาลกลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย (UHosNet) ครั้งที่ 90<br>
                จัดโดยโรงพยาบาลสงขลานครินทร์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์<br>
                ระหว่างวันที่ <span class="font-bold">25-26 มิถุนายน 2569</span> ณ โรงแรมคริสตัล อำเภอหาดใหญ่ จังหวัดสงขลา
            </p>
        </div>

        <!-- right site -->
        <div class="flex flex-col items-end gap-8 pt-25">
            <!-- Stat cards container with radial background glow -->
            <div class="relative">
                <!-- Radial glow background from Figma settings -->
                <div class="absolute inset-0 rounded-[30px] pointer-events-none scale-125"
                     style="background: radial-gradient(ellipse at center, rgba(172, 212, 255, 0.85) 0%, rgba(185, 226, 255, 0) 75%); filter: blur(10px);"></div>

                <!-- Stat cards row -->
                <div class="relative flex flex-row gap-5">
                    <!-- Stat 1 -->
                    <div class="bg-white w-[170px] h-[120px] rounded-2xl border border-[#c9e4f6] flex flex-col items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <span class="text-[#003d7e] text-[36px] font-bold leading-none">31</span>
                        <span class="text-[#6b7b8d] text-[14px] mt-2">สถาบันเครือข่าย</span>
                    </div>
                    <!-- Stat 2 -->
                    <div class="bg-white w-[170px] h-[120px] rounded-2xl border border-[#c9e4f6] flex flex-col items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <span class="text-[#198768] text-[36px] font-bold leading-none">280+</span>
                        <span class="text-[#6b7b8d] text-[14px] mt-2">ผู้เข้าร่วมประชุม</span>
                    </div>
                    <!-- Stat 3 -->
                    <div class="bg-white w-[170px] h-[120px] rounded-2xl border border-[#c9e4f6] flex flex-col items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <span class="text-[#f8b704] text-[36px] font-bold leading-none">90</span>
                        <span class="text-[#6b7b8d] text-[14px] mt-2">ครั้งของการประชุม</span>
                    </div>
                </div>
            </div>

            <!-- Button -->
            <router-link to="/#about" class="group flex h-[50px] w-[150px] items-center justify-center rounded-4xl border border-[#003D7E] bg-white transition-all duration-300 hover:bg-[#003D7E] mx-auto">
                <span class="text-[20px] font-extrabold text-[#003D7E] transition-colors duration-300 group-hover:text-white">อ่านเพิ่มเติม</span>
            </router-link>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name : 'About',
}
</script>