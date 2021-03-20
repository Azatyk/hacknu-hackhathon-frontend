import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.cedra.space/api",
  headers: { "Content-Type": "application/json" },
});

export default request;
