import logo from "../img/logo.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonPinIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [value, setValue] = useState(0);
  const navaigate = useNavigate();

  const handleChange = (event, newValue) => setValue(newValue);
  const handleClickForm = () => navaigate("/form-add");
  const handleClickHome = () => navaigate("/");

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" width="260px" height="80px" />
      </div>

      <div className="nav">
        <Tabs value={value} onChange={handleChange}>
          <Tab
            icon={<PersonPinIcon />}
            label="all member"
            onClick={handleClickHome}
          />
          <Tab
            icon={<AssignmentIndIcon />}
            label="add new"
            onClick={handleClickForm}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
