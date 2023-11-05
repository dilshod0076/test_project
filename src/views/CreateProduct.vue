<template>
	<div >
		<h1>CreateProduct</h1>
		<button @click="saveProduct">Сохранить</button>
	</div>
</template>
<script>
export default{
	data() {
    return {
      product: {
      },
    };
  },
  methods: {
    saveProduct() {
		this.$router.push('/');
    },
  },
}
</script>