<template>
  <div class="theme-switcher" :class="activeTheme" @click="toggleTheme">
    <i :class="themeIcon"></i>
    <h2>{{ themeText }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    activeTheme() {
      const theme = this.$store.getters.getTheme;
      return theme;
    },
    themeIcon() {
      return this.activeTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    },
    themeText() {
      return this.activeTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    },
  },
  methods: {
    toggleTheme() {
      this.$store.commit('toggleTheme');
    },
  },
};
</script>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
}
.theme-switcher:hover {
  background: var(--dark-blue-100-hover);
}
.theme-switcher.dark {
  color: var(--color-light-100);
}
.theme-switcher.light {
  color: var(--dark-blue-300);
}
.theme-switcher.light:hover {
  background: var(--color-light-200);
}
i {
  font-size: 1.2rem;
}
h2 {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
