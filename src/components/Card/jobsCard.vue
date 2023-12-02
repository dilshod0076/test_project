<template>
	<div class="bg-graykg xl:p-[30px] p-[20px] text-darkgray mb-[20px] rounded-[10px]">
		<h2 class="text-black xl:mb-[40px] lg:mb-[25px] mb-[20px]">{{ title }}</h2>
		<h4 class="xl:mb-[30px] mb-[20px] xl:text-[26px] text-[17px]">{{ shortDescription }}</h4>
		<div class="xl:flex lg:flex bg-[#E6E6E6] xl:py-[22px] py-[15px] rounded-[10px]">
			<div class="flex items-center xl:mr-[286px] mr-[201px] xl:mb-0 lg:mb-0 mb-[14px]">
				<img class="xl:w-[30px] xl:h-[30px] w-[20px] h-[20px] xl:ml-[15px] ml-[10px] xl:mr-[10px] mr-[7px]" src="@/assets/img/location.svg" alt="">
				<h6 class="xl:text-[22px] text-[14px]">{{ city }}</h6>
			</div>
			<div class="flex items-center">
				<img class="xl:w-[30px] xl:h-[30px] w-[20px] h-[20px] xl:ml-[15px] ml-[10px] xl:mr-[10px] mr-[7px]" src="@/assets/img/bag.svg" alt="">
				<h6 class="xl:text-[22px] text-[14px]">{{ filter }}</h6>
			</div>
		</div>
		<div class="xl:flex-row lg:flex-row flex flex-col xl:mt-[30px] lg:mt-[20px] justify-between">
			<router-link class="xl:order-1 lg:order-1 order-2" :to="/jobs_detail/ + String(url)">
				<button class="text-black xl:px-[30px] lg:px-[20px] xl:w-auto lg:w-auto w-full xl:py-[15px] lg:py-[14px] py-[20px] bg-lime hover:bg-limeHover rounded-[10px] xl:text-[26px] text-[17px]">Подробнее</button>
			</router-link>
			<h4 class="xl:order-2 lg:order-2 order-1 xl:py-[15px] lg:py-[15px] py-[20px] xl:text-[26px] text-[17px]">{{ date }}</h4>
		</div>
	</div>
 </template>
 
 <script>
 export default {
	props: {
	  title: {
		 type: String,
		 required: true,
	  },
	  description: {
		 type: String,
		 required: true,
	  },
	  city: {
		 type: String,
		 required: true,
	  },
	  filter: {
		 type: String,
		 required: true,
	  },
	  date: {
		 type: String,
		 required: true,
	  },
	  url: {
		 type: String,
		 required: true,
	  },
	},
	computed: {
	shortDescription() {
      const maxDescriptionLength = 110;
      if (this.description.length > maxDescriptionLength) {
        return this.description.substring(0, maxDescriptionLength) + '...';
      } else {
        return this.description;
      }
    },
 
 }
};
 </script>
 