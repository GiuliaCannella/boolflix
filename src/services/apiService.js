// apiService.js
import axios from "axios";
import { API_URLS } from "./apiUrls";

const baseURL = "https://api.themoviedb.org/3";

const apiService = axios.create({
  baseURL,
});

export default {
  async get(url, params) {
    try {
      params.api_key = API_URLS.API_KEY;
      const response = await apiService.get(url, { params });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Errore chiamata");
      // Puoi gestire gli errori qui se necessario
      throw error;
    }
  },
};
