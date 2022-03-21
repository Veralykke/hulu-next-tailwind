const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetctTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetctActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  },
  fetctRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  },
  fetctMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  },
};
