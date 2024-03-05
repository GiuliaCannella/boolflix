<script>
import Film from './Film.vue';
import Serie from './Serie.vue';
export default {
    data() {
        return {
        }
    },
    components: {
        Film,
        Serie
    },
    props: {
        films: array,
        series: array
    },
    methods: {

    }
}
</script>


<template>
    <Film :films="films" />
    <Serie :series="series" />
</template>



<style lang="scss"></style>