import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';

function App() {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path={'home'} element={<Home/>}/>
          <Route path={'registration'} element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;