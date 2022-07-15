import { APIConfig } from "../../../API/config";
import { AgreementDeleteMethods } from "./deleteMethods";
import { AgreementGetMehotds } from "./getMethods";
import { AgreementPostMethods } from "./postMethods";
import { AgreementPutMethods } from "./putMethods";

export class AgreementBundler {
  readonly get: AgreementGetMehotds;
  readonly delete: AgreementDeleteMethods;
  readonly post: AgreementPostMethods;
  readonly put: AgreementPutMethods;

  constructor(private readonly config: APIConfig) {
    this.get = new AgreementGetMehotds(this.config);
  }
}
