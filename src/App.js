import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path={'home'} element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;