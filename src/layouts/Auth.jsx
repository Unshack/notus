import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";

const Auth = () => {
  return (
    <>
      <AuthNavbar transparent />
      <main>
        <section className='relative w-full h-full py-40 min-h-screen'>
          <div
            className='absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full'
            style={{
              backgroundImage: `url("/src/assets/img/register_bg_2.png")`,
            }}
          ></div>
          <Outlet />
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
};

export default Auth;
