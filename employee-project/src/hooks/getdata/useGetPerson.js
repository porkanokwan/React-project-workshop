import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "../api";


function useGetPerson(empId) {
  const [person, setPerson] = useState({})
    const url = `https://docker.geotalent.co.th/hr-qa/api/v1/employees/${empId}/Info`
  
    useEffect(() => {
      const fetch = async () => {
        try {
          const res = await axios.get(url, {
            headers: {
              "x-api-key": apiKey,
            },
          });
          setPerson(res.data.result)
        } catch (err) {
          console.log(err);
        }
      };
  
      fetch();
    }, [url]);
  
    return person;
}

export default useGetPerson