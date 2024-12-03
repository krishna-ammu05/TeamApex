import React, { FormEvent, useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

type InitiProps = {
  name: string;
};

interface InitCountry {
  capital: string[];
  population: number;
  latlng: number[];
  flags: {
    svg: string;
  };
}

interface InitCountryWeatherInfo {
  temperature: number;
  weather_icons: string[];
  wind_speed: number;
  precip: number;
}

export const CountryDetails: React.FC = () => {
  const { name } = useParams<InitiProps>();
  const [countryInfo, setCountryInfo] = useState<InitCountry>();
  const [capitalName, setCapitalName] = useState('');
  const [weatherInfo, setWeatherInfo] = useState<InitCountryWeatherInfo>();
  const [countryApiError, setCountryApiError] = useState<boolean>(false);
  const [weatherApiError, setWeatherApiError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getCountryData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = response.data;
      setCountryInfo(data[0]);
      setCapitalName(data[0].capital[0]);
    } catch (error) {
      setCountryApiError(true);
    }
  }, [name]);

  useEffect(() => {
    getCountryData();
  }, [getCountryData]);

  const getWeatherDetails = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5&query=${capitalName}`
      );
      const data = response.data;
      setWeatherInfo(data.current);
      setLoading(false);
    } catch (error) {
      setWeatherApiError(true);
    }
  };

  const getBackToHome = (e: FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: 'url("https://your-image-url-here.jpg")', // Replace with your background image URL
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Country Details</h1>

        {countryInfo ? (
          <div data-testid="country-info" className="text-white text-center space-y-4">
            <p className="text-lg">
              <strong>Capital:</strong> {countryInfo.capital[0]}
            </p>
            <p className="text-lg">
              <strong>Population:</strong> {countryInfo.population.toLocaleString()}
            </p>
            <p className="text-lg">
              <strong>Latitude:</strong> {countryInfo.latlng[0]}
              <sup>°</sup>
            </p>
            <p className="text-lg">
              <strong>Longitude:</strong> {countryInfo.latlng[1]}
              <sup>°</sup>
            </p>
            <div className="mb-4">
              <small className="text-sm">Country Flag:</small>
              <img
                src={countryInfo.flags.svg}
                height="70px"
                alt="Country Flag"
                className="mx-auto mt-2"
              />
            </div>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
              onClick={getWeatherDetails}
            >
              Get Capital Weather
            </button>
          </div>
        ) : (
          <div className="text-white text-center">
            {countryApiError ? (
              <>
                <div className="bg-yellow-600 text-black p-4 mb-4 rounded-md">
                  Country info not found!
                </div>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 w-full"
                  onClick={getBackToHome}
                >
                  Please try again
                </button>
              </>
            ) : (
              <p className="text-lg">Loading...</p>
            )}
          </div>
        )}

        {weatherInfo ? (
          <div className="weather-content mt-8 text-white text-center" data-testid="weather-details">
            <h3 className="text-2xl font-semibold mb-4">Weather Info</h3>
            <img
              src={weatherInfo.weather_icons[0]}
              alt="Weather Icon"
              className="w-16 h-16 mb-4 mx-auto"
            />
            <p className="text-lg">
              <strong>Temperature:</strong> {weatherInfo.temperature}
              <sup>°</sup>
            </p>
            <p className="text-lg">
              <strong>Wind Speed:</strong> {weatherInfo.wind_speed} km/h
            </p>
            <p className="text-lg">
              <strong>Precipitation:</strong> {weatherInfo.precip} mm
            </p>
          </div>
        ) : (
          <div className="text-white text-center">
            {weatherApiError ? (
              <div className="bg-yellow-600 text-black p-4 mt-4 rounded-md">
                Weather info not found. Please try again!
              </div>
            ) : (
              <p className="text-lg">{loading ? 'Loading...' : ''}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
 