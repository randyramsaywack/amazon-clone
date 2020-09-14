import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5002/clone-b0c24/us-central1/api", // Cloud Function URL
});

export default instance;
