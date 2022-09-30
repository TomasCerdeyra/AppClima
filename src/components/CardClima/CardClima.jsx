import React, { useState } from 'react'
import Form from '../Form/Form'
import Card from '../CardDetail/Card'

const CardClima = () => {

    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=842d6ee904874488a6a8f4adb8664f79&lang=es"
    let cityUrl = "&q="

    let urlClimaPrediccion = "https://api.openweathermap.org/data/2.5/forecast?appid=842d6ee904874488a6a8f4adb8664f79&lang=es"
    
    const [climaActual, setClimaActual] = useState([]);
    const [climaPredict, setClimaPredict] = useState([]);
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState(false);
    const [cityForm, setCityForm] = ("");

    const getApi = async(city)=>{
        setLoading(true);
        /* setCityForm(city); */

        //api clima timepo real
        urlClima =urlClima + cityUrl + city;

        await fetch(urlClima).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            setClimaActual(data)
        }).catch((error =>{
            console.log(error);
            setLoading(false);
        }));

        //Api clima prediccion a futuro
        urlClimaPrediccion = urlClimaPrediccion + cityUrl + city;

        await fetch(urlClimaPrediccion).then((res)=>{
            return res.json();
        }).then((data)=>{
            setClimaPredict(data);
            console.log(data);
            setLoading(false);
            setCard(true);
        }).catch((error =>{
            console.log(error);
            setLoading(false);
        }));

    }

    return (
        <>
            <Form NuevaCity = {getApi}/>

            <Card hayCard={card} climaActual={climaActual} climaPredict={climaPredict} haySpinner={loading}/>
        </>
    )
}

export default CardClima