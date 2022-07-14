import { APIConfig } from "../../../API/config";
import { AgreementsGetMehotds } from "./getMethods";

export class AgreementBundler {
  getMethods: AgreementsGetMehotds;

  constructor(private readonly config: APIConfig) {
     this.getMethods = new AgreementsGetMehotds(config);
  }
}
