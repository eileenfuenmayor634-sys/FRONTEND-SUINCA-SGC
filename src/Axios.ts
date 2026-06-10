import axios from "axios";

// Instancia base con la URL de tu API.
// Importante: el backend usa sesión con HttpOnly cookies,
// por lo que el navegador las enviará automáticamente si `withCredentials: true` está activado.
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;

