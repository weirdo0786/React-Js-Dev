import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
import WeatherApp from './WeatherApp'

function App() {
  return (
    <div>
      {/* <h1>Material UI</h1> */}
      <br></br>
      {/* <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>Contained</Button>
      <Button variant="outlined" color='error' endIcon={<SendIcon />} >Outlined</Button> */}
      {/* <SearchBox />
      <InfoBox /> */}
      <WeatherApp />
    </div>
  )
}

export default App
