import './App.css';
import Header from './Components/Header.js'
import UpperRight from './Components/UpperRight.js'
import CardContainer from './Components/CardContainer.js'
import LeftSide from './Components/LeftSide.js'
import RightSide from './Components/RightSide.js'

function App() {
  return (
    <div className="parent">
      <Header />
      <UpperRight />
      <CardContainer />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
