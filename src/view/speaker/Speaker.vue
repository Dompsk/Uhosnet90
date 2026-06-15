<template>
  <section id="speaker">
    <!-- heading -->
    <div class="flex flex-col items-center px-4 text-center">
      <h1 class="mt-10 text-[16px] md:text-[18px] font-bold text-[#02A4A9]">
        SPEAKERS
      </h1>
      <h1 class="text-[28px] md:text-[36px] font-bold text-[#003D7E]">
        วิทยากรพิเศษ
      </h1>
      <div class="mx-auto h-[4px] w-[140px] md:w-[180px] bg-[#F6B73C]"></div>
      <p
        class="mt-6 md:mt-10 text-[16px] md:text-[20px] leading-relaxed max-w-[1200px]"
      >
        วิทยากรหลักของการประชุม UHosNet ครั้งที่ 90 ถ่ายทอดมุมมองด้านนโยบาย
        เทคโนโลยี นวัตกรรม และการบริหารองค์กรสู่ความยั่งยืน
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="mt-10 flex justify-center items-center py-20">
      <div
        class="animate-spin rounded-full h-12 w-12 border-4 border-[#003D7E] border-t-transparent"
      ></div>
      <span class="ml-4 text-[18px] text-gray-500"
        >กำลังโหลดข้อมูลวิทยากร...</span
      >
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="mt-10 flex flex-col items-center py-20">
      <p class="text-red-500 text-[18px]">{{ error }}</p>
      <button
        @click="fetchSpeakers"
        class="mt-4 px-6 py-2 bg-[#003D7E] text-white rounded-full hover:bg-[#002B5C] transition-colors"
      >
        ลองใหม่อีกครั้ง
      </button>
    </div>

    <!-- Speaker Cards -->
    <div
      v-else
      class="mt-10 grid grid-cols-1 xl:grid-cols-2 px-4 md:px-10 xl:px-20 py-6 md:py-10 gap-6 items-stretch"
    >
      <div
        v-for="(speaker, index) in speakers"
        :key="speaker.id"
        class="w-full h-full flex flex-col rounded-[24px] md:rounded-[32px] bg-[#F8F8F8] shadow-[0_4px_10px_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.08)] p-5 md:p-8 xl:p-12 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12),0_20px_40px_rgba(0,0,0,0.12)]"
      >
        <!-- Header: Photo + Name -->
        <div
          class="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-5 md:gap-8 items-center"
        >
          <div>
            <img
              :src="getSpeakerPhoto(speaker.photo_path)"
              :alt="speaker.full_name"
              class="w-[120px] md:w-[140px] mx-auto sm:mx-0 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <div
              class="inline-block text-white text-[14px] md:text-[18px] font-semibold px-4 py-1 rounded-full mb-4"
              :class="getTheme(index).badgeBg"
            >
              {{
                speaker.position_name ||
                (index === 0 ? "Keynote Speaker" : "Guest Speaker")
              }}
            </div>
            <h1
              class="text-[22px] md:text-[26px] leading-tight font-bold text-[#0B2C66]"
            >
              {{ speaker.full_name }}
            </h1>
            <p
              class="text-[14px] md:text-[16px] leading-relaxed text-gray-500 mt-3 break-words"
            >
              {{ speaker.organization }}
            </p>
          </div>
        </div>

        <!-- Topic -->
        <div class="mt-7 text-[16px] md:text-[18px]">
          <div
            class="flex items-start gap-3 text-[18px] md:text-[20px] font-bold mb-2"
            :class="getTheme(index).textColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 shrink-0 mt-1"
              viewBox="0 -960 960 960"
              :fill="getTheme(index).iconFill"
            >
              <path
                d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm85-205Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm68.5-371.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z"
              />
            </svg>
            <span>หัวข้อบรรยาย</span>
          </div>
          <div class="leading-relaxed text-[#555] break-words">
            {{ speaker.topic }}
          </div>
          <div
            v-if="speaker.sub_topic"
            class="leading-relaxed text-[#555] break-words"
          >
            {{ speaker.sub_topic }}
          </div>
        </div>

        <div class="my-5 h-[2px]" :class="getTheme(index).divider"></div>

        <!-- Education -->
        <div
          v-if="formatEducation(speaker.education).length"
          class="mb-6 text-[16px] md:text-[18px]"
        >
          <div
            class="flex items-start gap-3 text-[18px] md:text-[20px] font-bold mb-3"
            :class="getTheme(index).textColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 shrink-0 mt-1"
              viewBox="0 -960 960 960"
              :fill="getTheme(index).iconFill"
            >
              <path
                d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"
              />
            </svg>
            <span>ประวัติการศึกษา</span>
          </div>
          <ul
            class="pl-6 md:pl-12 list-disc space-y-2 text-[#555] leading-relaxed"
          >
            <li
              v-for="(edu, i) in formatEducation(speaker.education)"
              :key="'edu-' + i"
            >
              {{ edu }}
            </li>
          </ul>
        </div>

        <!-- Experience -->
        <div
          v-if="formatExperience(speaker.experience).length"
          class="mb-6 text-[16px] md:text-[18px]"
        >
          <div
            class="flex items-start gap-3 text-[18px] md:text-[20px] font-bold mb-3"
            :class="getTheme(index).textColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 shrink-0 mt-1"
              viewBox="0 -960 960 960"
              :fill="getTheme(index).iconFill"
            >
              <path
                d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"
              />
            </svg>
            <span>ประสบการณ์และบทบาทสำคัญ</span>
          </div>
          <ul
            class="pl-6 md:pl-12 list-disc space-y-2 text-[#555] leading-relaxed"
          >
            <li
              v-for="(exp, i) in formatExperience(speaker.experience)"
              :key="'exp-' + i"
            >
              {{ exp }}
            </li>
          </ul>
        </div>

        <!-- Expertise -->
        <div
          v-if="speaker.expertise"
          class="mt-auto pt-6 md:pt-10 rounded-2xl p-4 md:p-6"
          :class="getTheme(index).expertiseBox"
        >
          <div class="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 shrink-0"
              viewBox="0 -960 960 960"
              :fill="getTheme(index).expertiseIconFill"
            >
              <path
                d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"
              />
            </svg>
            <h2
              class="text-[18px] md:text-[22px] font-bold"
              :class="getTheme(index).expertiseTitle"
            >
              จุดเด่นในฐานะวิทยากร
            </h2>
          </div>
          <p class="text-[16px] md:text-[18px] leading-relaxed text-[#555]">
            {{ speaker.expertise }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/api/index.ts";
import speakerYotchanan from "@/asset/speaker/speaker_yotchanan.png";
import speakerEkapol from "@/asset/speaker/speaker_ekapol.png";

const speakers = ref([]);
const loading = ref(true);
const error = ref(null);

// Map backend photo_path filename to local asset
const photoMap = {
  "speaker_yotchanan.png": speakerYotchanan,
  "speaker_ekapol.png": speakerEkapol,
};

const getSpeakerPhoto = (photoPath) => {
  if (!photoPath) return speakerYotchanan; // default fallback
  // Extract filename from path (e.g. "images/speaker_ekapol.png" → "speaker_ekapol.png")
  const filename = photoPath.split("/").pop();
  return photoMap[filename] || photoPath;
};

// Color themes alternating between blue (Keynote) and green (Guest)
const themes = [
  {
    badgeBg: "bg-[#1D63FF]",
    textColor: "text-[#0D6FFD]",
    iconFill: "#2F6BFF",
    divider: "bg-[#DAE8FA]",
    expertiseBox: "border border-[#B7CDF6] bg-[#F7FAFF]",
    expertiseIconFill: "#2F6BFF",
    expertiseTitle: "text-[#0D6FFD]",
  },
  {
    badgeBg: "bg-[#198754]",
    textColor: "text-[#27905B]",
    iconFill: "#27905B",
    divider: "bg-[#CDE3E2]",
    expertiseBox: "border border-[#C7E6D9] bg-[#E8F4ED]",
    expertiseIconFill: "#147F4D",
    expertiseTitle: "text-[#147F4D]",
  },
];

const getTheme = (index) => themes[index % themes.length];

// Parse JSON value safely — handles string JSON and already-parsed arrays
const safeParseArray = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return value ? [value] : [];
  }
};

