<template>
  <section id="news" class="bg-[#F9FCFF] pt-14 md:pt-20 pb-14 md:pb-20">
    <div class="flex flex-col items-center px-4 text-center">
      <h1 class="text-[#02A4A9] text-[16px] md:text-[18px] font-bold">NEWS</h1>
      <h1 class="text-[#003D7E] text-[28px] md:text-[36px] font-bold">
        ข่าวประชาสัมพันธ์
      </h1>
      <div class="w-[180px] md:w-[250px] h-[4px] bg-[#F6B73C] mx-auto"></div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mt-10 md:mt-15 px-4 md:px-10 xl:px-20"
    >
      <div
        v-for="newsItem in newsList"
        :key="newsItem.id"
        class="w-full min-h-[210px] bg-white p-5 md:p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.05),4px_0_12px_rgba(0,0,0,0.05)] cursor-pointer rounded-2xl transition duration-300 ease-in-out hover:-translate-y-3 flex flex-col"
      >
        <p
          class="text-[#003D7E] font-extrabold text-[18px] md:text-[20px] leading-relaxed break-words"
        >
          {{ newsItem.title }}
        </p>
        <p
          class="text-[#A1A1A1] font-medium text-[14px] md:text-[16px] mt-4 leading-relaxed break-words"
        >
          {{ newsItem.content }}
        </p>
        <div class="flex items-center justify-between mt-auto pt-6 gap-4">
          <div
            :class="[
              getStatusColor(newsItem.status_name),
              'min-w-[88px] h-8 px-4 flex items-center justify-center text-white rounded-2xl text-[14px]',
            ]"
          >
            {{ newsItem.status_name }}
          </div>
          <div
            class="text-[#0052AA] font-bold text-[14px] md:text-[16px] whitespace-nowrap"
          >
            อ่านเพิ่มเติม →
          </div>
        </div>
      </div>
    </div>

    <!-- button -->
    <div class="grid place-items-center mt-10 md:mt-15 px-4">
      <a
        href="#"
        class="group flex h-[50px] w-full max-w-[300px] items-center justify-center rounded-4xl border border-[#003D7E] bg-white transition-all duration-300 hover:bg-[#003D7E]"
      >
        <span
          class="text-[18px] md:text-[20px] font-extrabold text-[#003D7E] transition-colors duration-300 group-hover:text-white"
          >ดูทั้งหมด</span
        >
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const newsList = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/news/conference/1");
    // Sort by sort_order
    newsList.value = res.data.sort((a, b) => a.sort_order - b.sort_order);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
});

const getStatusColor = (status) => {
  switch (status) {
    case "ประกาศ":
      return "bg-[#0065A8]";
    case "เอกสาร":
      return "bg-[#82B558]";
    case "สถานที่":
      return "bg-[#E1AD01]";
    default:
      return "bg-[#0065A8]";
  }
};
</script>

<style scoped></style>
