import axios from 'axios'
import { ElMessage } from "element-plus";
import {Configuration, UsersAPIApi, FileAPIApi} from "@/request/generator"

axios.defaults.timeout = 5000
axios.defaults.withCredentials = true

axios.interceptors.response.use(response => {
    const data = response.data
    return data
}, error => {
    ElMessage.error(error.message)
    return Promise.reject(error)
})

const $axios = axios

const config = new Configuration({})

const api = {
    UserAPi: new UsersAPIApi(config,"", axios),
    FileApi: new FileAPIApi(config, "", axios)
}

export {
    $axios
}