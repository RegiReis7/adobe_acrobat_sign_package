import axios from "axios";
import { Headers } from "../../config/types";

export async function getWidgetDocumentUrl(
  url: string,
  headers: Headers,
  widgetId: string
): Promise<{ url: string }> {
  try {
    const response = await axios.get(
      `${url}/widgets/${widgetId}/combinedDocument/url`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
