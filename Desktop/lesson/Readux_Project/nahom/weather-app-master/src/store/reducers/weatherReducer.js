import {
    CHANGE_CITY, FETCH_AUTOCOMPLETE, FETCH_AUTOCOMPLETE_ERROR,
    FETCH_AUTOCOMPLETE_SUCCESS, FETCH_DAILY_WEATHER, FETCH_DAILY_WEATHER_SUCCESS,
    FETCH_DAILY_WEATHER_ERROR, FETCH_WEEKLY_WEATHER, FETCH_WEEKLY_WEATHER_SUCCESS,
    FETCH_WEEKLY_WEATHER_ERROR, TOGGLE_PAGES, HIDE_ERROR
} from '../types';

const initialState = {
    loading: true,
    togglePages: false,
    query: 'hamburg',
    cities: [],

    city_key: "178556",
    city_name: "hamburg",

    selectedKey: "323091",
    selectedCity: 'Berlin',
    iconNumber: '01',
    currentDailyTemp: '--',
    currentWeeklyTemp: ['--'],
    currentWeeklyForecast: [],
    showError: false,
    errorMessage: ""
}

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_AUTOCOMPLETE:
            return {
                ...state,
                loading: false,
                searchOptions: action.payload
            }

        case FETCH_AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedCity: action.payload.Name,
                selectedKey: action.payload.Key,
                searchOptions: []
            }

        case FETCH_AUTOCOMPLETE_ERROR:
            return {
                loading: false,
                showError: true,
                errorMessage: action.payload
            }

        case CHANGE_CITY:
            return {
                ...state,
                query: action.payload,
                loading: false,
            }

        case FETCH_DAILY_WEATHER:
            return {
                ...state,
                loading: true,
                currentDailyTemp: action.payload

            }

        case FETCH_DAILY_WEATHER_SUCCESS:
            return {
                ...state,
                currentDailyTemp: action.payload.temp,
                iconNumber: action.payload.icon,
                loading: false
            }

        case FETCH_DAILY_WEATHER_ERROR:
            return {
                ...state,
                loading: false,
                showError: true,
                errorMessage: action.payload
            }

        case FETCH_WEEKLY_WEATHER:
            return {
                ...state,
                loading: true
            }

        case FETCH_WEEKLY_WEATHER_SUCCESS:
            return {
                ...state,
                currentWeeklyForecast: action.payload,
                loading: false
            }

        case FETCH_WEEKLY_WEATHER_ERROR:
            return {
                ...state,
                loading: false,
                showError: true,
                errorMessage: action.payload 
            }

        case TOGGLE_PAGES:
            return {
                ...state,
                togglePages: action.payload
            }

        case HIDE_ERROR:
            return {
                ...state,
                showError: false
            }
        
        default: return state
    }
}