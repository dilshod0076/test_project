<template>
  <div class="home">
	<Header/>
	<JobHome/>
	<Directions ref="directionsRef"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import JobHome from '@/components//home/JobHome.vue'
import Directions from '@/components/home/Directions.vue'
export default {
	components: {
		Header,
		JobHome,
		Directions,
	},
}
</script>
