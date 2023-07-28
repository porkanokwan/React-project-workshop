import axios from "axios";
import { apiKey } from "../api";

async function addNewData(body) {
  try {
    const url = "https://docker.geotalent.co.th/hr-qa/api/v1/employees";
    const newData = await axios.post(url, body, {
      headers: {
        "x-api-key": apiKey,
      },
    });

    if (newData.data.error) {
      return newData.data;
    } else {
      return newData.data.result;
    }
  } catch (err) {
    return err;
  }
}

export default addNewData;
