<template>
	<div id="directions" class="xl:px-[250px] lg:px-[70px] px-[24px] xl:mt-[100px] lg:mt-0 mt-0 xl:mb-[130px] lg:mb-[100px] mb-[49px]">
		<div class="text-center xl:mb-[100px] mb-[50px]">
			<h1>Направления</h1>
			<h4 class="text-darkgray">Выбирайте работу, которая вам по душе</h4>
		</div>
	<div class="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 xl:gap-[40px] lg:gap-[25px] grid gap-y-[20px] justify-center">
		<directions-card
		v-for="direction, in directions"
        :key="direction"
		:id="direction.id"
        :title="direction.title"
		:description="direction.description"
		:category="direction.category"
        :image="direction.img"
		/>
	</div>
	</div>
</template>
<script>
import directions from '@/data/directionsCard.json';
export default {
	data() {
    return {
      directions: directions,
    };
  },
  
	
}
</script>