import axios from "axios";
import { Headers } from "../../config/types";

export interface AgreementsListResponse {
  userAgreementList: UserAgreementList[];
  page: {
    nextCursor: string;
  };
}
export interface UserAgreementList {
  id: string;
  parentId: string;
  type: string;
  name: string;
  groupId: string;
  displayDate: Date;
  displayParticipantSetInfos: DisplayParticipantSetInfo[];
  latestVersionId: string;
  status: string;
  esign: boolean;
  hidden: boolean;
}

export interface DisplayParticipantSetInfo {
  displayUserSetMemberInfos: DisplayUserSetMemberInfo[];
}

export interface DisplayUserSetMemberInfo {
  fullName: string;
  email: string;
  company: string;
}

export async function getAllAgreemets(
  url: string,
  headers: Headers,
  nextCursor?: string
): Promise<AgreementsListResponse> {
  try {
    const response = await axios.get(`${url}/agreements`, {
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
