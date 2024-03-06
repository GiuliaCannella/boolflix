<script>
export default {
    data() {
        return {
            searchText: ''
        }
    },
    emits: ['searchFilmHeader'],
}
</script>


<template>
    <div class="row">
        <div class="col-12 bg-dark container-header">
            <div class="row d-flex align-items-center">
                <div class="col-8">
                    <h1 class="text-danger ms-2">BOOLFLIX</h1>
                </div>
                <div class="col-4 d-flex">
                    <input type="text" v-model="searchText" class="form-control" placeholder="Cerca..">
                    <button @click="$emit('searchFilmHeader', searchText)" type="button"
                        class="btn btn-danger ms-3">Cerca</button>
                </div>
            </div>

        </div>

    </div>
</template>



<style lang="scss">
.container-header {
    padding: 1em 3em;
}
</style>