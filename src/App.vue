<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { API_URLS } from './services/apiUrls';
import apiServices from './services/apiService';

export default {
  data() {
    return {
      search: '',
      response: {}
    }
  },
  components: {
    Header,
    Main
  },
  methods: {
    getSearchedFilm(inputValue) {
      this.search = inputValue;
      this.searchFilmByName();
    },
    async searchFilmByName() {
      if (!this.search !== '') {
        let params = {
          query: this.search
        };
        this.response = await apiServices.get(API_URLS.SEARCH_MOVIES, params);
      }
    }
  }
}
</script>


<template>
  <!-- <FontAwesomeIcon icon="fas fa-bolt-lightning" /> -->
  <div class="container-fluid">
    <Header @searchFilmHeader="getSearchedFilm($event)" />
    <Main :searchedFilmMain="response" />
  </div>
</template>



<style lang="scss">
@use './assets/scss/style.scss'
</style>