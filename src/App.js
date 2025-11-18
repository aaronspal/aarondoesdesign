import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Work from './pages/work/work';
import Gallery from './pages/gallery/gallery';
import Resume from './pages/resume/resume';
import RocketTeam from './pages/showcases/rocketteam/rocketteam';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
        <ScrollToTop />
        {/*<Home/>*/}
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/showcases/rocketteam" element={<RocketTeam/>}/>
        </Routes>
        <Footer/>
        {/*<Navigation section="AARON SPALDING"/>*/}
    </div>
  );
}

export default App;
