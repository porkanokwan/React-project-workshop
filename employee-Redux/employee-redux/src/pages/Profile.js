import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DefaultProfile from "../img/user.png";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import useGetPerson from "../hooks/getdata/useGetPerson";

function Profile() {
  const { empId } = useParams();
  const person = useGetPerson(empId);
  const navigate = useNavigate();
  
  const linkImg = person?.profilePath?.includes("geotalent")
    ? person?.profilePath
    : DefaultProfile;

  const handleClickEdit = () => {
    navigate(`/form-edit/${empId}`);
  };

  return (
    <div className="container-profile">
      <div className="card">
        <Card sx={{ width: 400, height: 500 }}>
          <CardMedia
            component="img"
            width="400"
            height="500"
            image={linkImg}
            alt={person?.fullNameEN}
          />
        </Card>
      </div>

      <div className="profile">
        <h3>
          EmpID: <span>{person.empID}</span>
        </h3>
        <h3>
          Name: <span>{person.fullNameEN}</span>
        </h3>
        <h3>
          Nickname: <span>{person.nickName}</span>
        </h3>
        <h3>
          BirthDate: <span>{person.birthDate}</span>
        </h3>
        <h3>
          Email: <span>{person.email}</span>
        </h3>
        <h3>
          Phonenumber: <span>{person.telephone}</span>
        </h3>
        <h3>
          Department:{" "}
          <span>
            {person?.department?.fullNameEN} ({person?.department?.shortNameEN})
          </span>
        </h3>
        <h3>
          Department: <span>{person?.position?.nameEN}</span>
        </h3>

        <div className="btn-edit">
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            type="button"
            onClick={handleClickEdit}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
