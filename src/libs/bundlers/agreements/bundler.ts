import { APIConfig } from "../../../API/config";
import { AgreementDeleteMethods } from "./deleteMethods";
import { AgreementGetMehotds } from "./getMethods";
import { AgreementPostMethods } from "./postMethods";
import { AgreementPutMethods } from "./putMethods";

export class AgreementBundler {
  get: AgreementGetMehotds;
  delete: AgreementDeleteMethods;
  post: AgreementPostMethods;
  put: AgreementPutMethods;

  constructor(private readonly config: APIConfig) {
    this.get = new AgreementGetMehotds(this.config);
  }
}
