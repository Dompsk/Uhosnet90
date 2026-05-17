<template>
  <section id="agenda" class="bg-[#F4FAFF]">

  <div class=" px-30 py-10">
    <div class="flex items-center justify-between mb-10"><div>
      <h1 class="text-[18px] font-bold text-[#02A4A9] mb-2">AGENDA</h1>
      <h1 class="text-[38px] font-bold text-[#003D7E] mb-4">กำหนดการประชุม UHosNet ครั้งที่ 90</h1>
      <p class="text-[16px] text-[#555]">วันที่ 25-26 มิถุนายน 2569 ณ ห้องปารีสแกรนด์บอลรูม ชั้น 2 โรงแรมคริสตัล อำเภอหาดใหญ่ จังหวัดสงขลา</p>
    </div>

    <a href="https://hospital.psu.ac.th/uhosnet/schedule.pdf" target="_blank" class="group self-end flex h-[40px] w-[230px] items-center justify-center rounded-full border border-[#003D7E] bg-white transition-all duration-300 hover:bg-[#003D7E]">
      <span class="text-[16px] text-[#003D7E] transition-colors duration-300 group-hover:text-white">ดาวน์โหลดกำหนดการ PDF</span>
    </a>
  </div>
    
    <!-- ================= วันที่ 24 ================= -->
    <div class="w-full bg-white rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-10">
      <div class="bg-gradient-to-r from-[#63A82A] to-[#CBDDBC] px-6 py-4 flex items-center gap-3">
        <span class="text-[24px] text-[#ffff]">🗓</span>
        <h2 class="text-[22px] font-bold text-white">วันพุธที่ 24 มิถุนายน 2569</h2>
      </div>

      <div class="grid grid-cols-[250px_1fr] px-6 py-9 items-start max-md:grid-cols-1">
        <div class="font-bold text-[#1458FF]">18.00 - 21.00 น.</div>

        <div>
          <p class="text-[16px] text-[#222]"> งานเลี้ยงต้อนรับทีมบริหารจากสถาบันต่าง ๆ ณ ร้านครัวเรือนไทย </p>
          <p class="block mt-1 text-[16px] text-[#444]">(กลุ่มผู้บริหารสถาบันต่าง ๆ)</p>
        </div>
      </div>
    </div>

    <!-- ================= วันที่ 25 ================= -->
    <div class="w-full bg-white rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] ">
      <div class="bg-gradient-to-r from-[#DBB32C] to-[#E2CB81] px-6 py-4 flex items-center gap-3">
        <span class="text-[24px] text-white">🗓</span>
        <h2 class="text-[22px] font-bold text-white">วันพฤหัสบดีที่ 25 มิถุนายน 2569</h2>
      </div>

      <div>
        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold ">08.30 - 08.45 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">ลงทะเบียน ณ ห้องปารีสแกรนด์บอลรูม ชั้น 2 </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">08.45 - 08.50 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">วีดิทัศน์แนะนำโรงพยาบาลสงขลานครินทร์ คณะแพทยศาสตร์</div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">08.50 - 09.00 น.</div>

          <div class="px-6 py-5 leading-7">
            <h3 class="font-bold text-[16px] mb-3">พิธีเปิดการประชุม</h3>
            <ul class="list-disc ml-5 text-[16px] text-[#333] space-y-1">
              <li>กล่าวเปิดงาน: ผู้ช่วยศาสตราจารย์ ดร.นิวัติ แก้วประดับ อธิการบดีมหาวิทยาลัยสงขลานครินทร์</li>
              <li>กล่าวต้อนรับ: ผู้ช่วยศาสตราจารย์นายแพทย์กิตติพงศ์ เรียบร้อย คณบดีคณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์</li>
              <li>กล่าวเปิดการประชุม: รองศาสตราจารย์นายแพทย์สุธรรม ปิ่นเจริญ รองเลขาธิการกลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">09.00 - 09.30 น.</div>

          <div class="px-6 py-5">
            <h3 class="font-bold text-[16px] mb-2"> รายงานผลการประชุม ครั้งที่ 89</h3>
            <p class="text-[16px] text-[#444]"> รองศาสตราจารย์ ดร.นายแพทย์จิรุตม์ ศรีรัตนบัลล์ คณบดีคณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย และผู้อำนวยการโรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย</p>
          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1" >
          <div class="px-6 py-5 text-[#1458FF] font-bold">09.30 - 10.30 น.</div>

          <div class="px-6 py-5">
            <h3 class="font-bold text-[18px] mb-2">From Command to Commitment: Manager as Enabler for Frontline Power </h3>
            <p class="text-[16px] text-[#444] ">
              “จากคำสั่ง สู่พลังใจ: เปลี่ยน Manager เป็น Enabler เพื่อขับเคลื่อนยุทธศาสตร์ผ่านคนหน้างาน”<br>
              ผู้บรรยาย: คุณเอกพล พงศ์สถาพร ผู้บริหารและกรรมการบริษัท GP mobility, THIP, TIPCO ฯลฯ
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">09.30 - 10.30 น.</div>

          <div class="px-6 py-5">
            <h3 class="font-bold text-[16px] mb-2">ถ่ายภาพที่ระลึกร่วมกัน 6 ชุด</h3>
            <p class="text-[16px] text-[#444]">คณะอนุกรรมการเครือข่ายโรงพยาบาลกลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย UHosNet ครั้งที่ 90</p>
          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">10.30 - 11.00 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">รับประทานอาหารว่าง (จัดเสิร์ฟในห้องประชุม)</div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1" >
          <div class="px-6 py-5 text-[#1458FF] font-bold">11.00 - 12.00 น.</div>

          <div class="px-6 py-5 ">
            <h3 class="font-bold text-[16px] mb-4">การบรรยาย</h3>

            <div class="mb-5">
              <p class="font-semibold text-[16px]">เรื่องที่ 1 (11.00 - 11.30 น.)</p>
              <p class="text-[16px] text-[#666]">
                Strategies Toward a Net Zero Hospital : Lesson from King Chulalongkorn Memorial Hospital<br>
                วิทยากร: พันเอก นายแพทย์วิริสสร วงศ์ศรีชนาลัย ผู้ช่วยผู้อำนวยการฯ ด้านบริหารกายภาพ โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย
              </p>
            </div>

            <div>
              <p class="font-semibold text-[16px]">เรื่องที่ 2 (11.30 - 12.00 น.)</p>
              <p class="text-[16px] text-[#666]">
                Measuring the Hospital Carbon Footprint : A Strategic Tool for Healthcare Executives<br>
                วิทยากร: ศาสตราจารย์ ดร.อัญชนา ประเทพ คณบดีคณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์
              </p>
            </div>

            <div class="mt-4">
              <p class="text-[16px] text-[#666]">
                ผู้ดำเนินรายการ: ผู้ช่วยศาสตราจารย์นายแพทย์กิตติศักดิ์ ศรีพงษ์ ผู้ช่วยคณบดีฝ่ายโรงพยาบาลสงขลานครินทร์
              </p>
            </div>

          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">12.00 - 13.00 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">รับประทานอาหารกลางวัน ณ ห้องคริสตัลแกรนด์ ชั้น 1</div>
        </div>
  
        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">13.00 - 14.15 น.</div>

          <div class="px-6 py-5 text-[16px] text-[#333]">
            ปาฐกถาพิเศษ : ทิศทางของโรงพยาบาลมหาวิทยาลัยในการมุ่งสู่ระบบสุขภาพแบบยั่งยืน<br>
            วิทยากร: ศาสตราจารย์ ดร.ยศชนัน วงศ์สวัสดิ์ รองนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม
          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">14.15 - 14.30 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">รับประทานอาหารว่าง ณ ห้องปารีสแกรนด์บอลรูม ชั้น 2</div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1" >
          <div class="px-6 py-5 text-[#1458FF] font-bold">14.30 - 16.30 น.</div>

          <div class="px-6 py-5">
            <h3 class="font-bold text-[16px] mb-5">ประชุมกลุ่มย่อย</h3>

            <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div class="bg-[#f7f7f7] rounded-2xl p-4">
                <h4 class="font-bold text-[16px] mb-1">1. คณะอนุกรรมการอำนวยการเครือข่าย</h4>
                <p class="text-[16px] text-[#666]">ห้องปารีส ชั้น 2</p>
              </div>

              <div class="bg-[#f7f7f7] rounded-2xl p-4">
                <h4 class="font-bold text-[16px] mb-1">2. คณะอนุกรรมการพยาบาลเครือข่าย</h4>
                <p class="text-[14px] text-[#666]">ห้องจันทร์ ชั้น 1</p>
              </div>

              <div class="bg-[#f7f7f7] rounded-2xl p-4">
                <h4 class="font-bold text-[16px] mb-1">3. คณะอนุกรรมการเภสัชกรรมเครือข่าย</h4>
                <p class="text-[16px] text-[#666]">ห้องปาล์ม ชั้น 1</p>
              </div>

              <div class="bg-[#f7f7f7] rounded-2xl p-4">
                <h4 class="font-bold text-[16x] mb-1">4. คณะอนุกรรมการพัฒนาคุณภาพเครือข่าย</h4>
                <p class="text-[16px] text-[#666]">ห้องจันทร์ ชั้น 3</p>
              </div>

              <div class="bg-[#f7f7f7] rounded-2xl p-4">
                <h4 class="font-bold text-[16px] mb-1">5. คณะอนุกรรมการพัฒนาทรัพยากรบุคคล</h4>
                <p class="text-[16px] text-[#666]">ห้องหยาดเพชร</p>
              </div>

              <div class="bg-[#f7f7f7] rounded-2xl p-4">
                <h4 class="font-bold text-[16px] mb-1">6. คณะอนุกรรมการพัฒนาระบบสารสนเทศ</h4>
                <p class="text-[16px] text-[#666]">ห้องจันทร์นภา</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">16.30 - 18.30 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">พักผ่อนตามอัธยาศัย</div>
        </div>

        <div class="grid grid-cols-[250px_1fr] max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">18.30 - 21.00 น.</div>

          <div class="px-6 py-5">
            <h3 class="font-bold text-[16px] mb-2">งานเลี้ยงรับรองและสังสรรค์ธีมงาน: COLORFUL ฟื้นฟูเมือง (สีสันเมืองหาดใหญ่)</h3>
            <p class="text-[16px] text-[#666]">ณ ห้องคริสตัลแกรนด์ ชั้น 1</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= วันที่ 26 ================= -->
    <div class="w-full bg-white rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] mt-10">

      <div class="bg-gradient-to-r from-[#19528F] to-[#71AFD8] px-6 py-4 flex items-center gap-3">
        <span class="text-[24px] text-white">🗓</span>
        <h2 class="text-[22px] font-bold text-white">วันศุกร์ที่ 26 มิถุนายน 2569</h2>
      </div>

      <div>
        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">08.15 - 08.30 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">ลงทะเบียน ณ ห้องปารีสแกรนด์บอลรูม ชั้น 2</div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">08.30 - 10.30 น.</div>

          <div class="px-6 py-5 leading-7">
            <h3 class="font-bold text-[16px] mb-4">การบรรยาย</h3>

            <div class="mb-6">
              <p class="font-semibold text-[16px] mb-2">เรื่องที่ 1 (08.30 - 09.30 น.)</p>
              <p class="text-[16px] text-[#333]">การพัฒนาระบบบริการ Palliative Care ในโรงพยาบาลมหาวิทยาลัย <br> 
              Building an Integrated Palliative Care System in Academic Hospitals: Lessons from Khun Hospital</p>
              <p class="text-[16px] text-[#666] mt-2">วิทยากร: แพทย์หญิงนิษฐา เอื้ออารีมิตร โรงพยาบาลคูน</p>
            </div>

            <div>
              <p class="font-semibold text-[16px] mb-2">เรื่องที่ 2 (09.30 - 10.30 น.)</p>
              <p class="text-[16px] text-[#333]">การดูแลแบบประคับประคองในสังคมพหุวัฒนธรรม  Palliative Care in a Multicultural Society: Caring for Buddhist and Muslim Patients in an Academic Hospital</p>
              <p class="text-[16px] text-[#666]">วิทยากร: รองศาสตราจารย์แพทย์หญิงอรพรรณ ฟูมณีโชติ โรงพยาบาลสงขลานครินทร์</p>
              <p class="text-[16px] text-[#666] mt-4">ผู้ดำเนินรายการ: ดร.นายแพทย์สกล สิงหะ ที่ปรึกษาศูนย์ชีวันตาภิบาล โรงพยาบาลสงขลานครินทร์</p>
            </div>

          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">10.00 - 10.15 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">รับประทานอาหารว่าง (จัดเสิร์ฟในห้องประชุม)</div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">10.30 - 11.45 น.</div>
          <div class="px-6 py-5 text-[16x] text-[#333] leading-7">รายงานผลการประชุมกลุ่มย่อย และอภิปรายทั่วไป 6 กลุ่มย่อย</div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">11.45 - 12.00 น.</div>
          <div class="px-6 py-5 leading-7">
            <p class="font-semibold text-[16px]">ส่งมอบเจ้าภาพ: ศาสตราจารย์นายแพทย์รังสรรค์ ภูรยานนทชัย ผู้อำนวยการโรงพยาบาลสงขลานครินทร์</p>
            <p class="font-semibold text-[16px] mt-2">ปิดการประชุม: ผู้ช่วยศาสตราจารย์นายแพทย์กิตติพงศ์ เรียบร้อย คณบดีคณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์</p>
          </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] border-b border-gray-300 max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">12.00 - 13.00 น.</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">รับประทานอาหารกลางวัน ณ ห้องคริสตัลแกรนด์ ชั้น </div>
        </div>

        <div class="grid grid-cols-[250px_1fr] max-md:grid-cols-1">
          <div class="px-6 py-5 text-[#1458FF] font-bold">13.00 น. เป็นต้นไป</div>
          <div class="px-6 py-5 text-[16px] text-[#333]">เดินทางกลับโดยสวัสดิภาพ</div>
        </div>
      </div>
    </div>

    <div class="mt-6 bg-[#FFF3CD] border border-[#FFE69C] rounded-xl px-5 py-4 flex items-center gap-3">
      <span class="text-[#C28A00] text-[24px]"> ⚠️ </span>
      <p class="text-[16px] text-[#8A6D00]">หมายเหตุ : กำหนดการอาจเปลี่ยนแปลงตามความเหมาะสม</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Agenda",
};
</script>
