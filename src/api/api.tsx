import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d34caee5-ca54-4fb4-bea4-fc948b47c985"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

}

export const unfollowUser = (userId: number) => {

    return  instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
}
export const followUser = (userId: number) => {

    return  instance.post(`follow/${userId}`, {})
        .then(response => {
            return response.data
        })
}
