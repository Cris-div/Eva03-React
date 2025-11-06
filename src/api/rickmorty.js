import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/character?page=${page}`);
  return data.results;
};

export const getLocations = async () => {
  const { data } = await axios.get(`${BASE_URL}/location`);
  return data.results;
};

export const getEpisodes = async () => {
  const { data } = await axios.get(`${BASE_URL}/episode`);
  return data.results;
};
