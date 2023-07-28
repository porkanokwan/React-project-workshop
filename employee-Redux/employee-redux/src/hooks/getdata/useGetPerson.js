import { useEffect } from "react";
import axios from "axios";
import { apiKey } from "../api";
import { selectData } from "../../redux/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDataByEmpID } from "../../redux/employeeSlice";

function useGetPerson(empId) {
    const { person } = useSelector(selectData);
    const dispatch = useDispatch();
    const url = `https://docker.geotalent.co.th/hr-qa/api/v1/employees/${empId}/Info`
  
    useEffect(() => {
      const fetch = async () => {
        try {
          const res = await axios.get(url, {
            headers: {
              "x-api-key": apiKey,
            },
          });
          dispatch(getDataByEmpID({ data: res.data.result }));
        } catch (err) {
          console.log(err);
        }
      };
  
      fetch();
    }, [dispatch, url]);
  
    return person;
}

export default useGetPerson