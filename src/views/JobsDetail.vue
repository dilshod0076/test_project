<template>
	<div>
	 <Header/>
	 <JobDetail/>
	</div>
</template>
<script>
import Header from '@/components/Header.vue';
import JobDetail from '@/components/jobs/jobDetail.vue';
export default{
	components: {
		Header,
		JobDetail
	}
}
</script>