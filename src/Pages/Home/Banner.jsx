import { Link } from "react-router-dom";
import bannerBg from "../../assets/banner_img.png";

const Banner = () => {
  return (
    <div className="bg-[#9481592d]">
      <div className="h-screen w-11/12 lg:container mx-auto flex flex-col-reverse lg:flex-row justify-around lg:justify-between items-center p-6 lg:p-0">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[60px] lg:leading-[80px]">
            Study Buddy <br />
            The Only Online Platform You Will Ever Need
          </h1>
          <button className="btn bg-[#E58014] hover:bg-[#E58014] text-white font-bold text-xl border-none mt-20 ">
            <Link to={"/assignments"}>Get started</Link>
          </button>
        </div>
        <img className="lg:w-1/2" src={bannerBg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
