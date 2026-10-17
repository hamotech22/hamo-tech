import axios from "axios";
import localDatabase from "../../db.json";

const configuredBaseUrl = import.meta.env.VITE_API_URL?.trim();

const api = axios.create({
  baseURL: (configuredBaseUrl || "http://localhost:3000").replace(/\/+$/, ""),
});

export async function getCollection(endpoint) {
  let data;

  try {
    ({ data } = await api.get(endpoint));

    if (!Array.isArray(data)) {
      throw new TypeError(`Expected an array from the "${endpoint}" endpoint.`);
    }

    return data;
  } catch (error) {
    console.warn(`Failed to load "${endpoint}" from the API; using local db.json data.`, error);

    const collection = endpoint.replace(/^\/+|\/+$/g, "");
    const localData = localDatabase[collection];

    if (!Array.isArray(localData)) {
      throw new TypeError(
        `No local array data is available for the "${endpoint}" endpoint.`,
        { cause: error },
      );
    }

    return localData;
  }
}
