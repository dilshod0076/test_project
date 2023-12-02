<template>
	<div class="xl:flex xl:px-[250px] lg:px-[70px] px-[24px] mb-[60px] overflow-hidden">
		<div class="xl:mt-[250px] lg:mt-[158px] mt-[60px] px-[21px] xl:text-left lg:text-left text-center z-10">
			<h1 class="xl:w-[820px] lg:w-[718px] lg:text-[60px] text-[22px] truncate">РАБОТА ДЛЯ ТЕХ </h1>
			<h1 class="xl:w-[820px] lg:w-[718px] lg:text-[60px] text-[22px]">КТО ХОЧЕТ <span class="bg-black text-lime rounded-[10px] px-[6px]">БОЛЬШЕГО</span></h1>
			<h4 class="text-darkgray xl:mt-[40px] lg:mt-[40px] mt-[25px] xl:mb-[80px] lg:mb-[80px] mb-[50px]">Присоединяйтесь к нашей команде</h4>
			<button @click="scroll" class="bg-lime hover:bg-limeHover xl:px-[30px] lg:px-[30px] px-[18px] xl:py-[10px] lg:py-[10px] py-[20px]  rounded-[10px]"><h4>Смотреть вакансии</h4></button>
		</div>
		<img class="xl:mt-[377px] xl:scale-100 lg:scale-150 scale-150 lg:mt-[120px] xl:mb-0 lg:mb-[150px] mb-[100px] mt-[100px] xl:relative xl:right-[450px]" src="@/assets/img/jobHome.png" alt="">
	</div>
</template>
<script>
export default {
  methods: {
    scroll() {
      const directionsElement = document.getElementById('directions');
      if (directionsElement) {
        directionsElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>