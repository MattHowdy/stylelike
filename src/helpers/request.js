import axios from 'axios'



export function getAxtiosInstance() {
    return axios.create({
        timeout: 60000,
        headers: { 'Content-Type': 'application/json'}
    });
}


export const get = function get(url, params) {
    return new Promise((resolve, reject) => {
        getAxtiosInstance().get(url, {
            params: params
        }).then(result => {
            resolve(result.data)
        }).catch(error => {
            if (error.response && error.response.status === 401) {
                console.log(error);
            }
            reject(error)
        })
    })
}