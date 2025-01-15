import { baseUrlDicoding, DicodingResponse } from "./callbackutils";

const dicodingFetch = async (): Promise<DicodingResponse> => {
  const response = await fetch(baseUrlDicoding);
  if (!response.ok) {
    throw new Error("err fetching api");
  }
  const data = await response.json();

  return data;
};

const getRestourantName = async (): Promise<string[]> => {
  const response = await dicodingFetch();
  const restourantNames = response.restaurants.map((resto) => resto.name);
  return restourantNames;
};

let restourantNames: string[];

(async function () {
  try {
    restourantNames = await getRestourantName();
    console.log(restourantNames);
  } catch (e) {
    console.error(e);
  }
})();
