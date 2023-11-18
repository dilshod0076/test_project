<template>
	<div class="bg-lightgray p-[30px] text-darkgray mb-[20px] rounded-[10px]">
		<h2 class="text-black mb-[40px]">{{ title }}</h2>
		<h4 class="mb-[30px]">{{ description }}</h4>
		<div class="flex bg-[#E6E6E6] py-[15px] rounded-[10px]">
			<div class="flex mr-[286px]">
				<img class="ml-[15px] mr-[10px]" src="@/assets/img/location.svg" alt="">
				<h6>{{ city }}</h6>
			</div>
			<div class="flex">
				<img class="w-[30px] h-[30px] ml-[15px] mr-[10px]" src="@/assets/img/bag.svg" alt="">
				<h6>{{ filter }}</h6>
			</div>
		</div>
		<div class="flex mt-[30px] justify-between">
			<a :href="/jobs_detail/ + url">
				<button class="text-black px-[30px] py-[15px] bg-lime rounded-[10px]"><h4>Подробнее</h4></button>
			</a>
			<h4 class="py-[15px]">{{ date }}</h4>
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
		 default: '',
	  },
	}
 };
 </script>
 