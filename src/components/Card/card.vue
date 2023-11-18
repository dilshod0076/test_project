<template>
	<div class="bg-lightgray w-[447px] rounded-[30px] pt-[60px]">
		<div class="px-[40px] text-center mb-[90px]">
			<h3 class="mb-[50px]">{{ title }}</h3>
			<h6 class="text-darkgray">{{ description }}</h6>
		</div>
	<img :class="imageClass" :src="getImageUrl(image)" :alt="title">
	</div>
 </template>
 
 <script>
 export default {
	props: {
	  image: {
		 type: String,
		 required: true,
	  },
	  title: {
		 type: String,
		 required: true,
	  },
	  description: {
		 type: String,
		 required: true,
	  },
	},
	methods: {
	  getImageUrl(imgPath) {
		 return require('@/assets/img/' + imgPath);
	  },
	},
 };
 </script>
 