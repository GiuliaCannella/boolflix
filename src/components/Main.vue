<script>
import Card from './Card.vue';
export default {
    data() {
        return {
        }
    },
    components: {
        Card
    },
    props: {
        searchedFilmMain: Object
    },
    methods: {
    },
}
</script>


<template>
    <div class="container">
        <h2>Serie Tv</h2>
        <div class="container-card w-100 d-flex flex-wrap">
            <Card v-for="serie in searchedFilmMain.series" class="card-boolflix" :title="serie.name"
                :original-title="serie.original_name" :language="serie.original_language" :vote="serie.vote_average"
                :img-url="serie.poster_path" />
        </div>
        <h2>Film</h2>
        <div class="container-card w-100 d-flex flex-wrap">
            <Card v-for="film in searchedFilmMain.films" class="card-boolflix" :title="film.title"
                :original-title="film.original_title" :language="film.original_language" :vote="film.vote_average"
                :img-url="film.poster_path" />
        </div>
    </div>
</template>



<style lang="scss"></style>