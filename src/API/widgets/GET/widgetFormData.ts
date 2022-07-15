import axios, { AxiosError } from "axios";
import { Headers } from "../../config/types";

export interface WidgetFormData {
  formDataList: [];
  page: {
    nextCursor: string;
  };
}

export async function getWidgetFormData(
  url: string,
  headers: Headers,
  widgetId: string,
  nextCursor?: string
): Promise<WidgetFormData> {
  try {
    const response = await axios.get(`${url}/widgets/${widgetId}/formData`, {
      headers,
      params: nextCursor
        ? { cursor: nextCursor, pageSize: 20 }
        : { pageSize: 20 },
    });

    return response.data;
  } catch (error) {
    throw new AxiosError(error);
  }
}
