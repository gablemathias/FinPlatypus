import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  const data = await axios.get<SearchResponse>(
    `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&apikey=${process.env.REACT_APP_API_KEY}`
  ).catch(function (error) {
    if(error.response) {
      console.log("Error in response message:", error.message);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(process.env);
    } else if (error.request) {
      console.log("Error in request message:", error.message);
      console.log(error.request);
    } else {
      console.log("Unexpected error: ", error);
    }
    console.log(error.config);
    return error.message;
  });
  return data;
}