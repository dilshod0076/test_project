<template>
	<div class="bg-[#FFF] xl:px-[250px] lg:px-[70px] px-[24px]">
		<div class="container mx-auto">
			<div class="xl:flex lg:flex xl:py-[50px] lg:py-[30px] lg:border-b xl:border-b border-[#ECF0F3]">
			<div class="xl:mx-0 lg:mx-0 mx-[-24px] xl:mr-[180px] lg:mr-[130px] xl:py-0 lg:py-0 py-[25px] xl:border-b-0 lg:border-b-0 border-b border-[#ECF0F3]">
				<img class="w-[115px] xl:h-[95px] lg:w-[98px] lg:h-[95px] h-[42px] xl:mx-0 lg:mx-0 mx-[24px]" src="@/assets/img/footer_logo.svg" alt="">
			</div>
			<div class="xl:flex lg:flex flex flex-col xl:flex-row lg:flex-row">
				<div class="xl:max-w-[325px] lg:max-w-[176px] max-w-[217px] xl:mr-[243px] lg:mr-[166px] xl:my-0 lg:my-0 py-[25px] xl:order-1 lg:order-1 order-2">
					<h5 class="xl:mb-[25px] lg:mb-[20px] mb-[20px]">Таджикистан, г. Худжанд, автовокзал “Рохи Абрешим”</h5>
					<h5 class="xl:mb-[25px] lg:mb-[20px] mb-[20px]">info@karimovgroup.tj</h5>	
					<h5>+992 4000 60000</h5>
				</div>
				<div class="xl:my-0 lg:my-0 py-[25px] xl:order-2 lg:order-2 order-1 xl:border-b-0 lg:border-b-0 border-b border-[#ECF0F3]" >
					<h5 class="uppercase xl:mb-[40px] lg:mb-[25px] mb-[20px]">Направлении</h5>
					<h5 class="xl:text-black lg:text-black text-mediumgray h7 xl:mb-[30px] lg:mb-[20px] mb-[20px]"><router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'ИТ специалист' } }" @click="activateHeaderDiv(2)">Работа в ИТ</router-link></h5>
					<h5 class="xl:text-black lg:text-black text-mediumgray h7 xl:mb-[30px] lg:mb-[20px] mb-[20px]"><router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Маркетинг и реклама' } }" @click="activateHeaderDiv(3)">Маркетинг и реклама</router-link></h5>
					<h5 class="xl:text-black lg:text-black text-mediumgray h7"><router-link :to="{ name: 'jobs', query: { city: 'Все города', category: 'Начало карьеры' } }" @click="activateHeaderDiv(4)">Начало карьеры</router-link></h5>
				</div>
			</div>
		</div>
		<div class="xl:flex xl:justify-between lg:flex lg:justify-between flex flex-col xl:flex-row lg:flex-row">
			<h5 class="h7 xl:my-[60px] lg:my-[30px] my-[25px] xl:order-1 lg:order-1 order-2">©2023 ООО «Karimov Group»</h5>
			<div class="flex xl:my-[43px] lg:my-[22px] pb-[20px] xl:mb-0 lg:mb-0 xl:order-2 lg:order-2 order-1 xl:border-b-0 lg:border-b-0 border-b border-[#ECF0F3]">
				<div class="bg-regulargray hover:bg-lime rounded-full xl:w-[50px] xl:h-[50px] lg:w-[25px] lg:h-[25px] xl:mr-[30px] lg:mr-[15px] mr-[22px]">
					<img class="xl:mx-[12px] xl:my-[10px] lg:mx-[6px] lg:my-[5px] mx-[8.4px] my-[7px] xl:w-[26px] xl:h-[30px] lg:w-[13px] lg:h-[15px] w-[18.2px] h-[21px]" src="@/assets/img/instagram.svg" alt="">
				</div>
				<div class="bg-regulargray hover:bg-lime rounded-full xl:w-[50px] xl:h-[50px] lg:w-[25px] lg:h-[25px] xl:mr-[30px] lg:mr-[15px] mr-[22px]">
					<img class="xl:mx-[10px] xl:my-[12.5px] lg:mx-[5px] lg:my-[5.5px] mx-[8.5px] my-[7.8px]  xl:w-[26px] xl:h-[26px] lg:w-[13px] lg:h-[13px] w-[18.2px] h-[18.2px]" src="@/assets/img/telegram.svg" alt="">
				</div>
				<div class="bg-regulargray hover:bg-lime rounded-full xl:w-[50px] xl:h-[50px] lg:w-[25px] lg:h-[25px] xl:mr-[30px] lg:mr-[15px] mr-[22px]">
					<img class="xl:mx-[15px] xl:my-[8px] lg:mx-[7px] lg:my-[4px] mx-[10px] my-[5px] xl:w-[21px] xl:h-[35px] lg:w-[10.5px] lg:h-[17.5px] w-[14.7px] h-[24.5px]" src="@/assets/img/facebook.svg" alt="">
				</div>
			</div>
		</div>	
		</div>
	</div>
</template>
<script>
export default {
  methods: {
    activateHeaderDiv(item) {
      this.$store.commit('setHoveredItem', item);
      localStorage.setItem('hoveredItem', item);
    },
  },
};
</script>