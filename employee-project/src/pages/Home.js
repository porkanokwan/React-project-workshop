import { useEffect, useState } from "react";
import CardItem from "../component/CardItem";
import useGetData from "../hooks/getdata/useGetData";

function Home() {
  const [allData, setAllData] = useState([]);
  const datas = useGetData();

  useEffect(() => {
    setAllData(datas);
  }, [datas]);

  const filteredData = allData.sort((a, b) => {
    if (a.empID > b.empID) {
      return 1;
    } else if (a.empID < b.empID) {
      return -1;
    } else {
      return 0;
    }
  });
  // .filter((item) => item.statusID === 1)

  return (
    <div className="box-card">
      {filteredData.map((item) => (
        <CardItem key={item.empID} datas={item} />
      ))}
    </div>
  );
}

export default Home;
