import axios from "axios";
import { Headers } from "../../config/types";

export async function getAgreementDocumentUrl(
  url: string,
  headers: Headers,
  agreementId: string
): Promise<{ url: string }> {
  try {
    const responseData = await axios.get(
      `${url}/agreements/${agreementId}/combinedDocument/url`,
      {
        headers,
      }
    );

    return responseData.data;
  } catch (error) {
    throw new Error(error);
  }
}
