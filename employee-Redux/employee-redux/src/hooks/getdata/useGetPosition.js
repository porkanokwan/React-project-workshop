import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey } from "../api";

function useGetPosition() {
  const [position, setPosition] = useState([]);
  const url = "https://docker.geotalent.co.th/hr-qa/api/v1/lookup/position";

  useEffect(() => {
    const dataPosition = async () => {
      try {
        const res = await axios.get(url, {
          headers: { "x-api-key": apiKey },
        });

        setPosition(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };

    dataPosition();
  }, []);
  return position;
}

export default useGetPosition;
