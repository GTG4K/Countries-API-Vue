<template>
  <loading-spinner class="fix-mid" v-if="!dataLoaded"></loading-spinner>
  <div v-else class="action">
    <base-search
      v-model="search"
      placeholder="Search for a country..."
    ></base-search>
    <base-select v-model="selectedRegion"></base-select>
  </div>
  <div class="country-grid" v-if="dataLoaded === true">
    <country-card
      v-for="country in filteredCountries"
      :key="country.name.official"
      :image="country.flags.png"
      :name="country.name.official"
      :population="country.population"
      :region="country.region"
      :capital="country.capital"
      :redirect="country.name.official"
    ></country-card>
  </div>
</template>

<script>
import BaseSearch from '@/components/base/BaseSearch.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import CountryCard from '@/components/UI/CountryCard.vue';

export default {
  components: {
    BaseSearch,
    BaseSelect,
    CountryCard,
  },
  data() {
    return {
      data: null,
      dataLoaded: false,
      search: '',
      selectedRegion: 'All',
    };
  },
  watch: {
    search() {
      console.log(this.search);
    },
  },
  created() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        this.dataLoaded = true;
      });
  },
  computed: {
    filteredCountries() {
      const countries = [];
      if (this.selectedRegion === 'All') {
        if (this.search === '') return this.data;
        for (const country of this.data) {
          if (
            country.name.official
              .toLowerCase()
              .includes(this.search.toLowerCase())
          ) {
            countries.push(country);
          }
        }
      }

      for (const country of this.data) {
        if (country.region === this.selectedRegion) {
          if (
            country.name.official
              .toLowerCase()
              .includes(this.search.toLowerCase())
          ) {
            countries.push(country);
          }
        }
      }
      return countries;
    },
  },
};
</script>

<style scoped>
.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.country-grid {
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem;
}
.fix-mid {
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
