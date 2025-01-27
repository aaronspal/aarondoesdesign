import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import RocketTeam from './pages/rocketteam';
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
        {/*<Home/>*/}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rocketteam" element={<RocketTeam/>}/>
        </Routes>
        {/*<Navigation section="AARON SPALDING"/>*/}
    </div>
  );
}

export default App;
