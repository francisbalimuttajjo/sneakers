import axios from "axios";

const API_KEY = "c8ddc4e338dd96510ac6f6fe7a1f4160";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover",
  headers: {
    "Content-type": "application/json",
  },
}); 

const getMovies = async () => {
  const response = await apiClient.get(`/movie?api_key=${API_KEY}&page=5`);
  console.log(response.data);
  return response.data;
};

const Api = {
  getMovies,
};
export default Api;
