<template>
	<div>
		<div class="bg-graykg min-w-[447px] p-[30px] rounded-[10px] mb-[20px]">
			<div class="h8 mb-[32px]">Регион</div>
			<div v-for="city in cities" :key="city" @click="selectCity(city)">
				<h6 class="pl-[22px] py-[22px] cursor-pointer hover:bg-regulargray rounded-[10px]">{{ city.city }}</h6>
			</div>
		</div>
		<div class="bg-graykg min-w-[447px] p-[30px] rounded-[10px]">
			<div class="h8 mb-[32px]">Вакансии</div>
			<div v-for="job in jobs" :key="job" @click="selectJob(job)">
				<h6 class="p-[22px] cursor-pointer hover:bg-regulargray rounded-[10px]">{{ job.job }}</h6>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			selectedCity: 'Все города',
			selectedJob: 'Все вакансии',
			cities: [
				{city: 'Все города'},
				{city: 'Худжанд'},
				{city: 'Душанбе'},
			],
			jobs: [
				{job: 'Все вакансии'},
				{job: 'ИТ специалист'},
				{job: 'Маркетинг и реклама'},
				{job: 'Начало карьеры'},
			]
		}
	},
	methods: {
    selectCity(city) {
      this.selectedCity = city.city;
      this.$emit('city-selected', city.city);
    },
	 selectJob(job) {
      this.selectedJob = job.job;
      this.$emit('job-selected', job.job);
    },
  },
}
</script>