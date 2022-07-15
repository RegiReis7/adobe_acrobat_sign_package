import axios from "axios";
import { Headers } from "../../config/types";

export interface Widgets {
  page: Page;
  userWidgetList: UserWidgetList[];
}

export interface Page {
  nextCursor: string;
}

export interface UserWidgetList {
  groupId: string;
  hidden: boolean;
  id: string;
  javascript: string;
  modifiedDate: string;
  name: string;
  status: string;
  url: string;
}

export async function getAllWidgtes(
  url: string,
  headers: Headers,
  nextCursor?: string
): Promise<Widgets> {
  try {
    const response = await axios.get(`${url}/widgets`, {
      headers,
      params: nextCursor
        ? { cursor: nextCursor, pageSize: 50 }
        : { pageSize: 50 },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
