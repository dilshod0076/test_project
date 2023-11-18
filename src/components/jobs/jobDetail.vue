<template>
	<div class="px-[250px] my-[100px]">
		<h1>{{ job.title }}</h1>
		<div>
			<h4 class="mt-[40px] mb-[50px] text-darkgray">{{ job.date }}, {{ job.city }}, {{ job.filter }}</h4>
		</div>
		<div class="flex">
		<div class="bg-graykg min-w-[447px] max-h-[750px] p-[30px] rounded-[10px] mb-[20px] mr-[40px]">
			<div class="h8 mb-[32px] text-black">Откликнуться на вакансию</div>
			<div>
				<input class="py-[22px] w-full mb-[20px] rounded-[10px] pl-[22px] text-[22px]" type="text" placeholder="Имя" required>
				<input class="py-[22px] w-full mb-[20px] rounded-[10px] pl-[22px] text-[22px]" type="text" placeholder="Фамилия" required>
				<input class="py-[22px] w-full mb-[20px] rounded-[10px] pl-[22px] text-[22px]" type="email" placeholder="E-mail" required>
				<input class="py-[22px] w-full mb-[20px] rounded-[10px] pl-[22px] text-[22px]" type="number" placeholder="Телефон" required>
				<button class="py-[15px] w-full mb-[20px] rounded-[10px] bg-mediumgray text-[#FFF]"><h4>Прикрепить резюме (.pdf)</h4></button>
				<button class="py-[15px] w-full rounded-[10px] bg-lime"><h4>Откликнуться</h4></button>
			</div>
		</div>
			<div class="text-[#0A0B0B]">
				<div class="mb-[80px]"><h4>{{ job.description }}</h4></div>
				<ul class="">
					<li v-for="responsibility in job.responsibilities" :key="responsibility.title">
               <h2 class="mb-[40px]">{{ responsibility.title }}</h2>
						<ul class="">
                		<li class="my-4 flex mx-0 list-disc" v-for="item in responsibility.text" :key="item">
                  	<img class="w-[15px] h-[15px] mt-3 mr-4" src="@/assets/img/Vector.svg" alt=""><h4>{{ item }}</h4>
							</li>
             		 </ul>
            	</li>

					<li class="mt-[80px]" v-for="requirement in job.requirements" :key="requirement.title">
               <h2 class="mb-[40px]">{{ requirement.title }}</h2>
						<ul class="">
                		<li class="my-4 flex mx-0" v-for="item in requirement.text" :key="item">
								<img class="w-[15px] h-[15px] mt-3 mr-4" src="@/assets/img/Vector.svg" alt=""><h4>{{ item }}</h4>
							</li>
             		 </ul>
            	</li>

					<li class="mt-[80px]" v-for="condition in job.conditions" :key="condition.title">
               <h2 class="mb-[40px]">{{ condition.title }}</h2>
						<ul class="">
                		<li class="my-4 flex mx-0" v-for="item in condition.text" :key="item">
								<img class="w-[15px] h-[15px] mt-3 mr-4" src="@/assets/img/Vector.svg" alt=""><h4>{{ item }}</h4>
							</li>
             		 </ul>
            	</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import jobs from '@/data/jobs';

export default {
  data() {
	 return {
		
	 };
  },
  created() {
	 this.jobId = this.$route.params.id;
	 this.job = this.getJobById(this.jobId);
  },
  methods: {
	 getJobById(id) {
		return jobs.find(job => job.id === id) || {};
	 },
  },
  computed: {
  job() {
	 const jobId = Number(this.$route.params.id);
	 return jobs.find(job => job.id === jobId) || {};
  },
},
};
</script>