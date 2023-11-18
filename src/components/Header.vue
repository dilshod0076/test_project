<template>
	<div class="w-full">
		<div class="flex bg-[#FFF] shadow-3xl px-[250px]">
			<router-link class="flex mr-[365px]" to="/">
				<img src="@/assets/img/logo.svg" alt="">
				<h2 class="text-lime pt-[50px]">Job</h2>
			</router-link>
			<div class="text-darkgray flex py-[44px]">
				<div class="mr-[80px] cursor-pointer">
					<router-link to="/jobs"><h6 @mouseover="showDiv(1)" @mouseout="hideDiv(1)">Все вакансии</h6></router-link>
					<div v-show="hoveredItem === 1" :class="['bg-lime', 'h-[6px]', 'rounded-t-lg', 'relative', 'top-11', 'mt-[-6px]']"></div>
				</div>
				<div class="mr-[80px] cursor-pointer">
					<router-link to="/jobs"><h6 @mouseover="showDiv(2)" @mouseout="hideDiv(2)">Работа в ИТ</h6></router-link>
					<div v-show="hoveredItem === 2" :class="['bg-lime', 'h-[6px]', 'rounded-t-lg', 'relative', 'top-11', 'mt-[-6px]']"></div>
				</div>
				<div class="mr-[80px] cursor-pointer">
					<router-link to="/jobs"><h6 @mouseover="showDiv(3)" @mouseout="hideDiv(3)">Маркетинг и реклама</h6></router-link>
					<div v-show="hoveredItem === 3" :class="['bg-lime', 'h-[6px]', 'rounded-t-lg', 'relative', 'top-11', 'mt-[-6px]']"></div>
				</div>
				<div class="cursor-pointer">
					<router-link to="/jobs" @click="selectCareerStart"><h6 @mouseover="showDiv(4)" @mouseout="hideDiv(4)">Начало карьеры</h6></router-link>
					<div v-show="hoveredItem === 4" :class="['bg-lime', 'h-[6px]', 'rounded-t-lg', 'relative', 'top-11', 'mt-[-6px]']"></div>
				</div>
			</div>
		</div>
		<div class="bg-lime h-[3px]">
    </div>
		
	</div>
</template>
<script>
export default {
  data() {
    return {
      hoveredItem: null,
    };
  },
  methods: {
    showDiv(item) {
      this.hoveredItem = item;
    },
    hideDiv() {
      this.hoveredItem = null;
    },
	 selectCareerStart() {
      this.$router.push({ path: '/jobs', query: { category: 'Начало карьеры' } });
    },
  },
};
</script>