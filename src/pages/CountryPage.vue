<template>
  <loading-spinner class="fix-mid" v-if="!dataLoaded"></loading-spinner>
  <div v-else class="action">
    <base-button redirect="home"></base-button>
    <base-button redirect="back"></base-button>
  </div>
  <div class="country-full-details" v-if="dataLoaded" :class="activeTheme">
    <img :src="country.flags.svg" alt="" />
    <div class="country-details">
      <h2>{{ country.name.official }}</h2>
      <div class="country-extras">
        <div class="extras">
          <p>{{ nativeName }}</p>
          <p>{{ population }}</p>
          <p>{{ region }}</p>
          <p>{{ subRegion }}</p>
          <p>{{ capital }}</p>
        </div>
        <div class="extras">
          <p>{{ topLevelDomain }}</p>
          <p>{{ currencies }}</p>
          <p>{{ languages }}</p>
        </div>
      </div>
      <div class="border-countries">
        <p>Border Countries:</p>
        <div v-if="!borderCountries">
          <base-button theme="badge"> No friends :( </base-button>
        </div>
        <div v-else class="border-country-badges">
          <base-button
            v-for="country in borderCountries"
            :key="country.name.official"
            :redirect="country.name.official"
            theme="badge"
          >
            {{ country.name.common }}
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
export default {
  props: ['id'],
  data() {
    return {
      country: null,
      borderCountries: [],
      dataLoaded: false,
    };
  },
  components: { BaseButton },
  watch: {
    $route() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.borderCountries = [];
      this.dataLoaded = false;

      fetch(`https://restcountries.com/v3.1/name/${this.id}?fullText=true`)
        .then((response) => response.json())
        .then((data) => {
          this.country = data[0];
          const borders = this.country.borders;
          if (!borders) {
            this.borderCountries = null;
            this.dataLoaded = true;
          } else {
            borders.forEach((border) => {
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((response) => response.json())
                .then((data) => {
                  this.borderCountries.push(data[0]);
                  console.log(this.borderCountries);
                  if (borders.length === this.borderCountries.length) {
                    this.dataLoaded = true;
                  }
                });
            });
          }
        });
    },
  },
  computed: {
    nativeName() {
      const nativeLang = Object.keys(this.country.languages)[0];
      const nativeName = this.country.name.nativeName[nativeLang].official;
      return `Native Name: ${nativeName}`;
    },
    population() {
      const population = this.country.population;
      return `Population: ${population}`;
    },
    region() {
      const region = this.country.region;
      return `Region: ${region}`;
    },
    subRegion() {
      const subregion = this.country.subregion;
      return `Sub Region: ${subregion}`;
    },
    capital() {
      const capital = this.country.capital;
      return `Capital: ${capital}`;
    },
    topLevelDomain() {
      const tld = this.country.tld;
      return `Top Level Domain: ${tld}`;
    },
    currencies() {
      const activeCurrencies = Object.keys(this.country.currencies);
      const currencies = this.country.currencies[activeCurrencies[0]].name;
      return `Currencies: ${currencies}`;
    },
    languages() {
      const nativeLang = Object.keys(this.country.languages)[0];
      const languages = this.country.languages[nativeLang];
      return `Main Language: ${languages}`;
    },
    activeTheme() {
      const theme = this.$store.getters.getTheme;
      return theme;
    },
  },
};
</script>

<style scoped>
.action {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
.country-full-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
  align-items: center;
}
.country-details {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
img {
  width: 80%;
  box-shadow: 0 0 10px 3px var(--dark-blue-300-shadow);
}
.light img {
  box-shadow: 0 0 10px 3px var(--color-light-200-shadow);
}

.light h2 {
  color: var(--dark-blue-300);
}
h2 {
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--color-light-100);
}
.country-extras {
  display: flex;
  gap: 3rem;
}
.extras {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.country-extras p {
  color: var(--color-light-200);
}
.light .country-extras p {
  color: var(--dark-blue-200);
}
.border-countries {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-light-200);
}
.light .border-countries {
  color: var(--dark-blue-200);
}
.border-country-badges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.fix-mid {
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
}

@media only screen and (max-width: 1150px) {
  .country-full-details {
    gap: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .country-extras p {
    font-size: 0.9rem;
  }
  .extras {
    gap: 0.4rem;
  }
  img {
    width: 100%;
  }
}
@media only screen and (max-width: 800px) {
  .country-full-details {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .country-details {
    gap: 2rem;
  }
  .country-extras p {
    font-size: 1.1rem;
  }
  .country-extras {
    flex-direction: column;
  }
  img {
    width: 100%;
  }
  .border-countries {
    flex-direction: column;
    align-items: flex-start;
  }

  .border-countries p {
    color: var(--color-light-100);
    font-size: 1.2rem;
    font-weight: 700;
  }
}
</style>
