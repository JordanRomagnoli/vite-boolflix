<script>
    import { store } from '../store';

    export default {
        data() {
            return { 
                
                store
            }
        },
        props: {
            TvObj: Object,
            imageBackground: String,
        },
        methods:{
            formattFlag(){
                this.TvObj.original_language = this.TvObj.original_language.toUpperCase();

                if(this.TvObj.original_language == 'EN'){
                    this.TvObj.original_language = 'GB'
                }
                else if(this.TvObj.original_language == 'JA'){
                    this.TvObj.original_language = 'JP'
                }
                else if(this.TvObj.original_language == 'KO'){
                    this.TvObj.original_language = 'KR'
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
        <img v-if="TvObj.poster_path !== null" :src="imageBackground" alt="">
        <div v-else class="w-100 h-100 bg-danger d-flex justify-content-center align-items-center">
            <h3>Unknow</h3>
        </div>
        <div class="info">
            <h4>{{ TvObj.name }}</h4>
            <span>{{ TvObj.original_name }}</span>

            <div>
                <img :src="'https://flagsapi.com/'+ TvObj.original_language +'/flat/64.png'" alt="">
            </div>

            <div class="w-100">
                <i v-for="(elem, i) in 5" class="fa-star" :class="{
                    'fa-regular': roundedRating(TvObj.vote_average) <= i,
                    'fa-solid': roundedRating(TvObj.vote_average) > i,

                }"></i>
            </div>
            
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

        > .info{
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
            filter: opacity(0);
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

        }
    }
</style>
