import { Outlet } from "react-router-dom";
import HeaderStats from "../components/Headers/HeaderStats";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
