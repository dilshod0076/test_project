<template>
		<div class=" bg-[#FFF] shadow-3xl">
      <div class="flex container mx-auto xl:py-[26px] lg:py-[26px] py-[18px]">
          <img @click="toggleSidebar" class="mr-[24px] mx-[24px] xl:hidden lg:hidden" src="@/assets/img/menu.svg" alt="">
          <img @click="home" class="xl:mr-[403px] xl:ml-[70px] lg:ml-[70px] mr-[100px] xl:w-[82px] lg:w-[52px] w-[46px] " src="@/assets/img/logo.svg" alt="">
          <div class="text-darkgray xl:flex lg:flex hidden">
            <div class="xl:mr-[80px] mr-[50px] cursor-pointer">
              <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Все вакансии' } }" ><h6 class="hover:text-black" @click="showDiv(1)">Все вакансии</h6></router-link>
              <div v-if="hoveredItem === 1" :class="['bg-lime h-[6px] rounded-t-lg relative lg:top-9  xl:top-10 mt-[-6px]']"></div>
            </div>
            <div class="xl:mr-[80px] mr-[40px] cursor-pointer">
              <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'ИТ специалист' } }" ><h6 class="hover:text-black" @click="showDiv(2)">Работа в ИТ</h6></router-link>
              <div v-if="hoveredItem === 2" :class="['bg-lime h-[6px] rounded-t-lg relative lg:top-9 xl:top-10 mt-[-6px]']"></div>
            </div>
            <div class="xl:mr-[80px] mr-[40px] cursor-pointer">
              <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Маркетинг и реклама' } }"><h6 class="hover:text-black" @click="showDiv(3)">Маркетинг и реклама</h6></router-link>
              <div v-if="hoveredItem === 3" :class="['bg-lime h-[6px] rounded-t-lg relative lg:top-9 xl:top-10 mt-[-6px]']"></div>
            </div>
            <div class="cursor-pointer">
              <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Начало карьеры' } }" ><h6 class="hover:text-black" @click="showDiv(4)">Начало карьеры</h6></router-link>
              <div v-if="hoveredItem === 4" :class="['bg-lime h-[6px] rounded-t-lg relative lg:top-9 xl:top-10 mt-[-6px]']"></div>
            </div>
          </div>
        </div>
        <div class="bg-lime xl:h-[3px] h-[1px]">
    </div>
    </div>  
</template>
<script>
export default {
  data() {
    return {
      hoveredItem: parseInt(localStorage.getItem('hoveredItem')) || null,
      isSidebarVisible: false,
    };
  },
  computed: {
    storeHoveredItem() {
      return this.$store.state.hoveredItem;
    },
  },
  watch: {
    storeHoveredItem(newVal) {
      this.hoveredItem = newVal;
      localStorage.setItem('hoveredItem', newVal);
    },
  },
  methods: {
    home() {
      this.$router.push('/');
      this.$store.commit('setHoveredItem', null);
      localStorage.setItem('hoveredItem', null);
    },
    showDiv(item) {
      this.$store.commit('setHoveredItem', item);
      localStorage.setItem('hoveredItem', item);
    },
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
  },
};
</script>