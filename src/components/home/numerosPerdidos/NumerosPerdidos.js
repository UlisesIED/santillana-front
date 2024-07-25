import React, { useState } from 'react'

import { useJuegos } from '../../../hooks'

export function NumerosPerdidos() {

    const { loading, resultado, getNumerosPerdidos } = useJuegos()
    const [texto, setTexto] = useState(undefined)

    const ejecutarJuego = async () => {
        if (!texto || texto.lenght === 0)
            alert("Llena los campos por favor")
        const numeros = texto.split(',')
        const nuevoArreglo = convertirArrayAInt(numeros)
        const es_valido = comprobarArreglo(nuevoArreglo)
        console.log(nuevoArreglo);
        if (es_valido) await getNumerosPerdidos(nuevoArreglo)
        else alert("Ingresa el formato adecuado")
    }

    const convertirArrayAInt = (array) => {
        const nuevoArray = array.map(valor => parseInt(valor, 10));
        return nuevoArray
    };

    const comprobarArreglo = (array) => {
        let centinela = -Infinity;

        const no_valido = array.some(numero => {
            if (isNaN(numero) || numero <= centinela) {
                return true;
            }
            centinela = numero;
            return false;
        });

        return !no_valido;
    }

    return (
        <div>
            <div className='text-center text-2xl'>
                <p>Números perdidos</p>
            </div>
            <p className='text-center text-md'>
                Para que funcione es necesario que pongas numeros de menor a mayor
            </p>
            <p className='text-center text-md'>
                ejemplo: 1,5,6,7,8,15
            </p>
            <p className='text-center text-md'>
                sin espacios, o cualquier otro valor y solo positivos
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
                                    <p>Números faltantes:</p>
                                    {`${resultado.numeros_faltantes}`}
                                </div>
                            )
                            : null
                    }
                </center>
            </div>
        </div>
    )
}
