import { APIConfig } from "../API/config";
import { AgreementBundler } from "./bundlers/agreements/bundler";
import { WidgetBundler } from "./bundlers/widgets/bundler";

export class AcrobatSign{
    private configs : APIConfig
    readonly agreements : AgreementBundler
    readonly widgets : WidgetBundler

    constructor(token : string, api_user : string){
        this.configs = new APIConfig(token, api_user)
        this.agreements = new AgreementBundler(this.configs)
        this.widgets = new WidgetBundler(this.configs)
    }
}