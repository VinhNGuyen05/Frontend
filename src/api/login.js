import axios from 'axios'
const URL = 'http://fruitseasonapi-001-site1.atempurl.com'

const instance = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const login = async (credential) => {
    const response = await instance.post('/api/auths/login', credential)
    return response.data
}
