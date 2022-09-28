import React from 'react'
import './Card.css'

const Card = ({ hayCard, climaActual, climaPredict, haySpinner }) => {

    //variabeles para le clima actual
    let date = new Date();
    let grados = 0;
    let logo = '';
    let descript = '';

    if (hayCard) {
        grados = (climaActual.main.temp - 273.1).toFixed(1);
        logo = 'https://api.openweathermap.org/img/w/' + climaActual.weather[0].icon + '.png';
        descript = climaActual.weather[0].description
    }
    

    return (
        <div className=' mt-5'>
            <div className='bg-white '>
                <div className=' contAmbienteActual'>
                    <h3 className=' absolute text-white text-4xl tiltle'>{climaActual.name}</h3>
                    <p className=' absolute  text-white text-1xl date'>{date.toLocaleDateString()}</p>
                    <p className=' absolute text-5xl text-white clim'>{ grados }°C</p>
                    <p className=' absolute  text-white desc flex items-center justify-center gap-3 text-xl'><img src={logo} alt="icono" />{ descript }</p>
                    {/* <img className='' src="https://images.pexels.com/photos/3109671/pexels-photo-3109671.jpeg?cs=srgb&dl=pexels-furknsaglam-3109671.jpg&fm=jpg" alt="" /> */}
                </div>

                <div className=' bg-gray-900  '>
                    <div className=' pl-5 pt-4 flex flex-col gap-3' >
                        <h5 className=' text-xl text-white'>temperatura maxima 12.5°C</h5>
                        <h5 className=' text-xl text-white'>temperatura minima 10.5°C</h5>
                        <h5 className=' text-xl text-white'>Sensacion termina: 15.8°C</h5>
                        <h5 className=' text-xl text-white'>Humedada:  20%</h5>
                        <h5 className=' text-xl text-white 4'>Velocidad del vielto: 300m/s</h5>
                    </div>

                    <div className=' border-black mt-6 p-8 gap-5 border-t flex justify-around items-center'>
                        <div className='flex flex-col gap-2 '>
                            <p className=' text-white 4'>20/30/2022 18h</p>
                            <p className=' text-white 4'>Luvia ligera</p>
                            <p className=' text-white 4'>11.0°C</p>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <p className=' text-white 4'>20/30/2022 18h</p>
                            <p className=' text-white 4'>Luvia ligera</p>
                            <p className=' text-white 4'>11.0°C</p>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <p className=' text-white 4'>20/30/2022 18h</p>
                            <p className=' text-white 4'>Luvia ligera</p>
                            <p className=' text-white 4'>11.0°C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card