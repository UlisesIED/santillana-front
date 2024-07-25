import {
    getAnagramaApi,
    getCalcularFechasApi,
    getContandoPalabrasApi,
    getDulcesTrucoApi,
    getNumerosPerdidosApi,
    getPalindromoApi,
    getPiedraPapelTijeraApi,
} from '../api/juegos';

import { useState } from "react";

export function useJuegos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState(undefined)



    const getPalindromo = async (palabra) => {
        try {
            setLoading(true);
            const response = await getPalindromoApi(palabra);
            setResultado(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const getAnagrama = async (palabra_1, palabra_2) => {
        try {
            setLoading(true);
            const response = await getAnagramaApi(palabra_1, palabra_2);
            setResultado(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const getCalcularFechas = async (fecha_1, fecha_2) => {
        try {
            setLoading(true);
            const response = await getCalcularFechasApi(fecha_1, fecha_2);
            setResultado(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const getContandoPalabras = async (texto) => {
        try {
            setLoading(true);
            const response = await getContandoPalabrasApi(texto);
            setResultado(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const getDulcesTruco = async (personas, solicitud) => {
        try {
            setLoading(true);
            const response = await getDulcesTrucoApi(personas, solicitud);
            setResultado(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const getNumerosPerdidos = async (secuencia_numeros) => {
        try {
            setLoading(true);
            const response = await getNumerosPerdidosApi(secuencia_numeros);
            setResultado(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const getPiedraPapelTijera = async (partida) => {
        try {
            setLoading(true);
            const response = await getPiedraPapelTijeraApi(partida);
            setResultado(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        resultado,
        getPalindromo,
        getAnagrama,
        getCalcularFechas,
        getContandoPalabras,
        getDulcesTruco,
        getNumerosPerdidos,
        getPiedraPapelTijera,
    }
}