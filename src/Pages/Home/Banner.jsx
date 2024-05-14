import { Link } from "react-router-dom";
import bannerBg from "../../assets/banner_img.png";

const Banner = () => {
  return (
    <div className="bg-[#f7b9332d]">
      <div className="h-screen container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-bold lg:leading-[80px]">
            Study Buddy <br />
            The Only Online Platform You Will Ever Need
          </h1>
          <button className="btn bg-[#E58014] hover:bg-[#E58014] text-white font-bold text-xl border-none mt-20 drop-shadow-[0_8px_8px_rgba(247,186,51)]">
            <Link to={"/assignments"}>Get started</Link>
          </button>
        </div>
        <img className="w-1/2" src={bannerBg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
