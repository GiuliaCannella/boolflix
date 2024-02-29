<script>
import { API_URLS } from '../services/apiUrls';
export default {
    data() {
        return {
        }
    },
    props: {
        searchedFilmMain: Object
    },
    methods: {
        getImageUrl(posterPath) {
            if (posterPath != null) {
                const baseUrl = API_URLS.BASE_IMAGE_URL;
                const imageSize = 'w342';
                return `${baseUrl}${imageSize}${posterPath}`;
            }
        },
    },
}
</script>


<template>
    <div class="container">
        <h2>Serie Tv</h2>
        <div class="card-serie border" v-for="serie in searchedFilmMain.series">
            <p>{{ serie.name }}</p>
            <p>{{ serie.original_name }}</p>
            <p>{{ serie.original_language }}</p>
            <p>{{ serie.vote_average }}</p>
            <img :src="getImageUrl(serie.poster_path)" alt="">
        </div>
        <h2>Film</h2>
        <div class="card-film border" v-for="film in searchedFilmMain.films">
            <p>{{ film.title }}</p>
            <p>{{ film.original_title }}</p>
            <p>{{ film.original_language }}</p>
            <p>{{ film.vote_average }}</p>
        </div>
    </div>
</template>



<style lang="scss"></style>