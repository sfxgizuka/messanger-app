import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register';
function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/messanger/login" element={<Login />}/>
                <Route path="/messanger/register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
