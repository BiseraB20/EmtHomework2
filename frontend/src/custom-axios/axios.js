import axios from "axios";
//tuka kje vrzeme se za axios
const instance = axios.create({
    baseURL: 'https://emt-homework-frontend.herokuapp.com//api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;//za da mozhe da ja pristapuvame vo drugiote delovi od react app







