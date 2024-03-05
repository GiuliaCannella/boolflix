<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { API_URLS } from './services/apiUrls';
import apiServices from './services/apiService';

export default {
  components: {
    Header,
    Main
  },
  data() {
    return {
      search: '',
      films: [],
      series: []
    }
  },
  methods: {
    ricercaFilm(inputValue) {
      this.search = inputValue;
      this.getFilm();
      this.getSerie();
    },
    async getFilm() {
      let params = {
        query: this.search,
      }
      const response = await apiServices.get(API_URLS.SEARCH_MOVIES, params);
      this.films = response.results;


    },
    async getSerie() {
      let params = {
        query: this.search,
      }
      const response = await apiServices.get(API_URLS.SEARCH_TV, params);
      this.series = response.results;
    }
  }
}
</script>

<template>

  <div class="container-fluid">
    <Header @ricerca="ricercaFilm($event)" />
    <Main :films="films" />

  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>