import axios from 'axios'
import { ElMessage } from "element-plus"
import { userInfoStore } from '@/store/modules/user'
import { Configuration, UsersAPIApi, FileAPIApi } from "@/request/generator"
import {storageLocal} from "@/utils/storage";
import {STORAGE_KEY_AUTHORIZATION} from "@/types/constants";

axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

axios.interceptors.response.use(response => {
    if (response.headers.authorization) {
        userInfoStore.setAuthorization(response.headers.authorization)
    }
    return response
}, error => {
    ElMessage.error(error.message)
    return Promise.reject(error)
})

const $axios = axios

const config = new Configuration({
    accessToken: storageLocal.getItemDefault(STORAGE_KEY_AUTHORIZATION, "")
})

const api = {
    UserAPi: new UsersAPIApi(config, "", axios),
    FileApi: new FileAPIApi(config, "", axios)
}

export {
    $axios, api
}