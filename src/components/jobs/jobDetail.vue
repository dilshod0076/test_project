<template>
	<div class="xl:px-[250px] lg:px-[70px] px-[24px] xl:my-[50px] lg:my-[40px] my-[20px]">
		<button @click="goBack" class="bg-graykg rounded-[7px] px-[18px] py-[10px] text-[14px] xl:hidden lg:hidden">Назад</button>
		<h1 class="mt-[20px]">{{ job.title }}</h1>
		<div>
			<h4 class="xl:mt-[40px] lg:mt-[30px] mt-[20px] xl:mb-[50px] lg:mb-[40px] mb-[20px] text-darkgray">{{ job.date }}, {{ job.city }}, {{ job.filter }}</h4>
		</div>
		<div class="xl:flex-row lg:flex-row flex flex-col">
		<div class="container xl:order-1 lg:order-1 order-2 bg-graykg xl:min-w-[447px] xl:max-h-[750px] lg:max-h-[380px] xl:p-[30px] p-[15px] rounded-[10px] mb-[20px] mr-[40px]">
			<div class="xl:text-[32px] lg:text-[16px] text-[22px] font-black xl:mb-[32px] mb-[15px] text-black xl:w-full w-[182px]">Откликнуться на вакансию</div>
			<div>
				<input v-model="name" class="xl:py-[22px] lg:py-[11px] py-[19px] w-full xl:mb-[20px] mb-[10px] rounded-[10px] pl-[22px] xl:text-[22px] lg:text-[11px] text-[18px] outline-none" type="text" placeholder="Имя" required>
				<input v-model="surname" class="xl:py-[22px] lg:py-[11px] py-[19px] w-full xl:mb-[20px] mb-[10px] rounded-[10px] pl-[22px] xl:text-[22px] lg:text-[11px] text-[18px] outline-none" type="text" placeholder="Фамилия" required>
				<input v-model="email" class="xl:py-[22px] lg:py-[11px] py-[19px] w-full xl:mb-[20px] mb-[10px] rounded-[10px] pl-[22px] xl:text-[22px] lg:text-[11px] text-[18px] outline-none" type="email" placeholder="E-mail" required>
				<input v-model="phone" class="xl:py-[22px] lg:py-[11px] py-[19px] w-full xl:mb-[20px] mb-[10px] rounded-[10px] pl-[22px] xl:text-[22px] lg:text-[11px] text-[18px] outline-none" type="number" placeholder="Телефон" required>
				<button @click="openFileExplorer" class="xl:py-[15px] lg:py-[11px] py-[19px] w-full xl:mb-[20px] mb-[10px] rounded-[10px] bg-mediumgray hover:bg-darkgray text-[#FFF] xl:text-[26px] lg:text-[13px] text-[18px]">Прикрепить резюме (.pdf)</button>
				<button type="submitForm" class="cursor-not-allowed xl:py-[15px] lg:py-[11px] py-[19px] w-full rounded-[10px] bg-lime disabled:bg-opacity-50 xl:text-[26px] lg:text-[13px] text-[18px]" :disabled="isSubmitDisabled">Откликнуться</button>
			</div>	
		</div>
			<div class="text-[#0A0B0B] xl:order-2 lg:order-2 order-1">
				<div class="xl:mb-[80px] lg:mb-[50px] mb-[20px] xl:text-[26px] text-[17px] xl:bg-body lg:bg-body bg-graykg xl:p-0 lg:p-0 p-5 rounded-[10px]">{{ job.description }}</div>
				<ul class="">
				<li class="xl:bg-body lg:bg-body bg-graykg xl:p-0 lg:p-0 p-5 rounded-[10px]" v-for="responsibility in job.responsibilities" :key="responsibility.title">
               		<h2 class="xl:mb-[40px] lg:mb-[25px] mb-[10px]">{{ responsibility.title }}</h2>
						<ul>
                			<li class="my-4 flex mx-0 list-disc xl:text-[26px] text-[17px]" v-for="item in responsibility.text" :key="item">
                  				<img class="xl:w-[15px] xl:h-[15px] w-[7px] h-[7px] xl:mt-3 mt-2 mr-4" src="@/assets/img/Vector.svg" alt="">{{ item }}
							</li>
             		 	</ul>
            	</li>
				<li class="xl:mt-[80px] lg:mt-[50px] mt-[20px] xl:bg-body lg:bg-body bg-graykg xl:p-0 lg:p-0 p-5 rounded-[10px]" v-for="requirement in job.requirements" :key="requirement.title">
               		<h2 class="xl:mb-[40px] lg:mb-[25px] mb-[10px]">{{ requirement.title }}</h2>
						<ul>
                			<li class="my-4 flex mx-0 xl:text-[26px] text-[17px]" v-for="item in requirement.text" :key="item">
								<img class="xl:w-[15px] xl:h-[15px] w-[7px] h-[7px] xl:mt-3 mt-2 mr-4" src="@/assets/img/Vector.svg" alt="">{{ item }}
							</li>
             		 	</ul>
            	</li>
				<li class="xl:mt-[80px] lg:mt-[50px] mt-[20px] xl:bg-body lg:bg-body bg-graykg mb-[20px] xl:p-0 lg:p-0 p-5 rounded-[10px]" v-for="condition in job.conditions" :key="condition.title">
               		<h2 class="xl:mb-[40px] lg:mb-[25px] mb-[10px]">{{ condition.title }}</h2>
						<ul>
                			<li class="my-4 flex mx-0 xl:text-[26px] text-[17px]" v-for="item in condition.text" :key="item">
								<img class="xl:w-[15px] xl:h-[15px] w-[7px] h-[7px] xl:mt-3 mt-2 mr-4" src="@/assets/img/Vector.svg" alt="">{{ item }}
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
	  name: '',
      surname: '',
      email: '',
      phone: '',
	  jobData: {}, 
	 };
  },
  created() {
	 this.jobId = this.$route.params.id;
	 this.jobData = this.getJobById(this.jobId);
  },
  
  methods: {
	openFileExplorer() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.pdf';
      fileInput.style.display = 'none';
      document.body.appendChild(fileInput);
      fileInput.addEventListener('change', this.handleFileSelected);
      fileInput.click();
    },
    handleFileSelected(event) {
      const selectedFile = event.target.files[0];
      console.log('Selected file:', selectedFile.name);
      event.target.remove();
    },
    submitForm() {
      if (this.validateForm()) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form validation failed');
      }
    },
    validateForm() {
      return this.name && this.surname && this.email && this.phone;
    },
	 getJobById(id) {
		return jobs.find(job => job.id === id) || {};
	 },
	 goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
	isSubmitDisabled() {
      return !this.validateForm();
    },
  job() {
	 const jobId = Number(this.$route.params.id);
	 return jobs.find(job => job.id === jobId) || {};
  },
},
};
</script>