<script>
    import SingleFilm from './SingleFilm.vue';
    import SingleTrendFilm from './SingleTrendFilm.vue';
    import { store } from '../store';

    export default {
        data() {
            return { 
                store
            }
        },
        components: {

            SingleFilm,
            SingleTrendFilm
        }
    }
    </script>

<template>
    <div class=" container pt-5">

        <div v-if="this.store.flag == false" class="row justify-content-center  flex-wrap">
            <SingleTrendFilm v-for="(elem, i) in this.store.trendList"
            :key="i"
            :SingleObject="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            />
        </div>

        <div v-else class="row justify-content-center  flex-wrap">

            <SingleFilm v-for="(elem, i) in this.store.filmsList"
            :key="i"
            :FilmObj="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            :MediaName="elem.title"
            :OriginalMediaName="elem.original_title"/>

            <SingleFilm v-for="(elem, i) in this.store.TvList"
            :key="i"
            :FilmObj="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            :MediaName="elem.name"
            :OriginalMediaName="elem.original_name"/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @import '../assets/scss/main.scss';
</style>
