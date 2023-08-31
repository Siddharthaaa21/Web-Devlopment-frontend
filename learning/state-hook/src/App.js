import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HooksCounter/>
      <HooksCounterTwo/>
    </div>
  );
}

export default App;
