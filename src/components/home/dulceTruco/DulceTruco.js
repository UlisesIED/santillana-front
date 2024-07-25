import React, { useState } from 'react';

import { useJuegos } from '../../../hooks';

export function DulceTruco() {
    const { loading, resultado, getDulcesTruco } = useJuegos()
    const [personas, setPersonas] = useState([]);
    const [solicitud, setSolicitud] = useState(undefined)

    const agregarRonda = () => {
        setPersonas([...personas, {
            nombre: '',
            edad: '',
            altura: ''
        }]);
    };

    const handleSelectChange = (index, atributo, value) => {
        const nuevaPersona = [...personas];
        nuevaPersona[index][atributo] = value
        setPersonas(nuevaPersona);
    };

    const handleSolicitudChange = (value) => {
        setSolicitud(value)
    }

    const ejecutarJuego = async () => {
        if (!personas || personas.length === 0)
            alert("Llena los campos por favor")
        else
            await getDulcesTruco(personas, solicitud)
    }
    return (
        <div>
            <div className='text-center text-2xl'>
                <p>
                    Dulce o Truco.
                </p>
            </div>
            <p className='text-center text-lg'>
                Agrega los nombres, edades y altura en centimetros de las personas del juego.
            </p>
            <p className='text-center text-lg'>
                Solo el primer nombre de pila.
            </p>
            <p className='text-center text-lg'>
                La altura debe estar en centímetros.
            </p>
            <div className='my-6'>
                <center>
                    {personas.map((persona, index) => (
                        <div key={index} className='flex flex-row justify-evenly'>
                            <div className='flex flex-col'>
                                <p className='text-center text-lg'>
                                    Nombre
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
                                    placeholder="Ingresa el nombre"
                                    onChange={(e) => handleSelectChange(index, 'nombre', e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-center text-lg'>
                                    Edad
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
                                    placeholder="Ingresa la edad"
                                    onChange={(e) => handleSelectChange(index, 'edad', e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-center text-lg'>
                                    Altura
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
                                    placeholder="Ingresa la altura en centímetros"
                                    onChange={(e) => handleSelectChange(index, 'altura', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                    <select
                        value={solicitud}
                        onChange={(e) => handleSolicitudChange(e.target.value)}
                        className='border-2 border-solid rounded-lg px-2 py-1 my-6 shadow-lg shadow-orange-900 text-center'>
                        <option value="">Selecciona</option>
                        <option value="0">Truco</option>
                        <option value="1">Trato</option>
                    </select>
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
                        Agregar persona
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