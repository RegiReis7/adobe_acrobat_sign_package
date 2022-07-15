import { APIConfig } from "../../../API/config";
import { WidgetGetMethods } from "./getMethods";
import { WidgetPostMethods } from "./postMethods";
import { WidgetPutMethods } from "./puMethods";

export class WidgetBundler {
  get: WidgetGetMethods;
  post: WidgetPostMethods;
  put: WidgetPutMethods;

  constructor(private readonly config: APIConfig) {
    this.get = new WidgetGetMethods(this.config);
  }
}
