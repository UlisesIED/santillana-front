import React from 'react'

export function Header(props) {

    const { setJuego } = props

    const onChangeJuego = (juego) => {
        setJuego(juego)
    }

    return (
        <div className='mb-6'>
            <center>
                <h1 className='text-4xl font-mono'>
                    Selecciona un juego
                </h1>
            </center>
            <br />
            <div className='flex flex-row justify-around mb-6'>
                <button
                    className='
                        border-teal-900
                        tracking-wider
                        font-semibold
                        border-double
                        bg-sky-300
                        rounded-xl
                        border-4
                        px-5
                        py-2
                        hover:bg-sky-700
                        hover:text-slate-50
                        hover:border-teal-300
                        ease-in duration-300
                    '
                    onClick={() => onChangeJuego(0)}
                >
                    Piedra Papel o Tijeras
                </button>
                <button
                    className='
                        border-orange-200
                        tracking-wider
                        font-semibold
                        border-double
                        bg-orange-400
                        rounded-xl
                        border-4
                        px-5
                        py-2
                        hover:bg-orange-500
                        hover:text-slate-50
                        hover:border-orange-950
                        ease-in duration-300
                    '
                    onClick={() => onChangeJuego(1)}
                >
                    Contandor de Palabras
                </button>
                <button
                    className='
                        border-green-500
                        tracking-wider
                        font-semibold
                        border-double
                        bg-lime-300
                        rounded-xl
                        border-4
                        px-5
                        py-2
                        hover:bg-lime-600
                        hover:text-slate-50
                        hover:border-green-300
                        ease-in duration-300
                    '
                    onClick={() => onChangeJuego(2)}
                >
                    Números Perdídos
                </button>
            </div>
            <div className='flex flex-row justify-around mb-6'>

                <button
                    className='
                        border-red-500
                        tracking-wider
                        font-semibold
                        border-double
                        bg-red-300
                        rounded-xl
                        border-4
                        px-5
                        py-2
                        hover:bg-red-700
                        hover:text-slate-50
                        hover:border-red-300
                        ease-in duration-300
                    '
                    onClick={() => onChangeJuego(3)}
                >
                    Dulce o Truco
                </button>

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
                    onClick={() => onChangeJuego(4)}
                >
                    Anagrama
                </button>

                <button
                    className='
                        border-indigo-500
                        tracking-wider
                        font-semibold
                        border-double
                        bg-violet-300
                        rounded-xl
                        border-4
                        px-5
                        py-2
                        hover:bg-violet-800
                        hover:text-slate-50
                        hover:border-indigo-300
                        ease-in duration-300
                    '
                    onClick={() => onChangeJuego(5)}
                >
                    Palindromo
                </button>
            </div>
        </div>
    )
}

