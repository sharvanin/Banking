import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home1";
import Contact from "./components/pages/Contact";
import Loginreg from "./components/pages/Loginreg";
import Contact1 from "./components/pages/Contact1";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import Dashboard from "./components/pages/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout />}>
          
              <Route index element={<Home />}/>
              <Route path="Contact" element={<Contact />}/>
              <Route path="Contact1" element={<Contact1 />}/>

              <Route path="login" element={<Loginreg />}/>
              <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
              <Route path="reset" element={<ResetPassword />} />
           </Route>
           <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;