<template>
 
    <section id="news" class="mt-5 mb-20 bg-[#F9FCFF] pb-10 ">
        <div class="flex flex-col items-center">
            <h1 class="text-[#02A4A9] text-[18px] font-bold mt-25">NEWS</h1>
            <h1 class="text-[#003D7E] text-[36px] font-bold">ข่าวประชาสัมพันธ์</h1>
            <div class="w-[250px] h-[4px] bg-[#F6B73C] mx-auto"></div>
        </div>

        <div class="grid grid-cols-3 justify-items-center mt-15 mx-25">

            <div class="w-[500px] h-[210px] bg-white p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.05),4px_0_12px_rgba(0,0,0,0.05)] cursor-pointer rounded-2xl transition duration-300 ease-in-out hover:-translate-y-3 flex flex-col">
                <p class="text-[#003D7E] font-extrabold text-[20px]">เปิดลงทะเบียนเข้าร่วมการประชุม UHosNet</p>
                <p class="text-[#A1A1A1] font-medium text-[16px] mt-4">ผู้สนใจสามารถลงทะเบียนผ่านระบบออนไลน์ พร้อมรับ QR Code สำหรับเข้างาน</p>
                <div class="flex items-center justify-between mt-auto">
                    <div class="bg-[#0065A8] w-22 h-8 flex items-center justify-center text-white rounded-2xl">ประกาศ</div>
                    <div class="text-[#0052AA] font-bold">อ่านเพิ่มเติม →</div>
                </div>
            </div>

            <div class="w-[500px] h-[210px] bg-white p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.05),4px_0_12px_rgba(0,0,0,0.05)] cursor-pointer rounded-2xl transition duration-300 ease-in-out hover:-translate-y-3 flex flex-col">
                <p class="text-[#003D7E] font-extrabold text-[20px]">ดาวน์โหลดเอกสารประกอบการประชุม</p>
                <p class="text-[#A1A1A1] font-medium text-[16px] mt-4">รวมกำหนดการ แบบฟอร์ม หนังสือเชิญ และเอกสารประกอบกลุ่มงานต่างๆ</p>
                <div class="flex items-center justify-between mt-auto">
                    <div class="bg-[#82B558] w-22 h-8 flex items-center justify-center text-white rounded-2xl">เอกสาร</div>
                    <div class="text-[#0052AA] font-bold">อ่านเพิ่มเติม →</div>
                </div>
            </div>

            <div class="w-[500px] h-[210px] bg-white p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.05),4px_0_12px_rgba(0,0,0,0.05)] cursor-pointer rounded-2xl transition duration-300 ease-in-out hover:-translate-y-3 flex flex-col">
                <p class="text-[#003D7E] font-extrabold text-[20px]">ข้อมูลการเดินทางและที่พัก</p>
                <p class="text-[#A1A1A1] font-medium text-[16px] mt-4">แนะนำเส้นทางมายังโรงพยาบาลสงขลานครินทร์ และโรงแรมใกล้เคียง</p>
                <div class="flex items-center justify-between mt-auto">
                    <div class="bg-[#E1AD01] w-22 h-8 flex items-center justify-center text-white rounded-2xl">สถานที่</div>
                    <div class="text-[#0052AA] font-bold">อ่านเพิ่มเติม →</div>
                </div>
            </div>
            
        </div>

        <div class="grid place-items-center mt-15 mx-25">
            <a href="#" class="group flex h-[50px] w-[300px] items-center justify-center rounded-4xl border border-[#003D7E] bg-white transition-all duration-300 hover:bg-[#003D7E]">
                <span class="text-[20px] font-extrabold text-[#003D7E] transition-colors duration-300 group-hover:text-white">ดูทั้งหมด</span>
            </a>
        </div>

    </section>

</template>

<script>
export default {
    name: "News"
}
</script>

<style>

</style>
