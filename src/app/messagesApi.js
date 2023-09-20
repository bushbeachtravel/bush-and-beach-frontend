import axios from 'axios';

export const contactUsMessage = (data) => axios.post('https://formspree.io/f/mqkvdged', data);

export const requisitioMessage = (data) => axios.post('https://formspree.io/f/xpzgjenr', data);
