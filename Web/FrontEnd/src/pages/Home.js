import React, { useState, useEff } from 'react';
import { FaMapMarker, FaSun, FaCloud, FaSnowflake, FaUmbrella, FaTint, FaCloudShowersHeavy, FaWind, FaSmog } from 'react-icons/fa';
import '../Styles/Home.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const datas = new Date();

function App(cidade) {
    const cidade = useParams();
    const [data, setData] = useState({});

    const [temperatura, setTemperatura] = useState(0);
    const [temperaturaMax, setTemperaturaMax] = useState(0);
    const [temperaturaMin, setTemperaturaMin] = useState(0);
    const [umidade, setUmidade] = useState(0);
    const [pressao, setPressao] = useState(0); 
    const [vento, setVento] = useState(0);
    const [posibilidadeSol, setPossibilidadeSol] = useState(0); 
    const [horarioDia, setHorarioDia] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/weathers/${cidade}/${datas}`)
            .then(response => {
                const {temperature, temperature_max, temperature_min, humidity, pressure, visibility, horarioDia,} = response.data;

                setTemperatura(temperature);
                setTemperaturaMax(temperature_max);
                setTemperaturaMin(temperature_min);
                setUmidade(humidity);
                setPressao(pressure);
                setVento(visibility)
                setHorarioDia(horarioDia);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [cidade]);

    const getWeatherIcon = () => {
        if (temperatura > 30) {
            return FaSun;
        } else if (temperatura > 20) {
            return FaCloud;
        } else if (temperatura > 0) {
            return FaSnowflake;
        } else {
            return FaUmbrella;
        }
    };

    const WeatherIcon = getWeatherIcon();

    const getWeatherDetail = (Icon) => {
        switch (Icon) {
            case FaSun:
                return `${posibilidadeSol}`;
            case FaTint:
                return `${umidade}`;
            case FaCloudShowersHeavy:
                return `${pressao} psi`;
            case FaWind:
                return `Rajada ${vento} NE`;
            case FaSmog:
                return `${posibilidadeSol}`;
            default:
                return '';
        }
    };

    const getWeatherIcons = () => {
        if (temperatura > 30) {
            return [FaSun, FaTint, FaCloudShowersHeavy, FaWind, FaSmog];
        } else if (temperatura > 20) {
            return [FaCloud, FaTint, FaCloudShowersHeavy, FaWind, FaSmog];
        } else if (temperatura > 0) {
            return [FaSnowflake, FaTint, FaCloudShowersHeavy, FaWind, FaSmog];
        } else {
            return [FaUmbrella, FaTint, FaCloudShowersHeavy, FaWind, FaSmog];
        }
    };

    const weatherIcons = getWeatherIcons();

    return (
        <div className="app">
            <div className="centered-square">
                <div className="city-info">
                    <div className="location-section">
                        <FaMapMarker className="location-icon" />
                        <h1 className="city-name">{cidade}</h1>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="weather-section">
                        {WeatherIcon && <WeatherIcon className="weather-" />}
                    </div>
                    <p className="temperature">{data.temperature}</p>
                    <div className="new-line"></div>
                    <div className="weather-details">
                        {weatherIcons.map((Icon, index) => (
                            <div key={index} className="weather-detail">
                                {Icon && <Icon className="weather-icon" />}
                                <span>{getWeatherDetail(Icon)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="line"></div>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="justify-content-around  mb-4 pb-3 pt-2">
                            {[
                                { temperature: 21, icon: FaSun, time: '12:00', period: 'PM' },
                                { temperature: 2, icon: FaSun, time: '1:00', period: 'PM' },
                                { temperature: 20, icon: FaCloud, time: '2:00', period: 'PM' },
                                { temperature: 19, icon: FaCloud, time: '3:00', period: 'PM' },
                                { temperature: 18, icon: FaCloudShowersHeavy, time: '4:00', period: 'PM' },
                            ].map((data, index) => (
                                <div key={index} className="weather-carousel-item">
                                    <p className="small">
                                        <strong>{`${data.temperature}°C`}</strong>
                                    </p>
                                    {data.icon && <data.icon className="fas fa-2x mb-3" style={{ color: '#ddd' }} />}
                                    <p className="mb-0">
                                        <strong>{data.time}</strong>
                                    </p>
                                    <p className="mb-0 text-muted" style={{ fontSize: '.65rem' }}>
                                        {data.period}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
