<template>
  <div class="home">
	<button @click="showCreateForm">Добавить заказ</button>
	<input type="date" v-model="startDate" placeholder="Начальная дата">
    <input type="date" v-model="endDate" placeholder="Конечная дата">
    <select v-model="selectedFilter">
      <option value="all">Все</option>
      <option value="completed">Завершенные</option>
      <option value="pending">В ожидании</option>
    </select>
    <button @click="applyFilter">Применить фильтр</button>
    <table>
    </table>
  </div>
</template>

<script>

export default {
	data() {
    return {
      startDate: '',
      endDate: '',
      selectedFilter: 'all',
      orders: [],
    };
  },
	methods: {
    showCreateForm() {
      this.$router.push('/create_product');
    },
	 applyFilter() {
      // Примените фильтры и обновите this.orders
    },
	}
}
</script>
