import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../store/actions/weatherActions'
import  TOGGLE_PAGES from '../store/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faCloudSun from '@fortawesome/free-solid-svg-icons';
import WeeklyForecast from './weeklyForecast';
import './weather.css';
import Search from './search/search';

const Weather = () => {
    const dispatch = useDispatch();
    const weatherList = useSelector(state => state.weatherList);
    const { loading, selectedKey, selectedCity, currentDailyTemp, showError, errorMessage, iconNumber, togglePages, isSelectedInFavorite, currentWeeklyForecast } = weatherList;

    useEffect(() => {
        dispatch(getWeather())
    }, [dispatch]);


    let iconUrl = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;

    return (
        <div>
            <div className="mainPage">
                <header>
                
                </header>
                
                
                <div className={togglePages ? "hide" : "show"}> 
                    <Search/>

                    <div className="dailyWeather">
                        <span id="cityName">
                            {selectedCity}
                        </span>

                        <div id="currentDailyTemp">
                            <span>
                                {currentDailyTemp}°
                            </span>
                        </div>
                        <div className="icon">
                            <img src={iconUrl} alt="" />
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div className="weeklyWeather">
                        <WeeklyForecast data={currentWeeklyForecast} />
                    </div>
                </div>

                {/* <div id="errorWrapper">
                    <div id="errorToast" className={showError ? "show" : ""}>
                        {errorMessage}
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default Weather;
