import React, { useState } from 'react'

import { useJuegos } from '../../../hooks'

export function ContadorPalabras() {
    const { loading, resultado, getContandoPalabras } = useJuegos()
    const [texto, setTexto] = useState(undefined)

    const ejecutarJuego = async () => {
        if (!texto || texto.lenght === 0)
            alert("Llena los campos por favor")
        else
            await getContandoPalabras(texto)
    }
    return (
        <div>
            <div className='text-center text-2xl'>
                <p>
                    Contador de palabras.</p>
            </div>
            <div className='my-6'>
                <center>
                    <textarea
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
                        placeholder="Ingresa el texto"
                        cols={65}
                        rows={8}

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
                                    <p>Palabras:</p>
                                    <pre className='text-left'>
                                        {`${JSON.stringify(resultado, null, 3)}`}
                                    </pre>
                                </div>
                            )
                            : null
                    }
                </center>
            </div>
        </div>
    )
}
