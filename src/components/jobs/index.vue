<template>
	<div class="px-[230px] mt-[100px]">
		<div class="mb-[50px] flex">
			<div>
				<h1>Вакансии, доступные в настоящее время</h1>
				<h4 class="text-darkgray w-[1031px]">Выберите интересующую вас позицию, предоставьте свое резюме и успешно пройдите тестирование, чтобы присоединиться к нашей команде.</h4>
			</div>
			<div>
				<img class="absolute right-[-140px]" src="@/assets/img/image-4.jpg" alt="">
			</div>
		</div>
		<Search @search="updateFilteredJobsBySearch" class="mb-[50px]"/>
		<div class="flex">
			<FilterJobs @city-selected="updateFilteredJobs" @job-selected="updateFilteredJobsByJob"/>
			<div class="ml-[40px]">
				<jobs-card
				v-for="job in filteredJobs" :key="job.id"
				:title="job.title"
				:description="job.description"
				:city="job.city"
				:filter="job.filter"
				:date="job.date"
				:url="job.id"
				/>
			</div>
		</div>
	</div>
</template>
<script >
import Search from '@/components/search/index.vue'
import FilterJobs from '@/components/jobs/filterJobs.vue'
import jobs from '@/data/jobs.json'
export default {
	data() {
    return {
      jobs: jobs,
		filteredJobs: jobs,
    };
  },
	components: {
		Search,
		FilterJobs
	},
	methods: {
    navigate(id) {
      this.$router.push('/jobs_detail/' + id);
    },
	 updateFilteredJobs(city) {
      if (city === 'Все города') {
        this.filteredJobs = this.jobs;
      } else {
        this.filteredJobs = this.jobs.filter(job => job.city === city);
      }
    },
	 updateFilteredJobsByJob(selectedJob) {
  if (selectedJob === 'Все вакансии') {
    this.filteredJobs = this.jobs;
  } else {
    this.filteredJobs = this.jobs.filter(job => job.filter === selectedJob);
  }
},
updateFilteredJobsBySearch(searchTerm) {
      if (!searchTerm) {
        this.filteredJobs = this.jobs;
      } else {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        this.filteredJobs = this.jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            job.description.toLowerCase().includes(lowerCaseSearchTerm)
        );
      }
    },
  }
}
</script>
