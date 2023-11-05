<template>
	<div>
	<button @click="editProduct">Редактировать</button>
    <button @click="deleteProduct">Удалить</button>
	</div>
</template>
<script>
export default{
	methods: {
    editProduct() {
      this.$router.push(`/edit_product/${this.productId}`);
    },
    deleteProduct() {
		this.$router.push('/');
    },
  },
}
</script>