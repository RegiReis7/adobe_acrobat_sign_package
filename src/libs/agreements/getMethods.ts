import { getAllAgreemets } from "../../API/agreements/GET/allAgreements";
import { APIConfig } from "../../API/config";

export class AgreementsGetMehotds {
  private config: APIConfig;

  constructor(readonly configs: APIConfig) {
    this.config = configs;
  }

  async getAgreements() {
    return getAllAgreemets(
      await this.config.getAPIUrl(),
      this.config.getHeaders()
    );
  }
}
