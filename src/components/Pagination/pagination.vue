<template>
  <nav class="flex justify-center xl:mt-[50px] xl:mb-[20px] lg:mt-[40px] lg:mb-[15px] mt-[20px] mb-[10px]" v-if="totalPages > 1">
    <ul class="flex list-none">
      <li class="pagination" @click="changePage(1)" :class="{ 'disabled': currentPage === 1 }">
        <img class="xl:mt-[5px] lg:mt-[2px]" :disabled="currentPage === 1" src="@/assets/img/back.svg" alt="">
      </li>
      <li class="pagination xl:text-[26px] lg:text-[17px] text-[16px] text-darkgray xl:px-[27px] lg:px-[22px] px-[22px]" v-for="pageNumber in visiblePagesRange" :key="pageNumber" @click="changePage(pageNumber)" :class="{ 'bg-[#FFF] border-2 border-lime text-black hover:bg-[#FFF]': currentPage === pageNumber }">
        <a>{{ pageNumber }}</a>
      </li>
      <li class="pagination" v-if="currentPage !== totalPages" @click="goToNextPages">
        <img class="xl:mt-[5px] lg:mt-[2px]" src="@/assets/img/go.svg" alt="">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    visiblePages: {
      type: Number,
      default: 3
    }
  },
  methods: {
  changePage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages && pageNumber !== this.currentPage) {
      this.$emit('page-change', pageNumber);
      this.$nextTick(() => {
        this.scroll();
      });
    }
  },
  goToNextPages() {
    const nextStartPage = this.currentPage + 1;
    const nextEndPage = Math.min(nextStartPage + this.visiblePages - 1, this.totalPages);

    if (nextStartPage <= this.totalPages) {
      this.$emit('page-change', nextStartPage);
      this.$nextTick(() => {
        this.scroll();
      });
    }
  },
  scroll() {
    if (this.currentPage !== 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
},

  computed: {
    visiblePagesRange() {
      const startPage = Math.max(1, this.currentPage - Math.floor(this.visiblePages / 2));
      const endPage = Math.min(startPage + this.visiblePages - 1, this.totalPages);
      const range = [];

      for (let i = startPage; i <= endPage; i++) {
        range.push(i);
      }

      return range;
    },
  }
};
</script>

<style>
.pagination {
  @apply cursor-pointer xl:px-[20px] xl:py-[15px] lg:px-[12px] lg:py-[10px] px-[12px] py-[9px] xl:mr-[20px] lg:mr-[15px] mr-[10px] bg-lightgray hover:bg-regulargray rounded-[10px];
}
</style>
