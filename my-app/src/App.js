
import './App.css';
import Nav from './component/navbar';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter> 
   <Nav></Nav>
   <Home></Home>
   </BrowserRouter> 
   </>
  );
}

export default App;
