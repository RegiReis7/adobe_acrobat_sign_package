import axios from "axios";
import { Headers } from "../../config/types";

export interface AgreementSigningUrls {
  signingUrlSetInfos: SigningURLSetInfo[];
}

export interface SigningURLSetInfo {
  signingUrls: SigningURL[];
  signingUrlSetName: string;
}

export interface SigningURL {
  email: string;
  esignUrl: string;
}

export async function getAgreementSigningUrls(
  url: string,
  headers: Headers,
  agreementId: string
): Promise<AgreementSigningUrls> {
  try {
    const response = await axios.get(
      `${url}/agreements/${agreementId}/signingUrls`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
