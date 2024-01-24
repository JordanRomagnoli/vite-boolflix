<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Axios from 'axios';


export default {
    data() {
        return { 
            
            store,
        }
    },
    components: {

        AppHeader,
        AppMain,
        
    },
    methods: {

        getResponse(){
            Axios.get(this.store.baseUrlSearchMovie, {
                params: {
                    query: this.store.searchInput.length > 0 ? this.store.searchInput : null,
                }
            })
            .then((res)=> {
                console.log('film', res);

                this.store.filmsList = [];
                
                for(let i = 0; i < res.data.results.length; i++){
                    this.store.filmsList.push(res.data.results[i])
                };

                console.log('film', this.store.filmsList);

            });

            Axios.get(this.store.baseUrlSearchMovie, {
                params: {
                    query: this.store.searchInput.length > 0 ? this.store.searchInput : null,
                }
            })
            .then((res)=> {
                console.log('serie tv', res);

                this.store.TvList = [];

                for(let i = 0; i < res.data.results.length; i++){
                    this.store.TvList.push(res.data.results[i])
                };

                console.log('serie tv', this.store.TvList);

            });
        },

    },
    created(){
        
    }
}
</script>

<template>

    <header>
        <AppHeader @userSearch="getResponse()"/>
    </header>

    <main>
        <AppMain/>
    </main>
    
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";

    body{
        background-color: black;
    }
</style>
