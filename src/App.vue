<template>
  <the-header></the-header>
  <main :class="activeTheme">
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  computed: {
    activeTheme() {
      const theme = this.$store.getters.getTheme;
      return theme;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;800&display=swap');

:root {
  --font-family: 'Nunito Sans', sans-serif;

  --dark-blue-100: hsl(209, 23%, 20%);

  --dark-blue-100-hover: hsl(209, 25%, 25%);
  --dark-blue-200: hsl(207, 26%, 15%);
  --dark-blue-300: hsl(200, 15%, 10%);
  --dark-blue-300-shadow: hsla(197, 14%, 10%, 0.5);

  --color-light-100: hsl(0, 0%, 98%);
  --color-light-100-background: hsl(0, 0%, 90%);
  --color-light-100-hover: hsl(0, 0%, 80%);
  --color-light-200: hsl(0, 0%, 70%);
  --color-light-200-shadow: hsl(0, 0%, 70%, 0.5);
  --color-light-300: hsl(0, 0%, 50%);
  --color-light-400: hsl(0, 0%, 30%);

  --color-white: hsl(0, 0%, 100%);
  --header-height: 80px;
  --input-height: 45px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
  transition: color 0.2s;
}
main {
  margin-top: var(--header-height);
  background: var(--dark-blue-200);
  min-height: calc(100vh - 80px);
  padding: 1rem 6rem;
}
main.light {
  background: var(--color-light-100-background);
}
</style>
