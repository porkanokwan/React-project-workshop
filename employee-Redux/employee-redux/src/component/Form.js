import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FormHelperText } from "@mui/material";
import useGetPosition from "../hooks/getdata/useGetPosition";
import useGetDepartment from "../hooks/getdata/useGetDepartment";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Form(props) {
  const {
    inputEdit,
    inputData,
    handleChooseDepartment,
    handleChoosePosition,
    handleChangeStartDate,
    handleChangeProfilePic,
    handleChangePhoneNumber,
    handleChangeNickName,
    handleChangeLastNameTH,
    handleChangeLastNameEN,
    handleChangeFirstNameTH,
    handleChangeFirstNameEN,
    handleChangeEmpId,
    handleChangeEmail,
    handleChangeBirthDate,
    handleSubmit,
    errorMessage,
    handleClose,
    open,
    errorDuplicate,
  } = props;
  const selectPosition = useGetPosition();
  const selectDepartment = useGetDepartment();

  const findErrorMessage = (text) =>
    errorMessage.find((item) => item.includes(text));

  return (
    <div className="form-add">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            label="EmpID"
            value={inputData?.empID || inputEdit?.empID || ""}
            size="small"
            variant="standard"
            onChange={handleChangeEmpId}
            error={Boolean(findErrorMessage("empID"))}
            helperText={findErrorMessage("empID")}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={inputEdit?.startDate || inputData?.startDate || ""}
              onChange={handleChangeStartDate}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={
                    (inputEdit?.startDate || inputData?.startDate) !== null &&
                    !!findErrorMessage("startDate")
                  }
                  helperText={findErrorMessage("startDate")}
                />
              )}
            />
          </LocalizationProvider>
          <div>
            <TextField
              label="FirstName(TH)"
              value={inputData?.firstNameTH || inputEdit?.firstNameTH || ""}
              variant="standard"
              onChange={handleChangeFirstNameTH}
              error={findErrorMessage("firstNameTH") && true}
              helperText={findErrorMessage("firstNameTH")}
            />
            <TextField
              label="LastName(TH)"
              value={inputData?.lastNameTH || inputEdit?.lastNameTH || ""}
              variant="standard"
              onChange={handleChangeLastNameTH}
              error={findErrorMessage("lastNameTH") && true}
              helperText={findErrorMessage("lastNameTH")}
            />
          </div>
          <div>
            <TextField
              label="FirstName(EN)"
              value={inputData?.firstNameEN || inputEdit?.firstNameEN || ""}
              variant="standard"
              onChange={handleChangeFirstNameEN}
              error={findErrorMessage("firstNameEN") && true}
              helperText={findErrorMessage("firstNameEN")}
            />
            <TextField
              label="LastName(EN)"
              value={inputData?.lastNameEN || inputEdit?.lastNameEN || ""}
              variant="standard"
              onChange={handleChangeLastNameEN}
              error={findErrorMessage("lastNameEN") && true}
              helperText={findErrorMessage("lastNameEN")}
            />
          </div>
          <div>
            <TextField
              label="NickName"
              value={inputData?.nickName || inputEdit?.nickName || ""}
              variant="standard"
              onChange={handleChangeNickName}
              error={findErrorMessage("nickName") && true}
              helperText={findErrorMessage("nickName")}
            />
            <TextField
              label="Email"
              value={inputData?.email || inputEdit?.email || ""}
              variant="standard"
              onChange={handleChangeEmail}
              error={findErrorMessage("email") && true}
              helperText={findErrorMessage("email")}
            />
          </div>
          <div>
            <TextField
              label="Phonenumber"
              value={inputData?.telephone || inputEdit?.telephone || ""}
              variant="standard"
              onChange={handleChangePhoneNumber}
              error={findErrorMessage("telephone") && true}
              helperText={findErrorMessage("telephone")}
            />
            <TextField
              label="Profile picture"
              value={inputData?.profilePath || inputEdit?.profilePath || ""}
              variant="standard"
              onChange={handleChangeProfilePic}
            />
          </div>
          {/* ใช้ Component UI */}
          <div style={{ marginTop: "20px" }}>
            <FormControl>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                error={!!findErrorMessage("positionID")}
              >
                Position
              </InputLabel>
              <NativeSelect
                value={inputData?.positionID || inputEdit?.positionID || ""}
                onChange={handleChoosePosition}
                error={!!findErrorMessage("positionID")}
              >
                <option value={"0"} disabled>
                  choose position
                </option>
                {selectPosition?.map((item) => (
                  <option key={item.positionID} value={item.positionID}>
                    {item.nameEN}
                  </option>
                ))}
              </NativeSelect>
              <FormHelperText error={!!findErrorMessage("positionID")}>
                {findErrorMessage("positionID")}
              </FormHelperText>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Birth Date"
                value={inputEdit?.birthDate || inputData?.birthDate || ""}
                onChange={handleChangeBirthDate}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={
                      (inputEdit?.birthDate || inputData?.birthDate) !== null &&
                      !!findErrorMessage("birthDate")
                    }
                    helperText={findErrorMessage("birthDate")}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
          <FormControl>
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native"
              error={!!findErrorMessage("birthDate")}
            >
              Department
            </InputLabel>
            <NativeSelect
              value={inputData?.departmentID || inputEdit?.departmentID || ""}
              onChange={handleChooseDepartment}
              error={!!findErrorMessage("birthDate")}
            >
              <option value={"0"} disabled>
                choose department
              </option>
              {selectDepartment.map((item) => (
                <option key={item.departmentID} value={item.departmentID}>
                  {item.fullNameEN}
                </option>
              ))}
            </NativeSelect>
            <FormHelperText error={!!findErrorMessage("birthDate")}>
              {findErrorMessage("departmentID")}
            </FormHelperText>
          </FormControl>
        </div>
        <div className="btn-submit">
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Send
          </Button>
        </div>
      </Box>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorDuplicate}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default Form;
