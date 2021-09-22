import axios from 'axios';
import { downloadError, invalidEmail } from './stores';

export const validateEmail = (email = '') => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let res = re.test(String(email).toLowerCase());
	invalidEmail.update(() => !res);

	return res;
};

export const consultaEmail = async (email = '') => {
	downloadError.update(() => false);

	try {
		const res = await axios.get(
			`https://umbrella-constancias.herokuapp.com/eventos/m3k376lp0y/asistentes/buscar?correo=${email}`,
			// `http://localhost:5001/eventos/m3k376lp0y/asistentes/buscar?correo=${email}`,
			{
				responseType: 'blob'
			}
		);

		if (res.status !== 200) return;

		const url = window.URL.createObjectURL(new Blob([res.data]));
		const link = document.createElement('a');

		link.href = url;
		link.setAttribute('download', `CONSTANCIA DE PARTICIPACIÓN 29 REUNION ANUAL CONASA.pdf`); //or any other extension
		document.body.appendChild(link);
		link.click();
	} catch (error) {
		console.log('error');
		downloadError.update(() => true);
	} finally {
	}
};
