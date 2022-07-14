import axios from "axios";
import { Headers } from "../../config/types";

export interface AgreementEvents {
  events: Event[];
}

export interface Event {
  actingUserEmail: string;
  actingUserIpAddress: string;
  actingUserName: string;
  date: string;
  description: string;
  device: string;
  deviceLocation: DeviceLocation;
  devicePhoneNumber: string;
  digitalSignatureInfo: DigitalSignatureInfo;
  electronicSealInfo: ElectronicSealInfo;
  initiatingUserEmail: string;
  initiatingUserName: string;
  participantEmail: string;
  participantId: string;
  participantRole: string;
  synchronizationId: string;
  type: string;
  vaultEventId: string;
  vaultProviderName: string;
  versionId: string;
  comment: string;
  id: string;
  replacedParticipantEmail: string;
  replacedParticipantName: string;
  signerNewName: string;
  signerOldName: string;
  signingReason: string;
}

export interface DeviceLocation {
  latitude: string;
  longitude: string;
}

export interface DigitalSignatureInfo {
  company: string;
  email: string;
  name: string;
  certificateIssuer: string;
  cloudProviderIp: string;
  cloudProviderUrl: string;
}

export interface ElectronicSealInfo {
  company: string;
  id: string;
  name: string;
}

export async function getAgreementEvents(
  url: string,
  headers: Headers,
  agreementId: string
): Promise<AgreementEvents> {
  try {
    const response = await axios.get(
      `${url}/agreements/${agreementId}/events`,
      {
        headers,
      }
    );

    return response.data
  } catch (error) {
    throw new Error(error);
  }
}
