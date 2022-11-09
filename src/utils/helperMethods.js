import { API_BASE_URL, MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "./constants";

export const getTrendingDataAPIUrl = (type) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/trending/tv/week?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        default: {
            return ''
        }
    }
}

export const getSimilarDataAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}/similar?api_key=${process.env.REACT_APP_TMD_API_KEY}&language=en-US&page=1`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}/similar?api_key=${process.env.REACT_APP_TMD_API_KEY}&language=en-US&page=1`
        }
        default: {
            return ''
        }
    }
}

export const getMovieDetailsDataAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        default: {
            return ''
        }
    }
}

export const getMovieCastDetailsDataAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}/credits?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}/credits?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        default: {
            return ''
        }
    }
}
export const getProvidersAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}/watch/providers?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}/watch/providers?api_key=${process.env.REACT_APP_TMD_API_KEY}`
        }
        default: {
            return ''
        }
    }
}

export const getAllCountriesAPIUrl = () => {
    return `${API_BASE_URL}/configuration/countries?api_key=${process.env.REACT_APP_TMD_API_KEY}`
}

export const getSearchUrl = (query) => {
    return `${API_BASE_URL}/search/multi?api_key=${process.env.REACT_APP_TMD_API_KEY}&language=en-US&query=${query}&page=1`
}


export const getGenre = (media, type) => {
    if (type === MEDIA_TYPE.MOVIE) {
        return MOVIE_GENRE.filter((element) =>
            media.genre_ids.includes(element.id)
        )
            .map((g) => g.name)
            .toString();
    }

    return TV_GENRE.filter((element) =>
        media.genre_ids.includes(element.id)
    )
        .map((g) => g.name)
        .toString();
};