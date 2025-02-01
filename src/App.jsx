import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
   <>
      <NavBar/>

   <Routes>
<Route path="/" element={<Home/>}/>
   </Routes>
   </>
    

  );
}

export default App;
