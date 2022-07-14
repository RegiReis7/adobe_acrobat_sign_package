import axios from "axios";
import { Headers } from "../../config/types";

export async function getAgreementFormData(
  url: string,
  headers: Headers,
  agreementId: string
): Promise<string> {
  try {
    const response = await axios.get(
      `${url}/agreements/${agreementId}/formData`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
