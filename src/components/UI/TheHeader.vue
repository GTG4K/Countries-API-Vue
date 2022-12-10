<template>
  <header :class="activeTheme">
    <h2>Tarkhna Countries API</h2>
    <theme-switcher></theme-switcher>
  </header>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue';
export default {
  components: {
    ThemeSwitcher,
  },
  computed: {
    activeTheme() {
      const theme = this.$store.getters.getTheme;
      return theme;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 6rem;
  height: var(--header-height);
  background: var(--dark-blue-100);
  z-index: 1;
}
header.light {
  background: var(--color-light-100);
}
h2 {
  color: var(--color-light-100);
}
header.light h2 {
  color: var(--dark-blue-300);
}

@media only screen and (max-width: 800px) {
  header {
    padding: 0 2rem;
  }
}
@media only screen and (max-width: 550px) {
  h2 {
    font-size: 1.2rem;
  }
  header {
    padding: 0 1rem;
  }
}
@media only screen and (max-width: 420px) {
  h2 {
    font-size: 1rem;
  }
}
</style>
