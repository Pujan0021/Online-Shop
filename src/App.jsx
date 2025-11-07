import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
const App = ({ query }) => {
  return (
    <>
      <NavBar onSearch={query} />
      <Outlet />
    </>
  );
};

export default App;
