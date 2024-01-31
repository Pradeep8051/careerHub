import logo from "./logo.svg";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Router,
  useHistory,
} from "react-router-dom";
import About from "./About";
import Login from "./Login";
import EmployerRegisterSetp1 from "./Pages/EmployerRegisterSetp1";
import EmployerRegisterSetp2 from "./Pages/EmployerRegisterSetp2";
import Dashboard from "./Pages/Dashboard";
import Navbaar from "./Pages/Navbaar";
import EmployeeRegister1 from "./Pages/EmployeeRegister1";
import EmployeeRegister2 from "./Pages/EmployeeRegister2";
import Card from "./Component/JobCard";
import JobDetails from "./Component/JobDetails";
import HomePage from "./Pages/HomePage";
import Footer from "./Pages/Footer";
import JobSearch from "./Pages/JobSearch";
import EmployersProfile from "./Pages/EmployersProfile";
import Abouts from "./Pages/Abouts";
import TermCondation from "./Pages/TermCondation";
import sessionstorage from "sessionstorage";
import { useEffect, useState } from "react";
import ApplidJobList from "./Pages/ApplidJobList";

function App() {
  const [Token, setToken] = useState("");
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(Router.asPath);
  }, []);

  function authCheck(url) {
    // const navigate = useNavigate();
    let getToken = sessionstorage.getItem("loginToken");
    setToken(getToken);
    const publicPath = ["/", "/"];
    const path = url && url.split("?")[0];

    if (!Token && publicPath.includes(path)) {
      setAuthorized(false);
      // navigate.push({
      //   pathname: '/',
      //   search: `?returnUrl=${encodeURIComponent(location.pathname)}`,
      // });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* {
          authCheck &&   <Route path="About" element={<About />} />
        } */}
        {/* <Route index element={<Login />} /> */}
        <Route path="Login" element={<Login />} />

        <Route
          path="EmployerRegisterSetp1"
          element={<EmployerRegisterSetp1 />}
        />
        <Route
          path="EmployerRegisterSetp2"
          element={<EmployerRegisterSetp2 />}
        />
        <Route path="Navbaar" element={<Navbaar />} />
        {/* <Route path="HomePage" element={<HomePage />} /> */}
        <Route path="ApplidJobList" element={<ApplidJobList />} />
        
        <Route path="EmployeeRegister1" element={<EmployeeRegister1 />} />
        <Route path="EmployeeRegister2" element={<EmployeeRegister2 />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="JobDetails" element={<JobDetails />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="JobSearch" element={<JobSearch />} />
        <Route path="Abouts" element={<Abouts />} />
        <Route path="TermCondation" element={<TermCondation />} />

        <Route path="EmployersProfile" element={<EmployersProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
