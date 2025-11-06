import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/character?page=${page}`);
  return data.results;
};

export const getLocations = async (page = 1 ) => {
  const { data } = await axios.get(`${BASE_URL}/location?page=${page}`);
  return data.results;
};

export const getEpisodes = async (page=1) => {
  const { data } = await axios.get(`${BASE_URL}/episode?page=${page}`);
  return data.results;
};
