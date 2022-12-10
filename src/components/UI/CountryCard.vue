<template>
  <div class="country-card" :class="activeTheme" @click="redirectTo">
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
  props: ['image', 'name', 'population', 'region', 'capital', 'redirect'],
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
  methods: {
    redirectTo() {
      this.$router.push(`/country/${this.redirect}`);
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
  box-shadow: 0 0 10px var(--dark-blue-300-shadow);
}
.country-card:hover {
  background: var(--dark-blue-100-hover);
  transition: all 0.3s ease;
}
.country-card.light {
  background: var(--color-light-100);
  box-shadow: 0 0 10px 3px var(--color-light-200);
}
.country-card.light:hover {
  background: var(--color-light-100-hover);
  box-shadow: 0 0 10px var(--color-light-200-shadow);
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
