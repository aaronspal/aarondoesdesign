import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
        {/*<Home/>*/}
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        {/*<Navigation section="AARON SPALDING"/>*/}
    </div>
  );
}

export default App;
