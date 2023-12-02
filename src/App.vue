<template>
  <Header @toggleSidebar="toggleSidebar" />
  <Sidebar :isSidebarVisible="isSidebarVisible" @clearSidebar="clearSidebar" />
  <router-view/>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/sidebar.vue';
import Footer from '@/components/Footer.vue';
export default{
	components:{
		Header,
		Sidebar,
		Footer
	},
	data() {
    return {
      isSidebarVisible: false,
    };
  	},
    
	methods: {
	toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
	clearSidebar() {
      this.isSidebarVisible = false;
    },
	}
}
</script>
