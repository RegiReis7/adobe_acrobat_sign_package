import { APIConfig } from "../../../API/config";
import { AgreementsGetMehotds } from "./getMethods";

export class AgreementBundler {
  get: AgreementsGetMehotds;

  constructor(private readonly config: APIConfig) {
     this.get = new AgreementsGetMehotds(config);
  }
}
