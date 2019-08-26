'use strict';

import axios from "axios";

/**
 * Компонент является заранее сконфигурированной оберткой над Axios
 */
const HttpClient = axios.create({
    baseURL: '',
    timeout: 60000
});

export default HttpClient;
