import './App.css';
import Search from './components/Search/search';
import Current, { current_weather } from './components/currrent-weather/current_weather';
import { Weather_API_URL } from './api';
import { Weather_API_KEY } from './api';
function App() {
  const handleOnSeacrchChange=(data_entered)=>{
   const[lat,lon]= data_entered.value.split(" ");
   //fetching the va;ues (2)
// eslint-disable-next-line no-template-curly-in-string
const current_weatherFeth  = fetch(`${Weather_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}`)
const forecastFetch  = fetch(`${Weather_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}`)
   Promise.all([current_weatherFeth,forecastFetch])
   .then(async (response)=>{
   })
  }
  return (
    <div className="App">
     <Search onSeacrchChange={handleOnSeacrchChange}/>
     <Current/>
    </div>
  );
}


export default App;
