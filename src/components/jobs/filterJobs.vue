<template>
	<div>
		<div class="bg-graykg xl:min-w-[447px] min-w-[229px] xl:p-[30px] p-[15px] rounded-[10px] mb-[20px]">
			<div class="h8 xl:mb-[32px] lg:mb-[15px] mb-[4px]">Регион</div>
			<div v-for="city in cities" :key="city" @click="selectCity(city)">
				<h6 
					:class="{ 'bg-regulargray': selectedCity === city.city }"
					class="hidden xl:block lg:block xl:text-[22px] lg:text-[12px] text-[15px] xl:p-[22px] p-[11px] cursor-pointer hover:bg-regulargray hover:duration-500 rounded-[10px] mb-[10px] duration-300">{{ city.city }}
				</h6>
			</div>
			<select class="xl:hidden lg:hidden block w-full outline-none bg-graykg ml-[-4px]" v-model="selectedCity" @change="updateRoute">
		  		<option class="custom-option outline-none" v-for="city in cities" :key="city.city" :value="city.city">{{ city.city }}</option>
			</select>
		</div>
		<div class="bg-graykg xl:min-w-[447px] min-w-[229px] xl:px-[30px] xl:py-[30px] lg:px-[15px] lg:py-[15px] px-[20px] py-[10px] rounded-[10px] mb-[20px]">
			<div class="h8 xl:mb-[32px] lg:mb-[15px] mb-[4px]">Вакансии</div>
			<div v-for="job in jobs" :key="job" @click="selectJob(job)">
				<h6 
					:class="{ 'bg-regulargray': selectedJob === job.job }"
					class="hidden xl:flex lg:flex justify-between xl:text-[22px] lg:text-[12px] text-[15px] xl:p-[22px] p-[11px] cursor-pointer hover:bg-regulargray hover:duration-500 rounded-[10px] mb-[10px] duration-300 ">{{ job.job }}
					<div>
						{{ getJobCount(job.job) }}
					</div>
				</h6>
			</div>
			<select class="xl:hidden lg:hidden block w-full outline-none bg-graykg ml-[-4px]" v-model="selectedJob" @change="updateRoute">
		  		<option class="custom-option outline-none" v-for="job in jobs" :key="job.job" :value="job.job">{{ job.job }}  {{ }}</option>
			</select>
		</div>
	</div>
</template>
<script>
 import jobsData from "@/data/jobs.json";
export default {
	data(){
		return {
			selectedCity: 'Все города',
			selectedJob: 'Все вакансии',
			cities: [
				{city: 'Все города',},
				{city: 'Худжанд'},
				{city: 'Душанбе'},
			],
			jobs: [
				{job: 'Все вакансии',},
				{job: 'ИТ специалист'},
				{job: 'Маркетинг и реклама'},
				{job: 'Начало карьеры'},
			]
		}
	},
  watch: {
    $route() {
      this.filterQuery();
    },
  },
  created() {
	this.filterQuery();
  },
  computed: {
    filteredJobs() {
      const jobCounts = {};
      for (const job of this.jobs) {
        const count = jobsData.filter((vacancy) => vacancy.filter === job.job).length;
        jobCounts[job.job] = count;
      }
      return jobCounts;
    },
  },
  methods: {
	getJobCount(jobCategory) {
      return this.filteredJobs[jobCategory] || 0;
    },
	filterQuery(){
		const query = this.$route.query;
		if (query.city) {
		this.selectedCity = query.city;
		}
		if (query.category) {
		this.selectedJob = query.category;
		}
	 },
    selectCity(city) {
      this.selectedCity = city.city;
      this.$emit('city-selected', city.city);
      this.updateRoute();
    },
    selectJob(job) {
      this.selectedJob = job.job;
      this.$emit('job-selected', job.job);
      this.updateRoute();
    },
    updateRoute() {
      this.$router.push({ query: { city: this.selectedCity, category: this.selectedJob } });
    },
  },
}
</script>
<style>
.custom-option {
  color: #0A0B0B; 
  background-color: #ECECEC;
}
</style>