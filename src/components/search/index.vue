<!-- search.vue -->
<template>
	<div class="flex bg-[#FFF] justify-between rounded-[10px] border border-lime">
	  <div class="flex xl:py-[20px] py-[17px]">
		 <img class="xl:mx-[22px] mx-[14px] xl:w-[30px] xl:h-[30px] w-[18px] h-[18px]" src="@/assets/img/search.svg" alt="" />
		 <input
			class="xl:text-[26px] text-[16px] max-w-[1214px] xl:min-w-[1150px] lg:min-w-[720px] outline-none"
			type="text"
			placeholder="Введите название вакансии"
			v-model="searchTerm"
			@keyup.enter="search"
			/>
			<img v-if="searchTerm !== ''" @click="clear" class="xl:w-[30px] xl:h-[30px] w-[18px] h-[18px] mr-[20px] ml-[-20px] mt-[5px] cursor-pointer" src="@/assets/img/clear.svg" alt="">
		</div>
	  <button @click="search" class="bg-lime hover:bg-limeHover xl:px-[30px] px-[17px] xl:py-[20px] py-[17px] rounded-r-[10px]">
		 <h4 class="xl:text-[26px] text-[16px]">Искать</h4>
	  </button>
	</div>
 </template>
 
 <script>
 export default {
	data() {
	  return {
		 searchTerm: '',
	  };
	},
	methods: {
	  search() {
		 this.$emit('search', this.searchTerm);
	  },
	  clear(){
		this.searchTerm = '';
		 this.$emit('clear')
	  }
	},
 };
 </script>
 