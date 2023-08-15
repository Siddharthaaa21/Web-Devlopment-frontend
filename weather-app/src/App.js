import './App.css';
import Search from './components/Search/search';
import Current, { current_weather } from './components/currrent-weather/current_weather';

function App() {
  const handleOnSeacrchChange=(data_entered)=>{
    console.log(data_entered)
  }
  return (
    <div className="App">
     <Search onSeacrchChange={handleOnSeacrchChange}/>
     <Current/>
    </div>
  );
}


export default App;
