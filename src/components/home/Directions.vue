<template>
	<div id="directions" class="px-[250px] mt-[150px] pb-[130px]">
		<div class="text-center mb-[100px]">
			<h1>Направления</h1>
			<h4 class="text-darkgray">Выбирайте работу, которая вам по душе</h4>
		</div>
		<div class="grid grid-cols-3 gap-[40px]">
		<directions-card
		v-for="direction, in directions"
        :key="direction"
        :title="direction.title"
		  :description="direction.description"
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