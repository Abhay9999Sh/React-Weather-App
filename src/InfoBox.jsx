import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {
    
    if (!info) return null;

  // Define image URLs
  const INIT_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const VERY_HOT_URL = "https://th.bing.com/th/id/OIP.pRI7TurIc4R5FUYH9EF5jQHaE8?rs=1&pid=ImgDetMain"; 
  const HOT_URL = "https://th.bing.com/th/id/OIP._6UW1704oYjKYfVcf84iMgHaEc?rs=1&pid=ImgDetMain";
  const WARM_URL = "https://www.wkbn.com/wp-content/uploads/sites/48/2022/06/sun-sunshine-trees-hot-warm-weather-generic.jpg?w=1280"; 
  const COOL_URL = "https://getwallpapers.com/wallpaper/full/8/a/4/1172863-popular-cold-weather-wallpaper-1920x1080-high-resolution.jpg";
  const VERY_COLD_URL = "https://i2-prod.liverpoolecho.co.uk/incoming/article8264542.ece/ALTERNATES/s615b/MPP_LEC_101214_winter_11.jpg"; 
  const RAIN_URL = "https://cdn.wallpapersafari.com/47/9/iylTRs.jpg";

  // Determine which image to use based on temperature
  const getImageUrl = () => {
    if (info.humidity > 80) return RAIN_URL;
    if (info.temp > 35) return VERY_HOT_URL;
    if (info.temp > 30) return HOT_URL;
    if (info.temp > 15) return WARM_URL;
    if (info.temp <= 0) return VERY_COLD_URL;
    if (info.temp <= 15) return COOL_URL;
    return INIT_URL;
  };

  return (
    <div className='infoBox'>
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={getImageUrl()}
            title="Weather"
          />
          <CardContent style={{ padding: "10px 16px", backgroundColor: '#f5f5f5' }}>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;
              {info.humidity > 80 ?
                <span className="material-symbols-outlined">water_drop</span> :
                info.temp > 35 ?
                  <span className="material-symbols-outlined">hot_tub</span> :
                  info.temp > 30 ?
                    <span className="material-symbols-outlined">sunny</span> :
                    info.temp > 15 ?
                      <span className="material-symbols-outlined">wb_sunny</span> :
                      info.temp <= 0 ?
                        <span className="material-symbols-outlined">snowflake</span> :
                        <span className="material-symbols-outlined">cloudy</span>}
            </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} style={{margin: "10px 0", fontWeight: 'bold'}} >
        <p style={{ fontWeight: 'bold' }}>Temperature: {info.temp}°C</p>
              <p style={{ fontWeight: 'bold' }}>Humidity: {info.humidity}%</p>
              <p style={{ fontWeight: 'bold' }}>Min Temp: {info.tempMin}°C</p>
              <p style={{ fontWeight: 'bold' }}>Max Temp: {info.tempMax}°C</p>
              <p style={{ fontWeight: 'bold' }}>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C</p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}
