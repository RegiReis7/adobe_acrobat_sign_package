import axios from "axios";
import { Headers } from "../../config/types";

export interface WidgetInfo {
  name: string;
  widgetParticipantSetInfo: WidgetParticipantSetInfo;
  additionalParticipantSetsInfo: AdditionalParticipantSetsInfo[];
  authFailureInfo: Info;
  ccs: Cc[];
  completionInfo: Info;
  createdDate: string;
  creatorEmail: string;
  creatorName: string;
  fileInfos: FileInfo[];
  groupId: string;
  id: string;
  isDocumentRetentionApplied: boolean;
  lastEventDate: string;
  locale: string;
  ownerEmail: string;
  ownerId: string;
  ownerName: string;
  securityOption: WidgetInfoSecurityOption;
  state: string;
  status: string;
  vaultingInfo: VaultingInfo;
  widgetInActiveInfo: WidgetInActiveInfo;
}

export interface AdditionalParticipantSetsInfo {
  memberInfos: MemberInfo[];
  role: string;
  id: string;
  order: number;
  providerParticipantSetInfo: ProviderParticipantSetInfo;
}

export interface MemberInfo {
  email: string;
  id: string;
  name: string;
  securityOption: MemberInfoSecurityOption;
}

export interface MemberInfoSecurityOption {
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
  url: string;
  deframe: boolean;
  delay: number;
}

export interface Cc {
  email: string;
}

export interface FileInfo {
  document: Document;
  notarize: boolean;
  transientDocumentId: string;
  urlFileInfo: URLFileInfo;
}

export interface Document {
  createdDate: string;
  id: string;
  label: string;
  numPages: number;
  mimeType: string;
  name: string;
}

export interface URLFileInfo {
  mimeType: string;
  name: string;
  url: string;
}

export interface WidgetInfoSecurityOption {
  openPassword: string;
}

export interface VaultingInfo {
  enabled: boolean;
}

export interface WidgetInActiveInfo {
  message: string;
  redirectUrl: string;
}

export interface WidgetParticipantSetInfo {
  memberInfos: MemberInfo[];
  role: string;
}

export async function getWidgetById(
  url: string,
  headers: Headers,
  widgetId: string
) {
  try {
    const response = await axios.get(`${url}/widgets/${widgetId}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
