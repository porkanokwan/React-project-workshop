import { useEffect } from "react";
import axios from "axios";
import { apiKey } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, selectData } from "../../redux/employeeSlice";

function useGetData() {
  const { datas } = useSelector(selectData);
  const dispatch = useDispatch();
  const url = "https://docker.geotalent.co.th/hr-qa/api/v1/employees";

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        dispatch(getAllData({ allData: res.data.result }));
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [dispatch, url]);

  return datas;
}

export default useGetData;
