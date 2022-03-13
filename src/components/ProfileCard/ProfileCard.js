import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import img from "../../images/profile.png";
const fullName = "حسام الدین چراغی";
const major = "مهندسی مکانیک";
const enteringYear = 1398;
export default function ProfileCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
      }}
    >
      <CardContent>
        <Avatar
          alt="profile image"
          src={img}
          sx={{
            width: 150,
            height: 150,
            margin: "0 auto",
            marginBottom: "0.75em",
          }}
        >
          Hessam
        </Avatar>

        <Typography gutterBottom variant="body2" component="div">
          نام و نام خانوادگی:
          <Typography variant="subtitle1" component="span">
            {" "}
            {fullName}
          </Typography>
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          رشته:
          <Typography variant="subtitle1" component="span">
            {" "}
            {major}
          </Typography>
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          سال ورود:
          <Typography variant="subtitle1" component="span">
            {" "}
            {enteringYear}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
