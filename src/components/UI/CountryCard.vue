<template>
  <div class="country-card" :class="activeTheme">
    <img :src="image" alt="" />
    <div class="country-details">
      <h2>{{ name }}</h2>
      <div class="country-extras">
        <p>{{ countryPopulation }}</p>
        <p>{{ countryRegion }}</p>
        <p>{{ countryCapital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'name', 'population', 'region', 'capital'],
  computed: {
    countryPopulation() {
      return `Population: ${this.population}`;
    },
    countryRegion() {
      return `Region: ${this.region}`;
    },
    countryCapital() {
      return `Capital: ${this.capital}`;
    },
    activeTheme() {
      const theme = this.$store.getters.getTheme;
      return theme;
    },
  },
};
</script>

<style scoped>
.country-card {
  height: fit-content;
  background: var(--dark-blue-100);
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.country-card:hover {
  background: var(--dark-blue-100-hover);
  transition: all 0.3s ease;
}
.country-card.light {
  background: var(--color-light-100);
}
.country-card.light h2 {
  color: var(--dark-blue-300);
}
.country-card.light p {
  color: var(--dark-blue-400);
}
.country-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
.country-extras {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
img {
  aspect-ratio: 16/9;
  width: 100%;
}
h2 {
  color: var(--color-light-100);
  font-size: 1rem;
}
p {
  color: var(--color-light-200);
}
</style>