// Format education objects: { field, degree, institution } → readable string
const formatEducation = (value) => {
  const items = safeParseArray(value);
  return items.map((item) => {
    if (typeof item === "string") return item;
    const parts = [];
    if (item.degree) parts.push(item.degree);
    if (item.field) parts.push(`สาขา${item.field}`);
    if (item.institution) parts.push(item.institution);
    return parts.join(" ") || JSON.stringify(item);
  });
};

// Format experience objects: { role, organization } → readable string
const formatExperience = (value) => {
  const items = safeParseArray(value);
  return items.map((item) => {
    if (typeof item === "string") return item;
    const parts = [];
    if (item.role) parts.push(item.role);
    if (item.organization) parts.push(item.organization);
    return parts.join(" — ") || JSON.stringify(item);
  });
};

const fetchSpeakers = async () => {
  loading.value = true;
  error.value = null;
  try {
    const res = await api.get("/speakers");
    // Filter active speakers and sort by sort_order
    speakers.value = res.data
      .filter((s) => s.is_active === 1 || s.is_active === true)
      .sort((a, b) => (a.sort_order ?? 999) - (b.sort_order ?? 999));
  } catch (err) {
    console.error("Failed to fetch speakers:", err);
    error.value = "ไม่สามารถโหลดข้อมูลวิทยากรได้ กรุณาลองใหม่อีกครั้ง";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchSpeakers();
});
</script>
