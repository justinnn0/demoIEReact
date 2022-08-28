import logo from './logo.svg';
import './App.css';
import NutritionTable from './nutritionTable/NutritionTable';
import NavigationBar from './navigationBar/NavigationBar';
import ImageCard from './imageCard/ImageCard';

import ImageAvatars from './BottomNavigation';
import DemoAPI from './demoAPI/DemoAPI';





function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    // <div>
    // <NavigationBar></NavigationBar>
    // <div className = "flex-container">
    //   <NutritionTable></NutritionTable>
    //   <ImageCard></ImageCard>
    // </div>
    // <ImageAvatars></ImageAvatars>

    // </div>

    <DemoAPI></DemoAPI>


  );
}

export default App;
