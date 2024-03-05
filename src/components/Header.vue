<script>

export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {

    },
    emits: [
        'ricerca'
    ]
}
</script>


<template>
    <div class="row bg-dark">
        <div class="col-12 ">
            <div class="row">
                <div class="col-8 d-flex align-items-center ">
                    <h1 class="text-danger">Boolflix</h1>
                </div>
                <div class="col-4 d-flex align-items-center ">
                    <input type="text" v-model="search" class="form-control" placeholder="Cerca..">
                    <button @click="$emit('ricerca', search)" type="button" class="btn btn-danger ms-3">Cerca</button>
                </div>
            </div>
        </div>
    </div>



</template>



<style lang="scss"></style>