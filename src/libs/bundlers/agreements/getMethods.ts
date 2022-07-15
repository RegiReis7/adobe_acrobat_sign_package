import { getAllAgreemets } from "../../../API/agreements/GET/allAgreements";
import { getAgreementById } from "../../../API/agreements/GET/agreementById";
import { getAgreementDocumentUrl } from "../../../API/agreements/GET/agreementDocumentUrl";
import { getAgreementEvents } from "../../../API/agreements/GET/agreementEvents";
import { APIConfig } from "../../../API/config";
import { getAgreementFormData } from "../../../API/agreements/GET/agreementFormData";
import { getAgreementMembers } from "../../../API/agreements/GET/agreementMembers";
import { getAgreementSigningUrls } from "../../../API/agreements/GET/agreementSigningUrls";

export class AgreementGetMehotds {
  constructor(private readonly config: APIConfig) {}

  async allAgreements(nextCursor?: string) {
    return getAllAgreemets(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      nextCursor
    );
  }

  async agreementById(agreementId: string) {
    return getAgreementById(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }

  async agreementDocumentUrl(agreementId: string) {
    return getAgreementDocumentUrl(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }

  async agreementEvents(agreementId: string) {
    return getAgreementEvents(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }

  async agreementFormData(agreementId: string) {
    return getAgreementFormData(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }

  async agreementMembers(agreementId: string) {
    return getAgreementMembers(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }

  async agreementSigningUrls(agreementId: string) {
    return getAgreementSigningUrls(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      agreementId
    );
  }
}
