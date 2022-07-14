import { getAllAgreemets } from "../../../API/agreements/GET/allAgreements";
import { APIConfig } from "../../../API/config";

export class AgreementsGetMehotds {
  private config: APIConfig;

  constructor(readonly configs: APIConfig) {
    this.config = configs;
  }

  async getAgreements(nextCursor?: string) {
    return getAllAgreemets(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      nextCursor
    );
  }
}
