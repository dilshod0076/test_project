<template>
	<router-link :to="{ name: 'jobs', query: { city: 'Все города', category: category } }" @click="activateHeaderDiv(id)" class="bg-graykg w-full xl:h-[600px] lg:h-[373px] h-[422px] rounded-[30px] xl:pt-[60px] pt-[40px] hover:shadow-80 hover:scale-[1.03]  origin-top-left hover:duration-500 overflow-hidden duration-500">
		<div class="xl:px-[40px] lg:px-[25px] px-[20px] xl:mb-[60px] lg:mb-[40px] mb-[34px] text-center">
			<h3 class="xl:mb-[50px] mb-[25px]">{{ title }}</h3>
			<h6 class="text-darkgray xl:text-[22px] lg:text-[14px] text-[18px]">{{ description }}</h6>
		</div>
		<img :class="image" class="xl:w-[447px] xl:h-[239px] lg:w-[345px] lg:h-[148px] w-[345px]" :src="getImageUrl(image)" :alt="title">
	</router-link>
 </template>
 
 <script>
 export default {
	props: {
	  id: {
		 type: Number,
		 required: true
	  },
	  image: {
		 type: String,
		 required: true
	  },
	  title: {
		 type: String,
		 required: true
	  },
	  description: {
		 type: String,
		 required: true
	  },
	  category: {
		type: String,
		required: true
	  }

	},
	methods: {
	  getImageUrl(imgPath) {
		 return require('@/assets/img/' + imgPath);
	  },
	  activateHeaderDiv(id) {
      	this.$store.commit('setHoveredItem', id);
      	localStorage.setItem('hoveredItem', id);
    },
	},
 };
 </script>

 
 