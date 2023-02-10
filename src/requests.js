const API_K ="e9384cb18e56b2229fd67d00046c086d";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_K}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_K}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_K}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_K}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_K}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_K}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_K}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_K}&with_genres=99`,
 }
export default requests;