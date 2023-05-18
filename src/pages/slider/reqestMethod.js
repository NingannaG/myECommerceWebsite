import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTUwNGMzMGYyODZkNmU3ODg3NGRmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzYyNDg5MCwiZXhwIjoxNjgzODg0MDkwfQ.b0R7ShP5QQ-tFXrH-xq4HIiWioHpHLcRYLp_ZG531gc";

export const publicReqest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{
        token:`Bearer ${TOKEN}`
    },
});