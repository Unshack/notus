import { Route, Routes } from "react-router-dom";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import Index from "./views/Index";
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/admin/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Admin />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<Auth />}>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Route>

        <Route path='/landing' element={<Landing />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
