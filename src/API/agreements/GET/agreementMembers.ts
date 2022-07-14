import axios from "axios";
import { Headers } from "../../config/types";

export interface AgreementMembers {
  ccsInfo: SInfo[];
  nextParticipantSets: ParticipantSet[];
  participantSets: ParticipantSet[];
  senderInfo: SenderInfo;
  sharesInfo: SInfo[];
}

export interface SInfo {
  company: string;
  email: string;
  hidden: boolean;
  name: string;
  participantId: string;
  self: boolean;
  sharerParticipantId?: string;
}

export interface ParticipantSet {
  order: number;
  role: string;
  electronicSealId: string;
  id: string;
  memberInfos: MemberInfo[];
  name: string;
  privateMessage: string;
  status: string;
}

export interface MemberInfo {
  email: string;
  securityOption: SecurityOption;
  company: string;
  createdDate: string;
  hidden: boolean;
  id: string;
  name: string;
  privateMessage: string;
  self: boolean;
  status: string;
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

export interface SenderInfo {
  company: string;
  email: string;
  hidden: boolean;
  name: string;
  participantId: string;
  self: boolean;
  status: string;
  createdDate: string;
  userId: string;
}

export async function getAgreementMembers(
  url: string,
  headers: Headers,
  agreementId: string
): Promise<AgreementMembers> {
  try {
    const response = await axios(`${url}/agreements/${agreementId}/members`, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
