import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../component/Form";
import useGetPerson from "../hooks/getdata/useGetPerson";

function EditForm() {
  const { empId } = useParams();
  const [editData, setEditData] = useState({});
  const [errorMessage, setErrorMassage] = useState([]);
  const dataPerson = useGetPerson(empId);

  useEffect(() => {
    setEditData(dataPerson);
  }, [dataPerson]);

  const handleChooseDepartment = (e) => {
    setEditData((prev) => ({ ...prev, departmentID: +e.target.value }));
  };
  const handleChoosePosition = (e) => {
    setEditData((prev) => ({ ...prev, positionID: +e.target.value }));
  };
  const handleChangeEmpId = (e) =>
    setEditData((prev) => ({ ...prev, empID: e.target.value }));
  const handleChangeStartDate = (newValue) => {
    const date = new Intl.DateTimeFormat("en-GB").format(newValue);
    const formatDate = date.split("/").reverse().join("-");
    setEditData((prev) => ({ ...prev, startDate: formatDate }));
  };
  const handleChangeFirstNameTH = (e) =>
    setEditData((prev) => ({ ...prev, firstNameTH: e.target.value }));

  const handleChangeLastNameTH = (e) =>
    setEditData((prev) => ({ ...prev, lastNameTH: e.target.value }));

  const handleChangeFirstNameEN = (e) =>
    setEditData((prev) => ({ ...prev, firstNameEN: e.target.value }));

  const handleChangeLastNameEN = (e) =>
    setEditData((prev) => ({ ...prev, lastNameEN: e.target.value }));

  const handleChangeNickName = (e) =>
    setEditData((prev) => ({ ...prev, nickName: e.target.value }));

  const handleChangeEmail = (e) =>
    setEditData((prev) => ({ ...prev, email: e.target.value }));

  const handleChangePhoneNumber = (e) =>
    setEditData((prev) => ({ ...prev, telephone: e.target.value }));

  const handleChangeBirthDate = (newValue) => {
    const date = new Intl.DateTimeFormat("en-GB").format(newValue);
    const formatDate = date.split("/").reverse().join("-");
    setEditData((prev) => ({ ...prev, birthDate: formatDate }));
  };

  const handleChangeProfilePic = (e) =>
    setEditData((prev) => ({ ...prev, profilePath: e.target.value }));

  return (
    <Form
      inputEdit={editData}
      handleChooseDepartment={handleChooseDepartment}
      handleChoosePosition={handleChoosePosition}
      handleChangeStartDate={handleChangeStartDate}
      handleChangeProfilePic={handleChangeProfilePic}
      handleChangePhoneNumber={handleChangePhoneNumber}
      handleChangeNickName={handleChangeNickName}
      handleChangeLastNameTH={handleChangeLastNameTH}
      handleChangeLastNameEN={handleChangeLastNameEN}
      handleChangeFirstNameTH={handleChangeFirstNameTH}
      handleChangeFirstNameEN={handleChangeFirstNameEN}
      handleChangeEmpId={handleChangeEmpId}
      handleChangeEmail={handleChangeEmail}
      handleChangeBirthDate={handleChangeBirthDate}
      errorMessage={errorMessage}
      setErrorMassage={setErrorMassage}
    />
  );
}

export default EditForm;
