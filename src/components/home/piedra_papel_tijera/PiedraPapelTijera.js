import React, { useState } from 'react';

import { useJuegos } from '../../../hooks';

export function PiedraPapelTijera() {
    const { loading, resultado, getPiedraPapelTijera } = useJuegos()
    const [rondas, setRondas] = useState([]);

    const agregarRonda = () => {
        setRondas([...rondas, ["", ""]]);
    };

    const handleSelectChange = (index, jugador, value) => {
        const nuevasRondas = [...rondas];
        if (jugador === 0) {
            nuevasRondas[index] = [value, nuevasRondas[index][1]];
        } else {
            nuevasRondas[index] = [nuevasRondas[index][0], value];
        }
        setRondas(nuevasRondas);
    };

    const ejecutarJuego = async () => {
        if (!rondas || rondas.length === 0)
            alert("Llena los campos por favor")
        else
            await getPiedraPapelTijera(rondas)
    }
    return (
        <div>
            <div className='text-center text-2xl'>
                <p>
                    Piedra papel tijera.</p>
            </div>
            <div className='my-6'>
                <center>
                    {rondas.map((ronda, index) => (
                        <div key={index} className='flex flex-row justify-evenly'>
                            <div className='flex flex-col'>
                                <p className='text-center text-lg'>
                                    Jugador 1
                                </p>
                                <select
                                    value={ronda[0]}
                                    onChange={(e) => handleSelectChange(index, 0, e.target.value)}
                                    className='border-2 border-solid rounded-lg px-2 py-1 my-6 shadow-lg shadow-orange-900 text-center'>
                                    <option value="">Selecciona</option>
                                    <option value="S">Tijeras</option>
                                    <option value="P">Papel</option>
                                    <option value="R">Piedra</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <p className='text-center text-lg'>
                                    Jugador 2
                                </p>
                                <select
                                    value={ronda[1]}
                                    onChange={(e) => handleSelectChange(index, 1, e.target.value)}
                                    className='border-2 border-solid rounded-lg px-2 py-1 my-6 shadow-lg shadow-orange-900 text-center'>
                                    <option value="">Selecciona</option>
                                    <option value="S">Tijeras</option>
                                    <option value="P">Papel</option>
                                    <option value="R">Piedra</option>
                                </select>
                            </div>
                        </div>
                    ))}
                    <br />
                    <button onClick={agregarRonda} className='
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
                            ease-in duration-300'>
                        Agregar Ronda
                    </button>
                    <br />
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
                                    <p>Ganador:</p>
                                    <p>{resultado.resultado}</p>
                                </div>
                            )
                            : null
                    }
                </center>
            </div>
        </div>
    )
}