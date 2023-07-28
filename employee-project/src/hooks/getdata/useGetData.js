import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "../api";

function useGetData() {
  const [allData, setAllData] = useState([]);

  const url = "https://docker.geotalent.co.th/hr-qa/api/v1/employees";

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setAllData(res.data.result)
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [url]);

  return allData;
}

export default useGetData;
