import CardItem from "../component/CardItem";
import useGetData from "../hooks/getdata/useGetData";

function Home() {
  const datas = useGetData();

  const sortData = [...datas].sort((a, b) => {
    if (a.empID > b.empID) {
      return 1;
    } else if (a.empID < b.empID) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <div className="box-card">
      {sortData.map((item) => (
        <CardItem key={item.empID} datas={item} />
      ))}
    </div>
  );
}

export default Home;
