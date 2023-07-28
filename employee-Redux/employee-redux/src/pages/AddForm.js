import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  addNewData  from "../hooks/add-form/addNewData";
import Form from "../component/Form";

function AddForm() {
  const [inputData, setInputData] = useState({
    empID: "",
    startDate: "",
    firstNameTH: "",
    lastNameTH: "",
    firstNameEN: "",
    lastNameEN: "",
    nickName: "",
    email: "",
    telephone: "",
    birthDate: "",
    departmentID: "0",
    positionID: "0",
    statusID: 1,
    profilePath: "",
  });
  const [errorMessage, setErrorMassage] = useState([]);
  const [errorDuplicate, setErrorDuplicate] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleChooseDepartment = (e) => {
    setInputData((prev) => ({ ...prev, departmentID: +e.target.value }));
  };
  const handleChoosePosition = (e) => {
    setInputData((prev) => ({ ...prev, positionID: +e.target.value }));
  };
  const handleChangeEmpId = (e) =>
    setInputData((prev) => ({ ...prev, empID: e.target.value }));
  const handleChangeStartDate = (newValue) => {
    const date = new Intl.DateTimeFormat("en-GB").format(newValue);
    const formatDate = date.split("/").reverse().join("-");
    setInputData((prev) => ({ ...prev, startDate: formatDate }));
  };
  const handleChangeFirstNameTH = (e) =>
    setInputData((prev) => ({ ...prev, firstNameTH: e.target.value }));

  const handleChangeLastNameTH = (e) =>
    setInputData((prev) => ({ ...prev, lastNameTH: e.target.value }));

  const handleChangeFirstNameEN = (e) =>
    setInputData((prev) => ({ ...prev, firstNameEN: e.target.value }));

  const handleChangeLastNameEN = (e) =>
    setInputData((prev) => ({ ...prev, lastNameEN: e.target.value }));

  const handleChangeNickName = (e) =>
    setInputData((prev) => ({ ...prev, nickName: e.target.value }));

  const handleChangeEmail = (e) =>
    setInputData((prev) => ({ ...prev, email: e.target.value }));

  const handleChangePhoneNumber = (e) =>
    setInputData((prev) => ({ ...prev, telephone: e.target.value }));

  const handleChangeBirthDate = (newValue) => {
    const date = new Intl.DateTimeFormat("en-GB").format(newValue);
    const formatDate = date.split("/").reverse().join("-");
    setInputData((prev) => ({ ...prev, birthDate: formatDate }));
  };

  const handleChangeProfilePic = (e) =>
    setInputData((prev) => ({ ...prev, profilePath: e.target.value }));

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newData = await addNewData(inputData);
      if (newData.error) {
        handleClick();
        setErrorDuplicate(newData.error.title);
        setErrorMassage([]);
      } else if (newData?.response?.data.statusCode === 400) {
        setErrorMassage(newData.response.data.message);
      } else {
        setErrorMassage([]);
        navigate(`/profile/${newData.empID}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      inputData={inputData}
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
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
      handleClose={handleClose}
      open={open}
      errorDuplicate={errorDuplicate}
    />
  );
}

export default AddForm;
