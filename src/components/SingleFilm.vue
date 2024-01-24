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
            MediaName: String,
            OriginalMediaName: String,
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
            },
            roundedRating(x){
                x = Math.round(x);
                x = x / 2;
                x = Math.ceil(x);
                return x;
            }
        },
        mounted(){
            this.formattFlag();
        },
        updated(){
            this.formattFlag();
        }
        
       
    }
    </script>

<template>
   <div class="movie-card">
        <img v-if="FilmObj.poster_path !== null" :src="imageBackground" alt="">
        <div v-else class="w-100 h-100 bg-danger d-flex justify-content-center align-items-center">
            <h3>Unknow</h3>
        </div>
        <div class="info">
            <h5>{{ MediaName }}</h5>
            <span>{{ OriginalMediaName }}</span>

            <div>
                <img :src="'https://flagsapi.com/'+ FilmObj.original_language +'/flat/64.png'" alt="">
            </div>

            <div class="w-100">
                <i v-for="(elem, i) in 5" class="fa-star" :class="{
                    'fa-regular': roundedRating(FilmObj.vote_average) <= i,
                    'fa-solid': roundedRating(FilmObj.vote_average) > i,
                }"></i>
            </div>

            <p>
                {{ FilmObj.overview }}
            </p>
            
        </div>
   </div>
</template>

<style lang="scss" scoped>
    .movie-card{
        width: calc(100% / 5);
        margin: 20px 10px;
        height: 380px;
        border: 0.4px solid rgb(133, 0, 0);
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

        > .info{
            padding: 10px;
            width: 100%;
            height: 100%;
            padding-top: 10px;
            position: absolute;
            bottom: 0;
            color: white;
            background: rgb(0,6,70);
            background: linear-gradient(0deg, rgb(70, 0, 0) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.7) 100%); 
            text-align: center;
            filter: opacity(0);
            transition: all .2s ease-in-out;
            &:hover{
                filter: opacity(1);
            }
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
            >p{
                font-size: 0.8em;
            }

        }
    }
</style>
