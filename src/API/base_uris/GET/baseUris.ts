import axios from "axios";
import { BaseUris, Headers } from "../../config/types";

export default async function getBaseUris(headers : Headers): Promise<BaseUris> {
    try {
      const response = await axios.get(
        "https://api.na2.adobesign.com:443/api/rest/v6/baseUris",
        {
          headers,
        }
      );
  
      const responseData: BaseUris = response.data;
  
      responseData.apiAccessPoint = responseData.apiAccessPoint.replace(/.$/, "");

      responseData.apiAccessPoint = `${responseData.apiAccessPoint}:443/api/rest/v6`
  
      return responseData;
    } catch (error) {
      throw new Error(error);
    }
  }