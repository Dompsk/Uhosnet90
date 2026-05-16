<template>
  <section id="about">
    <!-- container -->
    <div class="flex flex-row justify-between items-center bg-[#f4faff] py-15 px-33">
        <!-- left site -->
        <div class="">
            <p class="text-[#008e00] font-bold text-[30px]">ABOUT CONFERENCE</p>
            <p class="text-[#003d7e] text-[50px] font-bold">เชื่อมโยงเครือข่ายโรงพยาบาลมหาวิทยาลัย<br></p>
            <p class="text-[#003d7e] text-[50px] font-bold">สู่ระบบสุขภาพที่ทันสมัย</p>
            <p class="text-[#4b4b4b] font-bold">งานประชุม UHosNetจัดขึ้นเพื่อแลกเปลี่ยนประสบการณ์ด้านการบริหารโรงพยาบาล การพัฒนาคุณภาพบริการ<br>เทคโนโลยีสารสนเทศทางสุขภาพ และการทำงานร่วมกันของสหวิชาชีพ</p>
        </div>

        <!-- right site -->
        <div class="grid grid-cols-2 grid-rows-2 gap-10">
            <!-- content container -->
            <div class="bg-white w-[350px] h-[200px] shadow-2xl rounded-[15px] p-4">
                <div class="logo bg-[#ffc8c8] w-[50px] h-[50px] rounded-[15px] flex justify-center items-center">
                    <!-- icon -->
                     <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T720-120H160Zm0-80h560v-560H160v560Zm80-80h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240ZM160-760v560-560Z"/></svg>
                </div>
                <h1 class="font-black text-[40px]">Digital Health</h1>
                <p class="text-[18px]">แลกเปลี่ยนแนวทางพัฒนาระบบ HIS, Data Platform และ AI เพื่อบริการผู้ป่วย</p>
            </div>

            <div class="bg-white w-[350px] h-[200px] shadow-2xl rounded-[15px] p-4">
                <div class="logo bg-[#b7e0b5] w-[50px] h-[50px] rounded-[15px] flex justify-center items-center">
                    <!-- icon -->
                     <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Zm-80 160h160q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520v-40q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560v40q-17 0-28.5 11.5T360-480v120q0 17 11.5 28.5T400-320Zm40-200v-40q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560v40h-80Z"/></svg>
                </div>
                <h1 class="font-black text-[40px]">Quality & Safety</h1>
                <p class="text-[18px]">ยกระดับคุณภาพ ความปลอดภัย และมาตรฐานบริการของโรงพยาบาลมหาวิทยาลัย</p>
            </div>

            <div class="bg-white w-[350px] h-[200px] shadow-2xl rounded-[15px] p-4">
                <div class="logo bg-[#b5e0ff] w-[50px] h-[50px] rounded-[15px] flex justify-center items-center">
                    <!-- icon -->
                     <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M345-120q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l270-270q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73L504-186q-32 32-73 49t-86 17Zm270.67-272 111.66-110.67q22-22 34-51.33t12-61q0-66-46.16-112.17Q681-773.33 615-773.33q-31.67 0-61 12t-51.33 34L392-615.67 615.67-392ZM345-186.67q31 0 60.67-12 29.66-12 51.66-34L568-344.33 344.33-568 232.67-457.33q-22 22-34 51.33t-12 61q0 66 46.16 112.17Q279-186.67 345-186.67Z"/></svg>
                </div>
                <h1 class="font-black text-[40px]">RDU & Pharmacy</h1>
                <p class="text-[18px]">สนับสนุนการใช้ยาอย่างสมเหตุผล และระบบเภสัชกรรมที่ปลอดภัย</p>
            </div>

            <div class="bg-white w-[350px] h-[200px] shadow-2xl rounded-[15px] p-4">
                <div class="logo bg-[#ffe0a4] w-[50px] h-[50px] rounded-[15px] flex justify-center items-center">
                    <!-- icon -->
                     <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M198-278q-57-57-87.5-129.5T80-560q0-80 30.5-152.5T198-842l39.33 39.33q-48.33 49-74.83 111.5T136-560q0 68.67 26.5 131.17 26.5 62.5 74.83 111.5L198-278Zm92-92q-38-38-58-87t-20-103q0-54 20-103t58-87l39.33 39.33q-29.66 30.34-45.5 69.17Q268-602.67 268-560t15.83 81.17q15.84 38.5 45.5 69.5L290-370Zm156.67 250v-352Q419-482 402.5-506.33 386-530.67 386-560q0-39.33 27.33-66.67Q440.67-654 480-654t66.67 27.33Q574-599.33 574-560q0 29.33-16.5 53.67Q541-482 513.33-472v352h-66.66ZM670-370l-39.33-39.33q29.66-31 45.5-69.5Q692-517.33 692-560t-15.83-81.17q-15.84-38.5-45.5-69.5L670-750q38 38 58 87t20 103q0 54-20 103t-58 87Zm92 92-39.33-39.33q48.33-49 74.83-111.5T824-560q0-68.67-26.5-131.17-26.5-62.5-74.83-111.5L762-842q57 57 87.5 129.5T880-560q0 80-30.5 152.5T762-278Z"/></svg>
                </div>
                <h1 class="font-black text-[40px]">Nursing Network</h1>
                <p class="text-[18px]">เสริมพลังเครือข่ายพยาบาลและสหวิชาชีพเพื่อการดูแลผู้ป่วยแบบองค์รวม</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name : 'About',
}
</script>