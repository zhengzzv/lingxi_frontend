import { defineStore } from 'pinia'
import { store } from '..'
import { storageLocal } from "@/utils/storage";
import { STORAGE_KEY_AUTHORIZATION, STORAGE_KEY_USER_INFO } from "@/types/constants";
import type { UserDto } from '@/request/generator';


const useUserStoreFunc = defineStore('user', {
    state: () => {
        return {
            currentUser: storageLocal.getItem(STORAGE_KEY_USER_INFO),
            authorization: storageLocal.getItemDefault(STORAGE_KEY_AUTHORIZATION, "")
        }
    },

    actions: {
        setUserInfo(userinfo: UserDto) {
            this.currentUser = userinfo
            storageLocal.setItem(STORAGE_KEY_USER_INFO, userinfo)
        },
        updateUserInfo(nickName: string, avator: string) {
            this.currentUser!.nickName = nickName
            this.currentUser!.avator = avator
        },
        setAuthorization(authorization: string) {
            this.authorization = authorization
            storageLocal.setItem(STORAGE_KEY_AUTHORIZATION, authorization)
        },
        getAuthorization() {
            return storageLocal.getItem(STORAGE_KEY_AUTHORIZATION)
        }
    }
})

export const userInfoStore = useUserStoreFunc(store)