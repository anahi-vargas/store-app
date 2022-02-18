import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css"

function App() {
  const location = useLocation()

  return (
    <div className="App">
       {location.pathname === '/products' ? <NavBar showSearchBar={true}/> : <NavBar showSearchBar={false}/>}
      <Outlet />
    </div>
  );
}

export default App;
