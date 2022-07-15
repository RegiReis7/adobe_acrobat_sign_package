import { APIConfig } from "../../../API/config";
import { getAllWidgtes } from "../../../API/widgets/GET/allWidgets";
import { getWidgetAgreements } from "../../../API/widgets/GET/widgetAgreements";
import { getWidgetById } from "../../../API/widgets/GET/widgetById";
import { getWidgetDocumentUrl } from "../../../API/widgets/GET/widgetDocumentUrl";
import { getWidgetEvents } from "../../../API/widgets/GET/widgetEvents";
import { getWidgetFormData } from "../../../API/widgets/GET/widgetFormData";
import { getWidgetMembers } from "../../../API/widgets/GET/widgetMembers";

export class WidgetGetMethods {
  constructor(private readonly config: APIConfig) {}

  async allWidgets(nextCursor?: string) {
    return getAllWidgtes(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      nextCursor
    );
  }

  async widgetById(widgetId: string) {
    return getWidgetById(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      widgetId
    );
  }

  async widgetAgreements(widgetId: string, nextCursor?: string) {
    return getWidgetAgreements(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      widgetId,
      nextCursor
    );
  }

  async widgetDocumentUrl(widgetId: string) {
    return getWidgetDocumentUrl(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      widgetId
    );
  }

  async widgetEvents(widgetId: string) {
    return getWidgetEvents(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      widgetId
    );
  }

  async widgetFormData(widgetId: string, nextCursor?: string) {
    return getWidgetFormData(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      widgetId,
      nextCursor
    );
  }

  async widgetMembers(widgetId: string) {
    return getWidgetMembers(
      await this.config.getAPIUrl(),
      this.config.getHeaders(),
      widgetId
    );
  }
}
