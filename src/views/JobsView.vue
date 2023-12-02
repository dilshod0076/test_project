<template>
	<div class="xl:w-[1920px] mx-auto">
		<img class="absolute right-[0] mt-[40px] hidden xl:block" src="@/assets/img/image-4.svg" alt="">
		<div class="xl:px-[250px] lg:px-[70px] px-[24px] xl:my-[50px] lg:my-[40px] my-[20px]">
		<div class="xl:mb-[50px] lg:mb-[40px] mb-[20px] flex">
			<div class="" v-if="selectedCity === 'Все города' && selectedJob === 'Все вакансии'">
				<router-link to="/" class="bg-graykg rounded-[7px] px-[18px] py-[10px] text-[14px] xl:hidden lg:hidden">Назад</router-link>
				<h1 class="mt-[20px]">Вакансии, доступные в настоящее время</h1>
				<h4 class="text-darkgray xl:w-[1031px]">Выберите интересующую вас позицию, предоставьте свое резюме и успешно пройдите тестирование, чтобы присоединиться к нашей команде.</h4>
			</div>
		</div>
		<Search @search="filterSearch" @clear="clearSearch" class="xl:mb-[50px] lg:mb-[40px] mb-[20px]"/>
		<div class="xl:flex lg:flex">
			<FilterJobs @city-selected="filterCity" @job-selected="filterJob"/>
			<div class="xl:ml-[40px] lg:ml-[20px]">
				<div class="xl:text-left lg:text-left text-center mb-[240px]" v-if="filteredJobs.length === 0">
					<div class="xl:text-[50px] lg:text-[40px] text-[22px] font-black xl:leading-[85px] lg:leading-[40px] leading-[48px]">Ничего не нашлось :(</div>
					<div class="xl:text-[30px] lg:text-[24px] text-[16px] max-w-[813px] xl:leading-[50px] lg:leading-[40px] leading-[20px] xl:mb-[50px] lg:mb-[40px] mb-[30px]">К сожалению, на текущий момент у нас нет подходящих вакансий, соответствующих вашему запросу.</div>
					<button @click="resetFilters" class="xl:py-[15px] xl:px-[30px] lg:px-[30px] lg:py-[15px] px-[18px] py-[18px] bg-lime rounded-[10px] xl:text-[26px] text-[18px]">Другие вакансии</button>
				</div>
				<jobs-card
  					v-for="(job, index) in filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)"
					:key="index"
					:title="job.title"
					:description="job.description"
					:city="job.city"
					:filter="job.filter"
					:date="job.date"
					:url="job.id.toString()"
				/>

			</div>
		</div>
		<pagination :current-page="currentPage" :total-pages="totalPages" @page-change="handlePageChange" />
		<div class="text-darkgray mb-[20px] text-center xl:text-[20px] lg:text-[13px] text-[13px]">
        	Результаты {{ resultRangeStart }}-{{ resultRangeEnd }} из {{ filteredJobs.length }}
      	</div>
	</div>
	</div>
 </template>
 
 <script>
 import Search from "@/components/search/index.vue";
 import FilterJobs from "@/components/jobs/filterJobs.vue";
 import Pagination from '@/components/Pagination/pagination.vue';
 import jobs from "@/data/jobs.json";
 
 export default {
   data() {
	 return {
	   jobs: jobs,
	   filteredJobs: jobs,
	   selectedCity: "Все города",
	   selectedJob: "Все вакансии",
	   searchTerm: "",
	   currentPage: 1,
	   totalPages: 1,
       jobsPerPage: 5,
	 };
   },
   components: {
	 Search,
	 FilterJobs,
	 Pagination
   },
   watch: {
    $route() {
      this.filterQuery();
    },
	filteredJobs() {
    this.totalPages = Math.ceil(this.filteredJobs.length / this.jobsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
  },
},
created() {
	this.filterQuery();
   },
   computed: {
    resultRangeStart() {
      return (this.currentPage - 1) * this.jobsPerPage + 1;
    },
    resultRangeEnd() {
      const end = this.currentPage * this.jobsPerPage;
      return end > this.filteredJobs.length ? this.filteredJobs.length : end;
    },
    paginatedJobs() {
      const start = (this.currentPage - 1) * this.jobsPerPage;
      const end = this.currentPage * this.jobsPerPage;
      return this.filteredJobs.slice(start, end);
    },
  },
   methods: {
	 navigate(id) {
	   this.$router.push("/jobs_detail/" + id);
	 },
	 handlePageChange(newPage) {
      this.currentPage = newPage;
    },
	 filterQuery(){
		const query = this.$route.query;
		if (query.city) {
		this.selectedCity = query.city;
		}
		if (query.category) {
		this.selectedJob = query.category;
		}
		this.applyFilters();
	 },
	 filterCity(city) {
	   this.selectedCity = city;
       this.$router.push({ query: { city: city, category: this.selectedJob } });
	   this.applyFilters();
	 },

	 filterJob(selectedJob) {
	   this.selectedJob = selectedJob;
	   this.$router.push({ query: { city: this.selectedCity, category: selectedJob } });
	   this.applyFilters();
	 },
	 filterSearch(searchTerm) {
	   this.searchTerm = searchTerm.toLowerCase();
	   this.applyFilters();
	 },
	 clearSearch(){
		 this.searchTerm = "";
	 },
	 resetFilters() {
    	this.$router.push({ query: { city: 'Все города', category: 'Все вакансии' } });	
  	},
	 applyFilters() {
  		this.filteredJobs = this.jobs.filter((job) => {
    		const matchesCity = this.selectedCity === "Все города" || job.city === this.selectedCity;
    		const matchesJob = this.selectedJob === "Все вакансии" || job.filter === this.selectedJob;
    		const matchesSearch = !this.searchTerm ||
      		job.title.toLowerCase().includes(this.searchTerm) ||
      		job.description.toLowerCase().includes(this.searchTerm);
			return matchesCity && matchesJob && matchesSearch;
		});
		this.totalPages = Math.ceil(this.filteredJobs.length / this.jobsPerPage);
  		this.currentPage = 1; 
	},
   },
 };
 </script>
 