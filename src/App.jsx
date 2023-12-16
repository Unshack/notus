import { Route, Routes } from "react-router-dom";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import Index from "./views/Index";
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<Admin />} />
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
