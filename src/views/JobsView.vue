<template>
	<div>
	 <Header/>
	 <Jobs/>
	</div>
 </template>
 
 <script>
 import Header from '@/components/Header.vue';
 import Jobs from '@/components/jobs/index.vue'
 export default {
	 components: {
		 Header,
		 Jobs
	 },
 }
 </script>
 