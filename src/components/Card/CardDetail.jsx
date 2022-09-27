import React from 'react'
import Spinner from '../Spinner/Spinner'

const CardDetail = ({ card, loading, climaActual, climaPredict }) => {

    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = day + '/' + month + '/' + year;

    if (loading) {
        return (
            <Spinner />
        )
    }

    let url = "";
    let icono = "";

    if (climaPredict) {
        //Scao el icono
        url = "https://api.openweathermap.org/img/w"
       /*  icono = url + climaActual.weather[0].icon + ".png" */
    }




    return (
        <div>
            {
                card === true ? (
                    <div className=' container'>
                        <div className=' bg-slate-900'>
                            <div>
                                <div>
                                    <h3>{climaActual.name}</h3>
                                    <p>{date}</p>
                                    <h2>{(climaActual.main.temp - 273.15).toFixed(1)}°C</h2>
                                    <p><img src={icono} alt="icon" />{/* {climaActual.weather[0].description} */}</p>
                                    <img className=' w-32 ' src="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?cs=srgb&dl=pexels-david-skyrius-2129796.jpg&fm=jpg" alt="" />

                                </div>
                                <div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                ) :
                    (<h2></h2>)
            }
        </div>
    )
}

export default CardDetail