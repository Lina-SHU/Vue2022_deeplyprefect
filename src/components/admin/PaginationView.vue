<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: pages.current_page === 1 }">
        <a
          class="page-link"
          href="#"
          @click.prevent="getPage(pages.current_page - 1)"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page + 'page'"
        :class="{ active: page === pages.current_page }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="getPage(page)"
          :class="{ 'point-none': page === pages.current_page }"
          >{{ page }}</a
        >
      </li>
      <li
        class="page-item"
        :class="{ disabled: pages.current_page === pages.total_pages }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="getPage(pages.current_page + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages"],
  emit: ["getCurrentPage"],
  methods: {
    getPage(page) {
      if (page === this.pages.current_page) return
      this.$emit("getCurrentPage", page);
    },
  },
};
</script>
