import axios, { AxiosError } from "axios";
import { Headers } from "../../config/types";

export interface WidgetMembers {
  ccsInfo: Info[];
  creatorInfo: Info;
  sharesInfo: Info[];
  additionalParticipantSets: ParticipantSet[];
  widgetParticipantSet: ParticipantSet;
}

export interface ParticipantSet {
  memberInfos: MemberInfo[];
  order: number;
  role: string;
  id: string;
  providerParticipantSetInfo: ProviderParticipantSetInfo;
}

export interface MemberInfo {
  email: string;
  id: string;
  securityOption: SecurityOption;
  company: string;
  createdDate: string;
  hidden: boolean;
  name: string;
  self: boolean;
  userId: string;
}

export interface SecurityOption {
  authenticationMethod: string;
  digAuthInfo: DigAuthInfo;
  nameInfo: NameInfo;
  notaryAuthentication: string;
  password: string;
  phoneInfo: PhoneInfo;
}

export interface DigAuthInfo {
  providerId: string;
  providerDesc: string;
  providerName: string;
}

export interface NameInfo {
  firstName: string;
  lastName: string;
}

export interface PhoneInfo {
  countryCode: string;
  countryIsoCode: string;
  phone: string;
}

export interface ProviderParticipantSetInfo {
  actionRequired: boolean;
  actionDescription: string;
}

export interface Info {
  company: string;
  email: string;
  hidden: boolean;
  name: string;
  participantId?: string;
  self: boolean;
  createdDate?: string;
  userId?: string;
  sharerParticipantId?: string;
  id?: string;
  securityOption?: SecurityOption;
}

export async function getWidgetMembers(
  url: string,
  headers: Headers,
  widgetId: string
): Promise<WidgetMembers> {
  try {
    const response = await axios.get(`${url}/widgets/${widgetId}/members`, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw new AxiosError(error);
  }
}
