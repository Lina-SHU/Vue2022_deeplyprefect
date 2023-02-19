<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/productlist">Productlist</RouterLink> |
        <RouterLink to="/login">login</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>
