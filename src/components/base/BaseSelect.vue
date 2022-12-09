<template>
  <div class="select" :class="activeTheme">
    <div class="select-body" @click="toggleActive">
      <p>{{ selectedRegion }}</p>
      <i class="fas fa-caret-down" :class="optionsActive"></i>
    </div>
    <div class="select-options" :class="optionsActive">
      <div
        class="option"
        v-for="region in regions"
        :key="region"
        @click="changeRegion(region)"
      >
        {{ region }}
      </div>
    </div>
    <div class="backdrop"></div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      selectedOption: this.modelValue,
      active: false,
      regions: ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
    changeRegion(region) {
      this.selectedOption = region;
      this.active = false;
      this.$emit('update:modelValue', this.selectedOption);
    },
  },
  computed: {
    optionsActive() {
      return { active: this.active };
    },
    selectedRegion() {
      return this.selectedOption === 'All'
        ? this.selectedOption
        : this.selectedOption;
    },
    activeTheme() {
      const theme = this.$store.getters.getTheme;
      return theme;
    },
  },
};
</script>

<style scoped>
.select {
  position: relative;
}
.select-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 8px;
  background: var(--dark-blue-100);
  height: var(--input-height);
  color: var(--color-light-200);
  width: 180px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
}
.select.light .select-body {
  background: var(--color-light-100);
  color: var(--dark-blue-300);
}
.select.light .select-body:hover {
  background: var(--color-light-100-hover);
}
.select-body:hover {
  color: var(--color-light-100);
  background: var(--dark-blue-100-hover);
  transition: all 0.2s ease;
}
.select-options {
  position: absolute;
  top: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  width: 180px;
  max-height: 0px;
  border-radius: 8px;
  color: var(--color-light-200);
  background: var(--dark-blue-100);
  overflow: hidden;
  transition: all 0.5s ease;
}
.select.light .select-options {
  background: var(--color-light-100);
  color: var(--dark-blue-300);
}
.active.select-options {
  max-height: 170px;
  transition: all 0.5s ease;
}
.option {
  padding: 0.2rem 1rem;
  transition: all 0.2s ease;
}
.option:hover {
  cursor: pointer;
  padding: 0.2rem 1.5rem;
  color: var(--color-light-100);
  background: var(--dark-blue-100-hover);
}
.select.light .option:hover {
  color: var(--dark-blue-300);
  background: var(--color-light-100-hover);
}
i {
  transition: all 0.4s ease;
}
i.active {
  transform: rotate(-180deg);
}
</style>
