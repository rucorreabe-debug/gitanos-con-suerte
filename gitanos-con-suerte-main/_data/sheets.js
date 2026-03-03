const axios = require("axios");

module.exports = async () => {
  const baseUrl = "https://sheet2api.com/v1/toI4BuPSiSGF/contenido-sitio-suerte";

  const [sorteos, eventoscorporativos, eventossociales, viajes] =
    await Promise.all([
      axios.get(`${baseUrl}/sorteos`),
      axios.get(`${baseUrl}/eventoscorporativos`),
      axios.get(`${baseUrl}/eventossociales`),
      axios.get(`${baseUrl}/viajes`)
    ]);

  return {
    sorteos: sorteos.data,
    eventoscorporativos: eventoscorporativos.data,
    eventossociales: eventossociales.data,
    viajes: viajes.data
  };
};
