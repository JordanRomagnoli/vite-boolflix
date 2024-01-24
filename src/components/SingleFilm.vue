<script>
    import { store } from '../store';

    export default {
        data() {
            return { 
                
                store
            }
        },
        props: {
            FilmObj: Object,
            imageBackground: String,
        },
        methods:{
            formattFlag(){
                this.FilmObj.original_language = this.FilmObj.original_language.toUpperCase();

                if(this.FilmObj.original_language == 'EN'){
                    this.FilmObj.original_language = 'GB'
                }
                else if(this.FilmObj.original_language == 'JA'){
                    this.FilmObj.original_language = 'JP'
                }
                else if(this.FilmObj.original_language == 'KO'){
                    this.FilmObj.original_language = 'KR'
                }
            }
        },
        mounted(){
            this.formattFlag();
            console.log(this.FilmObj.original_language);
        }
        
       
    }
    </script>

<template>
   <div class="movie-card">
        <img v-if="FilmObj.poster_path !== null" :src="imageBackground" alt="">
        <div v-else class="w-100 h-100 bg-danger d-flex justify-content-center align-items-center">
            <h3>Unknow</h3>
        </div>
        <div class="">
            <h4>{{ FilmObj.title }}</h4>
            <span>{{ FilmObj.original_title }}</span>

            <div>
                <img :src="'https://flagsapi.com/'+ FilmObj.original_language +'/flat/64.png'" alt="">
            </div>

            <span>{{ FilmObj.vote_average }}</span>
        </div>
   </div>
</template>

<style lang="scss" scoped>
    .movie-card{
        width: calc(100% / 5);
        margin: 20px 10px;
        height: 380px;
        border: 0.4px solid white;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
        background-color: white;
        position: relative;

        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        > div{
            padding: 10px;
            width: 100%;
            height: 100%;
            padding-top: 120px;
            position: absolute;
            bottom: 0;
            color: white;
            background: rgb(0,6,70);
            background: linear-gradient(0deg, rgba(0,6,70,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.7) 100%); 
            text-align: center;
            span{
                display: block;
            }
            > div{
                width: 50px;
                margin: 0 auto;
                img{
                    width: 100%;
                }

            }

        }
    }
</style>
