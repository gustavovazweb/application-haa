//IMPORTAÇÃO
import axios from 'axios';

//CONSTANTE API
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

//EXPORTAÇÃO
export default api;