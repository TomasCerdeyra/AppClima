import React from 'react'
import './Card.css'
import Spinner from '../Spinner/Spinner';

const Card = ({ hayCard, climaActual, climaPredict, haySpinner }) => {

    //variabeles para le clima actual
    let date = new Date();
    let grados = 0;
    let logo = '';
    let descript = '';

    //variables para clima futuro
    let logo3Hs ='';
    let logo6Hs ='';
    let logo9Hs ='';

    let date3Hs='';
    let date6Hs='';
    let date9Hs='';

    if (hayCard) {
        grados = (climaActual.main.temp - 273.1).toFixed(1);
        logo = 'https://api.openweathermap.org/img/w/' + climaActual.weather[0].icon + '.png';
        descript = climaActual.weather[0].description

        logo3Hs= 'https://api.openweathermap.org/img/w/' +climaPredict.list[0].weather[0].icon + '.png'
        logo6Hs= 'https://api.openweathermap.org/img/w/' +climaPredict.list[1].weather[0].icon + '.png'
        logo9Hs= 'https://api.openweathermap.org/img/w/' +climaPredict.list[2].weather[0].icon + '.png'

        date3Hs=climaPredict.list[0].dt_txt.substring(8,10) + '/' + climaPredict.list[0].dt_txt.substring(5,7) + '/' +climaPredict.list[0].dt_txt.substring(0,4) +' '+ climaPredict.list[0].dt_txt.substring(12,16);
        date6Hs=climaPredict.list[1].dt_txt.substring(8,10) + '/' + climaPredict.list[1].dt_txt.substring(5,7) + '/' +climaPredict.list[1].dt_txt.substring(0,4) +' '+ climaPredict.list[1].dt_txt.substring(12,16);
        date9Hs=climaPredict.list[2].dt_txt.substring(8,10) + '/' + climaPredict.list[2].dt_txt.substring(5,7) + '/' +climaPredict.list[2].dt_txt.substring(0,4) +' '+ climaPredict.list[2].dt_txt.substring(11,16);
    }

    if (!hayCard) {
        return (
            <h2>no se selecciono una ciudad</h2>
        )
    }

    if (haySpinner) {
        return (<Spinner />
        )
    }

    return (
        <div className='contGeneral mt-5'>
            <div className='contCard'>
                <div className=' contAmbienteActual pl-5 pt-5 h-92'>
                    <h3 className=' absolute text-white text-4xl tiltle'>{climaActual.name}</h3>
                    <p className=' absolute  text-white text-1xl date'>{date.toLocaleDateString()}</p>
                    <p className=' absolute text-5xl text-white clim'>{ grados }°C</p>
                    <p className=' absolute  text-white desc flex items-center justify-center gap-3 text-xl'><img src={logo} alt="icono" />{ descript }</p>
                    {/* <img className='' src="https://images.pexels.com/photos/3109671/pexels-photo-3109671.jpeg?cs=srgb&dl=pexels-furknsaglam-3109671.jpg&fm=jpg" alt="" /> */}
                </div>

                <div className=' bg-slate-900  '>
                    <div className=' pl-5 pt-4 flex flex-col gap-3' >
                        <h5 className=' text-xl text-white'>Temperatura maxima: {(climaActual.main.temp_max - 273.1).toFixed(1)}°C</h5>
                        <h5 className=' text-xl text-white'>Temperatura minima: {(climaActual.main.temp_min - 273.1).toFixed(1)}°C</h5>
                        <h5 className=' text-xl text-white'>Sensacion termina: {(climaActual.main.feels_like - 273.1).toFixed(1)}°C</h5>
                        <h5 className=' text-xl text-white'>Humedada:  {climaActual.main.humidity}%</h5>
                        <h5 className=' text-xl text-white 4'>Velocidad del vielto: {climaActual.wind.speed}m/s</h5>
                    </div>

                    <div className=' border-black mt-6 p-8 gap-5 border-t flex justify-around items-center'>
                        <div className='flex flex-col gap-2 '>
                            <p className=' text-white '>{date3Hs}h</p>
                            <p className=' text-white flex items-center'><img src={logo3Hs} alt="" />{climaPredict.list[0].weather[0].description}</p>
                            <p className=' text-white text-center'>{(climaPredict.list[0].main.temp- 273.1).toFixed(1)}°C</p>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <p className=' text-white '>{date6Hs}h</p>
                            <p className=' text-white flex items-center'><img src={logo3Hs} alt="" />{climaPredict.list[1].weather[0].description}</p>
                            <p className=' text-white text-center'>{(climaPredict.list[1].main.temp- 273.1).toFixed(1)}°C</p>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <p className=' text-white '>{date9Hs}h</p>
                            <p className=' text-white flex items-center'><img src={logo3Hs} alt="" />{climaPredict.list[2].weather[0].description}</p>
                            <p className=' text-white text-center'>{(climaPredict.list[2].main.temp- 273.1).toFixed(1)}°C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card