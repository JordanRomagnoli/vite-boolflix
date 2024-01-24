<script>
    import SingleFilmInfo from './SingleFilmInfo.vue';
    import { store } from '../store';

    export default {
        data() {
            return { 
                
                store
            }
        },
        components:{

            SingleFilmInfo
        },
        props: {
            FilmObj: Object,
            imageBackground: String,
        },
       
    }
    </script>

<template>
   <div class="movie-card">
        <img v-if="FilmObj.backdrop_path !== null" :src="imageBackground" alt="">
        <div v-else class="w-100 h-100 bg-danger d-flex justify-content-center align-items-center">
            <h3>Unknow</h3>
        </div>
        <div>
            <!--Qui si posiziona il componente per le info-->
            <SingleFilmInfo/>
        </div>
   </div>
</template>

<style lang="scss" scoped>
    .movie-card{
        width: calc(100% / 5);
        margin: 20px 10px;
        height: 380px;
        border: 1px solid white;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
        background-color: white;

        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
</style>
