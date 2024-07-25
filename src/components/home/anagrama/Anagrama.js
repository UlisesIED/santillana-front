import React, { useState } from 'react'

import { useJuegos } from '../../../hooks'

export function Anagrama() {
    const { loading, resultado, getAnagrama } = useJuegos()
    const [palabra_1, setPalabra_1] = useState(undefined)
    const [palabra_2, setPalabra_2] = useState(undefined)

    const ejecutarJuego = async () => {
        if (!palabra_1 || palabra_1.lenght === 0 || !palabra_2 || palabra_2.lenght === 0)
            alert("Llena los campos por favor")
        else
            await getAnagrama(palabra_1, palabra_2)
    }
    return (
        <div>
            <div className='text-center text-2xl'>
                <p>Anagrama</p>
            </div>
            <div className='my-6'>
                <center>
                    <p className='text-center text-lg'>
                        Un anagrama es una palabra que surge fruto de recombinar en un orden distinto las letras de una palabra original.
                    </p>
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
                        onChange={(e) => setPalabra_1(e.target.value)}
                    />
                    <br />
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
                        onChange={(e) => setPalabra_2(e.target.value)}
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
                                    <p>Es anagrama:</p>
                                    {`${resultado.es_anagrama}`}
                                </div>
                            )
                            : null
                    }
                </center>
            </div>
        </div>
    )
}
