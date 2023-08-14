import './App.css';
import Search from './components/Search/search';

function App() {
  const handleOnSeacrchChange=(data_entered)=>{
    console.log(data_entered)
  }
  return (
    <div className="App">
     <Search onSeacrchChange={handleOnSeacrchChange}/>
    </div>
  );
}

export default App;
