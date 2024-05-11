import learner from "../../assets/banner_img.png";
import blob from "../../assets/blob.svg";

const Banner = () => {
  return (
    <div className="bg-[#f7b9332d]">
      {/* <svg
        className="w-3/4 absolute -right-[400px] -top-[350px] -z-[0] rotate-45 overflow-x-hidden"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F2F4F8"
          d="M30.6,-50.7C42.2,-46.3,55.8,-43.2,63.9,-34.9C72,-26.7,74.7,-13.3,76.1,0.8C77.4,15,77.6,29.9,69.4,38.1C61.3,46.4,44.9,47.9,32,55.2C19,62.6,9.5,75.7,-2.8,80.5C-15.1,85.4,-30.2,81.9,-39.4,72.4C-48.5,62.9,-51.7,47.3,-54.4,34.2C-57.2,21.1,-59.6,10.6,-63.1,-2C-66.7,-14.6,-71.3,-29.3,-68.5,-42.2C-65.7,-55.2,-55.3,-66.5,-42.6,-70.3C-30,-74,-15,-70.2,-2.7,-65.5C9.5,-60.8,19,-55.1,30.6,-50.7Z"
          transform="translate(100 100)"
        />
      </svg> */}
      <img
        className="absolute -z-[0] top-0 right-0 overflow-x-hidden"
        src={blob}
        alt=""
      />
      <div className="h-screen container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-7xl font-bold lg:leading-[100px]">
            Let&apos;s Grow Your <br /> Education Level up <br /> with
            E-Learning
          </h1>
          <button className="btn bg-[#E58014] hover:bg-[#E58014] text-white font-bold text-xl border-none mt-20 drop-shadow-[0_8px_8px_rgba(247,186,51)]">
            Get started
          </button>
        </div>
        <img className="z-10" src={learner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
