import learner from "../../assets/banner_img.png";

const Banner = () => {
  return (
    <div className="bg-[#e0dede]">
      <div className="h-screen  container mx-auto flex justify-between items-center">
        <div>
          <h1>Let&apos;s Grow Your Education Level up with E-Learning</h1>
        </div>
        <img src={learner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
