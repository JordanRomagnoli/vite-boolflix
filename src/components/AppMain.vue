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
        },
        methods:{
           
        }
    }
    </script>

<template>
    <div class="container pt-5 position-relative">

        <div v-if="this.store.flag == false" class="row justify-content-center flex-wrap">

            <div class="col-12 text-white">
                <h2 class="m-0">I più visti di oggi</h2>
            </div>

            <SingleTrendFilm v-for="(elem, i) in this.store.trendList"
            :key="i"
            :SingleObject="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            />
        </div>

        <div v-else class="row justify-content-center  flex-wrap">

            <div class="col-12 text-white">
                <h2 class="m-0">Film</h2>
            </div>
            <SingleFilm v-for="(elem, i) in this.store.filmsList"
            :key="i"
            :FilmObj="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            :MediaName="elem.title"
            :OriginalMediaName="elem.original_title"
            :media="'movie'"
            />

            <div class="col-12 text-white my-3">
                <h2 class="m-0">Tv Series</h2>
            </div>
            <SingleFilm v-for="(elem, i) in this.store.TvList"
            :key="i"
            :FilmObj="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            :MediaName="elem.name"
            :OriginalMediaName="elem.original_name"
            :media="'tv'"/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @import '../assets/scss/main.scss';
</style>
