import axios from "axios";
const user = JSON.parse(localStorage.getItem("persist:root")).user;
// const user = true
const currentUser = user && JSON.parse(user).currentUser;

const BASE_URL="http://localhost:5000/api/";
const TOKEN=currentUser?.accessToken;

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{
        token:`Bearer ${TOKEN}`
    },
});