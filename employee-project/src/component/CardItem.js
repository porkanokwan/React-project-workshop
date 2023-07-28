import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DefaultProfile from "../img/user.png";

function CardItem({ datas }) {
  const navigate = useNavigate();
  const linkImg = datas?.profilePath.includes("geotalent")
    ? datas?.profilePath
    : DefaultProfile;

  const handleClickProfile = () => navigate(`/profile/${datas.empID}`);
  return (
    <Card sx={{ width: 380, boxShadow: "3px 3px 8px grey" }}>
      <CardMedia
        component="img"
        height="350"
        image={linkImg}
        alt={datas?.fullNameEN}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {datas?.fullNameEN} ({datas?.nickName})
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {datas?.empID}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {datas.position.nameEN}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {datas.department.fullNameEN} ({datas.department.shortNameEN})
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickProfile}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
