import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN2 = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accesstoken;
const TOKEN2 = (JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser)?.accesstoken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njc0Njg0YmEwNTRjMzBlZWM5YTE5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDgyMDc4NSwiZXhwIjoxNjg1MDc5OTg1fQ.ual1WYqdDKqAW5hmYLoUiQnzCPfTcrRvlhEIe1w2-sA"
console.log(TOKEN2)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN2}` },
});
