import axios from "axios";
//tuka kje vrzeme se za axios
const instance = axios.create({
    baseURL: 'http://localhost:9091/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;//za da mozhe da ja pristapuvame vo drugiote delovi od react app







