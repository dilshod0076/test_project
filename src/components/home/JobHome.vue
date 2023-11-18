<template>
	<div class="flex px-[250px] mb-[60px]">
		<div class="mt-[250px] z-10">
			<h1 class="w-[718px]">РАБОТА ДЛЯ ТЕХ КТО ХОЧЕТ <span class="bg-black text-lime rounded-[10px] px-[6px]">БОЛЬШЕГО</span></h1>
			<h4 class="text-darkgray pt-[40px] pb-[80px]">Присоединяйтесь к нашей команде</h4>
			<button @click="scroll" class="bg-lime px-[30px] py-[10px] rounded-[10px]"><h4>Смотреть вакансии</h4></button>
		</div>
		<img class="mt-[377px] relative right-[450px]" src="@/assets/img/jobHome.jpg" alt="">
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