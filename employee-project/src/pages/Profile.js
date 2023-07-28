import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DefaultProfile from "../img/user.png";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import useGetPerson from "../hooks/getdata/useGetPerson";

function Profile() {
  const { empId } = useParams();
  const dataPerson = useGetPerson(empId);
  const navigate = useNavigate();

  const linkImg = dataPerson?.profilePath?.includes("geotalent")
    ? dataPerson?.profilePath
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
            alt={dataPerson?.fullNameEN}
          />
        </Card>
      </div>

      <div className="profile">
        <h3>
          EmpID: <span>{dataPerson?.empID}</span>
        </h3>
        <h3>
          Name: <span>{dataPerson?.fullNameEN}</span>
        </h3>
        <h3>
          Nickname: <span>{dataPerson?.nickName}</span>
        </h3>
        <h3>
          BirthDate: <span>{dataPerson?.birthDate}</span>
        </h3>
        <h3>
          Email: <span>{dataPerson?.email}</span>
        </h3>
        <h3>
          Phonenumber: <span>{dataPerson?.telephone}</span>
        </h3>
        <h3>
          Department:{" "}
          <span>
            {dataPerson?.department?.fullNameEN} (
            {dataPerson?.department?.shortNameEN})
          </span>
        </h3>
        <h3>
          Department: <span>{dataPerson?.position?.nameEN}</span>
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
