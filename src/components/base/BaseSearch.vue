<template>
  <div class="search" :class="activeTheme">
    <i class="fas fa-search"></i>
    <input type="text" @input="updateInput" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'modelValue'],
  emits: ['update:modelValue'],
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
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
.search {
  background: var(--dark-blue-100);
  padding: 0 1.2rem;
  width: fit-content;
  height: var(--input-height);
  display: flex;
  gap: 1rem;
  border-radius: 8px;
  align-items: center;
  box-shadow: 0 0 10px var(--dark-blue-300-shadow);
}
.search.light {
  background: var(--color-light-100);
  box-shadow: 0 0 10px var(--color-light-200-shadow);
}
i {
  color: var(--color-light-100);
}
.search.light i {
  color: var(--dark-blue-300);
}
input {
  width: 318px;
  height: 100%;
  background: none;
  color: var(--color-light-100);
  border: none;
  outline: none;
}
input::placeholder {
  color: var(--color-light-200);
}
.search.light input {
  color: var(--dark-blue-300);
}
@media only screen and (max-width: 800px) {
  .search {
    width: 100%;
  }
}
</style>
