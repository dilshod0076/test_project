<template>
  <div class="{ 'xl:hidden lg:hidden isSidebarVisible }">
  <transition>
  <div v-if="isSidebarVisible" class="fixed top-0 left-0 w-[100%] h-[100%] bg-black opacity-50 transition-opacity duration-300 ease-in-out"></div>
</transition>
<transition name="slide">
  <div v-if="isSidebarVisible" class="fixed top-0 left-0 shadow-3xl h-full bg-body mr-[114px] transition-transform duration-300 ease-in-out">
    <div class="container mx-auto">
      <div class="flex justify-between bg-[#FFF]">
        <img class="w-[46px] py-[18px] ml-[24px]" src="@/assets/img/logo.svg" alt="">
        <img @click="clear" class="mr-[12px] w-[40px]" src="@/assets/img/clear.svg" alt="">
      </div>
        <div class="bg-lime h-[1px]"></div>
        <div @click="clear" class="text-darkgray xl:hidden lg:hidden pl-[24px] pr-[71px] bg-body">
          <div class="py-[30px] cursor-pointer">
            <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Все вакансии' } }" ><h6 class="text-18px" @click="showDiv(1)">Все вакансии</h6></router-link>
            <div v-if="hoveredItem === 1"></div>
          </div>
          <div class="pb-[30px] cursor-pointer">
            <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'ИТ специалист' } }" ><h6 class="text-18px" @click="showDiv(2)">Работа в ИТ</h6></router-link>
            <div v-if="hoveredItem === 2"></div>
          </div>
          <div class="pb-[30px] cursor-pointer">
            <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Маркетинг и реклама' } }"><h6 class="text-18px" @click="showDiv(3)">Маркетинг и реклама</h6></router-link>
            <div v-if="hoveredItem === 3"></div>
          </div>
          <div class="cursor-pointer">
            <router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Начало карьеры' } }" ><h6 class="text-18px" @click="showDiv(4)">Начало карьеры</h6></router-link>
            <div v-if="hoveredItem === 4"></div>
          </div>
        </div>
  </div>
  </div>  
</transition>
</div>
</template>
<script>
export default {
  props: ['isSidebarVisible'],
  emits: ['clearSidebar'],
data() {
  return {
    hoveredItem: parseInt(localStorage.getItem('hoveredItem')) || null,
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
  showDiv(item) {
    this.$store.commit('setHoveredItem', item);
    localStorage.setItem('hoveredItem', item);
  },
  clear() {
      this.$emit('clearSidebar');
    },
},
};
</script>

<style scoped>

.slide-enter-active, .slide-leave-active {
  transition: transform 0.1s ease;
  transform: translateX(-100%);
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>