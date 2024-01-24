<script>
    import SingleFilm from './SingleFilm.vue';
    import SingleTv from './SingleTv.vue';
    import { store } from '../store';

    export default {
        data() {
            return { 
                store
            }
        },
        components: {

            SingleFilm,
            SingleTv,
        }
    }
    </script>

<template>
    <div class=" container-lg pt-5">
        <div class="row justify-content-center  flex-wrap">
            <SingleFilm v-for="(elem, i) in this.store.filmsList"
            :key="i"
            :FilmObj="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"/>

            <SingleTv v-for="(element, index) in this.store.TvList"
            :key="index"
            :TvObj="element"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+element.poster_path"/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @import '../assets/scss/main.scss';
</style>
