import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey } from "../api";

function useGetDepartment() {
  const [department, setDepartment] = useState([]);
  const url = "https://docker.geotalent.co.th/hr-qa/api/v1/lookup/department";

  useEffect(() => {
    const dataDepartment = async () => {
      try {
        const res = await axios.get(url, {
          headers: { "x-api-key": apiKey },
        });

        setDepartment(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };

    dataDepartment();
  }, []);
    
  return department;
}

export default useGetDepartment;
