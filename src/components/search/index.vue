<!-- search.vue -->
<template>
	<div class="flex bg-[#FFF] justify-between rounded-[10px] border border-lime">
	  <div class="flex py-[20px]">
		 <img class="px-[22px]" src="@/assets/img/search.svg" alt="" />
		 <input
			class="text-[26px] w-[1275px] outline-none"
			type="text"
			placeholder="Введите название вакансии"
			v-model="searchTerm"
		 />
	  </div>
	  <button @click="search" class="bg-lime px-[30px] py-[20px] rounded-r-[10px]">
		 <h4>Искать</h4>
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
	},
 };
 </script>
 