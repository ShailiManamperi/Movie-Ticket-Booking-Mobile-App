const apiKey:string = '3301c7e7e8b8a0359d1274da575e20d1';

export const nowPlayingMovies:string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upcomingMovies:string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const popularMovies:string = `https://api.themoviedb.org/3/movie/popularc`;
export const searchMovies = (keyword:string) =>{
    return `https://api.themoviedb.org/3/search/movie&query=${keyword}`;
};
export const movieDetails = (id:number) =>{
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
};
export const movieCreditsDetails = (id:number) =>{
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
};