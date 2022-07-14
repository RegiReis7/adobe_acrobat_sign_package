import axios from "axios";
import { Headers } from "../../config/types";

export async function getAgreementDocumentUrl(
  url: string,
  headers: Headers,
  agreementId: string
): Promise<{ url: string }> {
  try {
    const response = await axios.get(
      `${url}/agreements/${agreementId}/combinedDocument/url`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
