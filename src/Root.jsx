import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
