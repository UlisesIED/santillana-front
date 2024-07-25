import React from 'react';

import {
    Anagrama,
    ContadorPalabras,
    DulceTruco,
    NumerosPerdidos,
    Palindrimo,
    PiedraPapelTijera
} from '../';
export function JuegoEspacion(props) {

    const { juego } = props;
    const juegos = [
        <PiedraPapelTijera />,
        <ContadorPalabras />,
        <NumerosPerdidos />,
        <DulceTruco />,
        <Anagrama />,
        <Palindrimo />,
    ]

    return (
        <div
            className='
                mx-auto
                max-w-screen-lg
                bg-orange-300
                px-5
                py-5
                rounded-xl
                shadow-lg
                shadow-orange-900
            '
        >
            {juegos[juego]}
        </div>
    )
}
