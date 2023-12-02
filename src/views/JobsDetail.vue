<template>
	<div class="xL:w-[1920px] mx-auto flex">
	 <img class="absolute right-0 mt-[80px] hidden xl:block " src="@/assets/img/image-4.svg" alt="">
	 <JobDetail/>
	</div>
</template>
<script>
import JobDetail from '@/components/jobs/jobDetail.vue';
export default{
	components: {
		JobDetail
	}
}
</script>