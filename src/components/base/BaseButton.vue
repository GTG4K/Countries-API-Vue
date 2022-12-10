<template>
  <button
    v-if="redirect === 'back'"
    :class="activeTheme"
    type="button"
    @click="goBack"
  >
    <i class="fas fa-caret-left"></i>
    <h2>Back</h2>
  </button>
  <button
    v-else-if="redirect === 'home'"
    :class="activeTheme"
    class="home"
    type="button"
    @click="goHome"
  >
    <i class="fas fa-home"></i>
  </button>
  <button v-else :class="activeTheme" type="button" @click="redirectTo">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'theme', 'redirect'],
  methods: {
    goBack() {
      this.$router.back();
    },
    goHome() {
      this.$router.replace(`/home`);
    },
    redirectTo() {
      if (this.redirect) {
        this.$router.push(`/country/${this.redirect}`);
      }
    },
  },
  computed: {
    activeTheme() {
      const theme = this.$store.getters.getTheme;
      return { light: theme === 'light', badge: this.theme === 'badge' };
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template: 1rem;
  padding: 1rem;
  border: none;
  gap: 0.8rem;
  width: 120px;
  border-radius: 8px;
  background: var(--dark-blue-100);
  height: var(--input-height);
  color: var(--color-light-200);
  box-shadow: 0 0 10px var(--dark-blue-300-shadow);
  cursor: pointer;
}
button.badge {
  height: fit-content;
  border-radius: 3px;
  padding: 0.5rem;
  width: fit-content;
  font-weight: 700;
}
.home {
  width: fit-content;
}
button.light {
  background: var(--color-light-100);
  color: var(--dark-blue-300);
  box-shadow: 0 0 10px var(--color-light-200-shadow);
}
button.light:hover {
  background: var(--color-light-100-hover);
}
button:hover {
  background: var(--dark-blue-100-hover);
}
</style>
