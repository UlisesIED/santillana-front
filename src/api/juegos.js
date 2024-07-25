import { BASE_API } from '../utils/constants';

export async function getPalindromoApi(palabra) {
    try {
        const formData = new FormData();
        formData.append("palabra", palabra);
        const url = `${BASE_API}/api/juegos/palindromos/`;
        const params = {
            method: "POST",
            headers: {},
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getAnagramaApi(palabra_1, palabra_2) {
    try {
        const formData = new FormData();
        formData.append("palabra_1", palabra_1);
        formData.append("palabra_2", palabra_2);
        const url = `${BASE_API}/api/juegos/anagrama/`;
        const params = {
            method: "POST",
            headers: {},
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getContandoPalabrasApi(texto) {
    try {
        const formData = new FormData();
        formData.append("texto", texto);
        const url = `${BASE_API}/api/juegos/contando_palabras/`;
        const params = {
            method: "POST",
            headers: {},
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getCalcularFechasApi(fecha_1, fecha_2) {
    try {
        const formData = new FormData();
        formData.append("fecha_1", fecha_1);
        formData.append("fecha_2", fecha_2);
        const url = `${BASE_API}/api/juegos/calcula_fechas/`;
        const params = {
            method: "POST",
            headers: {},
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getNumerosPerdidosApi(secuencia_numeros) {
    try {
        const formData = new FormData();
        formData.append("secuencia_numeros", JSON.stringify(secuencia_numeros));
        const url = `${BASE_API}/api/juegos/numeros_perdidos/`;
        const params = {
            method: "POST",
            headers: {},
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getPiedraPapelTijeraApi(partida) {
    try {
        const formData = new FormData();
        formData.append("partida", JSON.stringify(partida));
        const url = `${BASE_API}/api/juegos/piedra_papel_tijera/`;
        const params = {
            method: "POST",
            headers: {},
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getDulcesTrucoApi(personas, solicitud) {
    try {
        const formData = new FormData();
        formData.append("personas", JSON.stringify(personas));
        formData.append("solicitud", solicitud);
        const url = `${BASE_API}/api/juegos/truco_trato/`;
        const params = {
            method: "POST",
            headers: {},
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}