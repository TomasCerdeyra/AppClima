import React, { useState } from 'react'

const CardClima = () => {

    let urdClima = "https://api.openweathermap.org/data/2.5/weather?appid=842d6ee904874488a6a8f4adb8664f79&lang=es"
    let cityUrl = "&Q="

    let urlClimaPrediccion = "https://api.openweathermap.org/data/2.5/forecast?appid=842d6ee904874488a6a8f4adb8664f79&lang=es"
    
    const [climaActual, setClimaActual] = useState([]);
    const [climaPredict, setClimaPredict] = useState([]);
    const [loading, setLoading] = useState(fase);
    const [card, setCard] = useState(false);
    const [cityForm, setCityForm] = ('');

    const getApi = async(city)=>{
        setLoading(true);
        setCityForm(city);

        //api clima timepo real
        urdClima =urdClima + cityUrl + city;

        await fetch(urdClima).then((res)=>{
            return res.json();
        }).then((data)=>{
            setClimaActual(data)
            console.log(data);
        }).catch((error =>{
            console.log(error);
            setLoading(false);
        }));

        //Api clima prediccion a futuro
        urlClimaPrediccion = urlClimaPrediccion + cityUrl + city

        await fetch(urlClimaPrediccion).then((res)=>{
            return res.json();
        }).then((data)=>{
            setClimaPredict(data)
            console.log(data);

            setLoading(false);
            setCard(true);
        }).catch((error =>{
            console.log(error);
            setLoading(false);
        }));

    }

    return (
        <div>CardClima</div>
    )
}

export default CardClima