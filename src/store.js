import { reactive } from "vue";

export const store = reactive({
    baseUrlCreate:'https://api.themoviedb.org/3/trending/all/day?api_key=8b1143c0f645e9868946688f9cb05dfe',
    baseUrlSearchMovie:'https://api.themoviedb.org/3/search/movie?api_key=8b1143c0f645e9868946688f9cb05dfe',
    baseUrlSearchTvSearies:'https://api.themoviedb.org/3/search/tv?api_key=8b1143c0f645e9868946688f9cb05dfe',
    searchInput: 'Batman',
    filmsList: [],
    TvList: [],
});