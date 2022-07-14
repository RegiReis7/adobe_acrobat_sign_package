import { APIConfig } from "../API/config";
import { AgreementBundler } from "./bundlers/agreements";

export class AcrobatSign{
    private configs : APIConfig
    public agreements : AgreementBundler

    constructor(token : string, api_user : string){
        this.configs = new APIConfig(token, api_user)
        this.agreements = new AgreementBundler(this.configs)
    }
}