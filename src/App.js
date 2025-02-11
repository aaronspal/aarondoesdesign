import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import RocketTeam from './pages/rocketteam';
import FormulaSlug from "./pages/formulaslug";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import DataMonkey from "./pages/datamonkey";
import CMPM from "./pages/cmpm";
import Music from "./pages/music";
import Cases from "./pages/cases";
import Slugworks from "./pages/slugworks";

function App() {
  return (
    <div className="App">
        <ScrollToTop/>
        {/*<Home/>*/}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rocketteam" element={<RocketTeam/>}/>
            <Route path="/datamonkey" element={<DataMonkey/>}/>
            <Route path="/formulaslug" element={<FormulaSlug/>}/>
            <Route path="/slugworks" element={<Slugworks/>}/>
            <Route path="/cmpm" element={<CMPM/>}/>
            <Route path="/cases" element={<Cases/>}/>
            <Route path="/music" element={<Music/>}/>
        </Routes>
        {/*<Navigation section="AARON SPALDING"/>*/}
    </div>
  );
}

export default App;
