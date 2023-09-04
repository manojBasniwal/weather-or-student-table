import React, { useEffect, useState } from 'react';
import { Images } from "../../utils/images";
import PageWidthNavbar from 'components/page-width-navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import PageLoader from 'components/page-loader';

function Weather() {

    const [name, setName] = useState('kotputli')
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(false)


    const handleClick = () => {
        if (name !== "") {
            setLoader(true)
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=16f77592bffd38fa909aaaccc8e9e82d&&units=metric`;
            axios.get(apiUrl)
                .then(res => {
                    let imagePath = '';
                    if (res?.data?.weathe?.[0]?.main === 'clear') {
                        imagePath = Images.ClearSky
                    } else if (res?.data?.weather?.[0]?.main === 'Rain') {
                        imagePath = Images.Rain
                    } else if (res?.data?.weather?.[0]?.main === 'Clouds') {
                        imagePath = Images.Clouds
                    } else if (res?.data?.weather?.[0]?.main === 'Drizzle') {
                        imagePath = Images.Drizzle
                    } else if (res?.data?.weather?.[0]?.main === 'Mist') {
                        imagePath = Images.Mist
                    } else {
                        imagePath = Images.ClearSky
                    }

                    setLoader(false)
                    setData({ ...data, name: res.data.name, celcius: res.data.main.temp, humidity: res.data.main.humidity, speed: res.data.wind.speed, image: imagePath })
                    setName('')
                    toast.success('successfully search')

                })
                .catch((error)=>{
                    setLoader(false)
                    if(error.response.data.message){
                        toast.error(error.response.data.message)
                    }else{
                        toast.error(error.message)
                    }
                })
        }

    }

    useEffect(() => {
        handleClick()
    }, [])

    return (
        <PageWidthNavbar>
            <div className="main-container">
                {!!loader && <PageLoader/>}
                <div className="weather-section">
                    <div className="weather-box">
                        <input type='input' placeholder="Enter City Name" onChange={(e) => setName(e.target.value)} value={name} />
                        <span onClick={handleClick}><img className="search-img" src={Images.Search} /></span>
                    </div>
                    <img className="clear-sky-img" src={data.image} />
                    <h1 className="clear-sky-heading">{Math.round(data.celcius)}<sup>o</sup>C</h1>
                    <span className="city-name">{(data.name)}</span>
                    <div className="weather-text">
                        <div className="humidity-section">
                            <img className="humidity-img" src={Images.Humidity} />
                            <span>
                                <p>{Math.round(data.humidity)}</p>
                                <p>Humidity</p>
                            </span>
                        </div>
                        <div className='windspeed-section'>
                            <img className="windspeed-img" src={Images.WindSpeed} />
                            <span>
                                <p>{Math.round(data.speed)} Km/H</p>
                                <p>Wind Speed</p>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </PageWidthNavbar>
    )
}

export default Weather
