<template>
  <div class="home mx-auto">
	<JobHome/>
	<Directions ref="directionsRef"/>
  </div>
</template>

<script>
import JobHome from '@/components//home/JobHome.vue'
import Directions from '@/components/home/Directions.vue'
export default {
	components: {
		JobHome,
		Directions,
	},
}
</script>
