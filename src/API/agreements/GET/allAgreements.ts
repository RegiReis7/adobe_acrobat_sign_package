import axios from "axios";
import { Headers } from "../../types";

export async function getAllAgreemets(url : string, headers: Headers) {
    try {
        const responseData = await axios.get(url, {
            headers
        })

        return responseData.data;
    } catch (error) {
        throw new Error(error)
    }
}