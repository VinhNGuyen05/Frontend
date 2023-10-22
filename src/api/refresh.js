import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://fruitseasonapi-001-site1.atempurl.com";

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const refreshToken = user?.refreshToken;
        if (refreshToken) {
            config.headers["Refresh-Token"] = refreshToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if (err.response) {
            if (err.response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Please login to continue!',
                }).then(() => {
                    localStorage.clear();
                    window.location.replace("/login")
                })
            }
        }
        return Promise.reject(err);
    }
);

export default instance;
