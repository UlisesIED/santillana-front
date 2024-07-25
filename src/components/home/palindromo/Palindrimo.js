import React, { useState } from 'react';

import { useJuegos } from '../../../hooks';

export function Palindrimo(props) {

    const { loading, resultado, getPalindromo } = useJuegos()
    const [texto, setTexto] = useState(undefined)

    const ejecutarJuego = async () => {
        if (!texto || texto.lenght === 0)
            alert("Llena los campos por favor")
        else
            await getPalindromo(texto)
    }
    return (
        <div>
            <div className='text-center text-2xl'>
                <p>Palíndromo</p>
            </div>
            <p className='text-center text-lg'>
                Un palíndromo es un término o una expresión que puede leerse tanto de izquierda a derecha como de derecha a izquierda
            </p>
            <div className='my-6'>
                <center>
                    <input
                        type="text"
                        className="
                            border-2
                            border-solid
                            rounded-xl
                            px-2
                            py-1
                            my-6
                            shadow-lg
                            shadow-orange-900
                            text-center
                        "
                        placeholder="Ingresa la palagra"
                        onChange={(e) => setTexto(e.target.value)}
                    />
                    <br />
                    <button
                        className='
                            border-slate-500
                            tracking-wider
                            font-semibold
                            border-double
                            bg-gray-300
                            rounded-xl
                            border-4
                            px-5
                            py-2
                            hover:bg-gray-700
                            hover:text-slate-50
                            hover:border-slate-300
                            ease-in duration-300
                        '
                        onClick={() => ejecutarJuego()}
                    >
                        Jugar
                    </button>
                    {
                        resultado
                            ? (
                                <div className='text-center text-2xl my-6'>
                                    <p>Es palíndromo:</p>
                                    {`${resultado.es_palindromo}`}
                                </div>
                            )
                            : null
                    }
                </center>
            </div>
        </div>
    )
}
