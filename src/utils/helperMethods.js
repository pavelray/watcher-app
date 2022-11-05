import { API_BASE_URL, MEDIA_TYPE } from "./constants";

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