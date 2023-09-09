import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterFour from './components/HooksCounterFour';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HooksCounter/>
      <HooksCounterTwo/>
      <HooksCounterThree/>
      <HooksCounterFour/> 
    </div>
  );
}

export default App;
