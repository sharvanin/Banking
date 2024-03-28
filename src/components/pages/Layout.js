
import Navsbar from "../Navsbar";
import Home1 from "./Home1"; 
import Contact from "./Contact";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

const Layout = () => {
  return <>
   
    <Navsbar />
    <Outlet/>
    <CssBaseline/>
  </>;
};

export default Layout;
