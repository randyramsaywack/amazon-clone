import axios from "axios";

const instance = axios.create({
  baseURL: "...", // Cloud Function URL
});

export default instance;
