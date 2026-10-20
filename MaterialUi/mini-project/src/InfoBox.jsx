import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1673651378047-88a654e7a9b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1689298478069-cc04a1763866?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  return (
    <div className="InfoBox">
      {/* <h1 style={{ color: "black" }}>Weather Info - {info.weather}</h1> */}

      <div className="cardContainer">
        <Card sx={{ maxWidth: 500 }}>
          {/* <CardMedia sx={{ height: 240 }} image={INIT_URL} /> */}
          <CardMedia
            sx={{ height: 240 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Minimum Temperature = {info.tempMin}&deg;C</p>
              <p>Maximim Temperature = {info.tempMax}&deg;C</p>
              <p>The Weather Feels like {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
