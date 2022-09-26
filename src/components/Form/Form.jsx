import React, { useState } from 'react'

const Form = () => {
    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(city === "" || !city) return;
        console.log(city);
    }

    return (    
        <div className=' mt-10'>
            <form action="" onSubmit={onSubmit}>
                <div className=' w-full  flex justify-center'>
                    <input className='h-10 pl-5 rounded-l-md border' type="text" placeholder='Ciudad' onChange={e=> (setCity(e.target.value))}/>
                    <button className=' w-16 rounded-r-md bg-blue-600 border-none'>Buscar</button>
                </div>
            </form>

        </div>
    )
}

export default Form