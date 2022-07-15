import axios from "axios";
import { Headers } from "../../config/types";

export interface WidgetAgreements {
  page: Page;
  userAgreementList: UserAgreementList[];
}

export interface Page {
  nextCursor: string;
}

export interface UserAgreementList {
  displayDate: string;
  displayParticipantSetInfos: DisplayParticipantSetInfo[];
  esign: boolean;
  groupId: string;
  hidden: boolean;
  latestVersionId: string;
  name: string;
  status: string;
  id: string;
  parentId: string;
  type: string;
}

export interface DisplayParticipantSetInfo {
  displayUserSetMemberInfos: DisplayUserSetMemberInfo[];
}

export interface DisplayUserSetMemberInfo {
  email: string;
  company: string;
  fullName: string;
}

export async function getWidgetAgreements(
  url: string,
  headers: Headers,
  widgetId: string,
  nextCursor?: string
): Promise<WidgetAgreements> {
  try {
    const response = await axios.get(`${url}/widgets/${widgetId}/agreements`, {
      headers,
      params: nextCursor
        ? { cursor: nextCursor, pageSize: 20 }
        : { pageSize: 20 },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
