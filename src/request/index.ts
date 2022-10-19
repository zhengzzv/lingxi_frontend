import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.withCredentials = true


const $axios = axios

export {
    $axios
}