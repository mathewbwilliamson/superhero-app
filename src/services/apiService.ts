import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://tppublic.blob.core.windows.net/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
