import axios from "axios";

const configuredBaseUrl = import.meta.env.VITE_API_URL?.trim();

const api = axios.create({
  baseURL: (configuredBaseUrl || "http://localhost:3000").replace(/\/+$/, ""),
});

export async function getCollection(endpoint) {
  const { data } = await api.get(endpoint);

  if (!Array.isArray(data)) {
    throw new TypeError(`Expected an array from the "${endpoint}" endpoint.`);
  }

  return data;
}
