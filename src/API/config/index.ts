import { Headers } from "./types"
import getBaseUris from  "../base_uris/GET/baseUris"

export class APIConfig {
  private headers: Headers;

  constructor(token: string, api_user: string) {
    this.headers = {
      Authorization: `Bearer ${token}`,
      "x-api-user": `email:${api_user}`,
      Accept: "application/json",
    };
  }

  async getAPIUrl(){
    try {
      return (await getBaseUris(this.headers)).apiAccessPoint;
    } catch (error) {
      throw new Error(error)
    }
  }

  getHeaders(){
    return this.headers;
  }
}
