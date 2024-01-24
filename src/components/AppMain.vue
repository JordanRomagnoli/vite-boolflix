<script>
    import SingleMedia from './SingleMedia.vue';
    import { store } from '../store';

    export default {
        data() {
            return { 
                store
            }
        },
        components: {

            SingleMedia
        }
    }
    </script>

<template>
    <div class="row justify-content-between flex-wrap">

        <SingleMedia/>
        
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/main.scss';
</style>
