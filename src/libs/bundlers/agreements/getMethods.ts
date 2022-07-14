import { getAllAgreemets } from "../../../API/agreements/GET/allAgreements";
import { getAgreementById } from "../../../API/agreements/GET/agreementById";
import { getAgreementDocumentUrl } from "../../../API/agreements/GET/agreementDocumentUrl";
import { getAgreementEvents } from "../../../API/agreements/GET/agreementEvents";
import { APIConfig } from "../../../API/config";

export class AgreementsGetMehotds {
  constructor(private readonly config: APIConfig) {}

  async getAgreements(nextCursor?: string) {
    return getAllAgreemets(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      nextCursor
    );
  }

  async getAgreementById(agreementId: string) {
    return getAgreementById(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }

  async getAgreementDocumentUrl(agreementId: string) {
    return getAgreementDocumentUrl(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }

  async getAgreementEvents(agreementId: string) {
    return getAgreementEvents(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }
}
