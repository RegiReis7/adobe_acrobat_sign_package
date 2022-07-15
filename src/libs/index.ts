import { APIConfig } from "../API/config";
import { AgreementBundler } from "./bundlers/agreements/bundler";
import { WidgetBundler } from "./bundlers/widgets/bundler";

export default class AcrobatSign{
    private configs : APIConfig
    public agreements : AgreementBundler
    public widgets : WidgetBundler

    constructor(token : string, api_user : string){
        this.configs = new APIConfig(token, api_user)
        this.agreements = new AgreementBundler(this.configs)
        this.widgets = new WidgetBundler(this.configs)
    }
}