<template>
  <section id="news" class="bg-[#F9FCFF] pt-14 md:pt-20 pb-14 md:pb-20">

    <div class="flex flex-col items-center px-4 text-center">
      <h1 class="text-[#02A4A9] text-[16px] md:text-[18px] font-bold">NEWS</h1>
      <h1 class="text-[#003D7E] text-[28px] md:text-[36px] font-bold">ข่าวประชาสัมพันธ์</h1>
      <div class="w-[180px] md:w-[250px] h-[4px] bg-[#F6B73C] mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mt-10 md:mt-15 px-4 md:px-10 xl:px-20">
      <div class="w-full min-h-[210px] bg-white p-5 md:p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.05),4px_0_12px_rgba(0,0,0,0.05)] cursor-pointer rounded-2xl transition duration-300 ease-in-out hover:-translate-y-3 flex flex-col">
        <p class="text-[#003D7E] font-extrabold text-[18px] md:text-[20px] leading-relaxed break-words">เปิดลงทะเบียนเข้าร่วมการประชุม UHosNet</p>
        <p class="text-[#A1A1A1] font-medium text-[14px] md:text-[16px] mt-4 leading-relaxed break-words">ผู้สนใจสามารถลงทะเบียนผ่านระบบออนไลน์ พร้อมรับ QR Code สำหรับเข้างาน</p>
        <div class="flex items-center justify-between mt-auto pt-6 gap-4">
          <div class="bg-[#0065A8] min-w-[88px] h-8 px-4 flex items-center justify-center text-white rounded-2xl text-[14px]">ประกาศ</div>
          <div class="text-[#0052AA] font-bold text-[14px] md:text-[16px] whitespace-nowrap">อ่านเพิ่มเติม →</div>
        </div>
      </div>

      <div class="w-full min-h-[210px] bg-white p-5 md:p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.05),4px_0_12px_rgba(0,0,0,0.05)] cursor-pointer rounded-2xl transition duration-300 ease-in-out hover:-translate-y-3 flex flex-col">
        <p class="text-[#003D7E] font-extrabold text-[18px] md:text-[20px] leading-relaxed break-words">ดาวน์โหลดเอกสารประกอบการประชุม</p>
        <p class="text-[#A1A1A1] font-medium text-[14px] md:text-[16px] mt-4 leading-relaxed break-words">รวมกำหนดการ แบบฟอร์ม หนังสือเชิญ และเอกสารประกอบกลุ่มงานต่างๆ</p>
        <div class="flex items-center justify-between mt-auto pt-6 gap-4">
          <div class="bg-[#82B558] min-w-[88px] h-8 px-4 flex items-center justify-center text-white rounded-2xl text-[14px]">เอกสาร</div>
          <div class="text-[#0052AA] font-bold text-[14px] md:text-[16px] whitespace-nowrap">อ่านเพิ่มเติม →</div>
        </div>
      </div>

      <div class="w-full min-h-[210px] bg-white p-5 md:p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.05),4px_0_12px_rgba(0,0,0,0.05)] cursor-pointer rounded-2xl transition duration-300 ease-in-out hover:-translate-y-3 flex flex-col">
        <p class="text-[#003D7E] font-extrabold text-[18px] md:text-[20px] leading-relaxed break-words">ข้อมูลการเดินทางและที่พัก</p>
        <p class="text-[#A1A1A1] font-medium text-[14px] md:text-[16px] mt-4 leading-relaxed break-words">แนะนำเส้นทางมายังโรงพยาบาลสงขลานครินทร์ และโรงแรมใกล้เคียง</p>
        <div class="flex items-center justify-between mt-auto pt-6 gap-4">
          <div class="bg-[#E1AD01] min-w-[88px] h-8 px-4 flex items-center justify-center text-white rounded-2xl text-[14px]">สถานที่</div>
          <div  class="text-[#0052AA] font-bold text-[14px] md:text-[16px] whitespace-nowrap"> อ่านเพิ่มเติม →</div>
        </div>
      </div>
    </div>

    <!-- button -->
    <div class="grid place-items-center mt-10 md:mt-15 px-4">
      <a href="#" class="group flex h-[50px] w-full max-w-[300px] items-center justify-center rounded-4xl border border-[#003D7E] bg-white transition-all duration-300 hover:bg-[#003D7E]">
        <span class="text-[18px] md:text-[20px] font-extrabold text-[#003D7E] transition-colors duration-300 group-hover:text-white">ดูทั้งหมด</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped></style>
