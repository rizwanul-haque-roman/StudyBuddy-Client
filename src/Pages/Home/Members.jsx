import globe from "../../assets/globe.gif";

const Members = () => {
  return (
    <div className="w-11/12 lg:container mx-auto my-12 lg:my-24">
      <div>
        <div>
          <div className="hero justify-between">
            <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
              <img src={globe} className="lg:w-2/5" />
              <div className="lg:w-1/2">
                <h1 className="text-5xl lg:text-6xl font-bold leading-[60px] lg:leading-[80px]">
                  More Than 25K+ <br /> Students in one place.
                </h1>
                <p className="my-8 text-xl font-medium">
                  Connect with people around the globe to learn something new
                  everyday. Solve problems by completing assignmets and charge
                  up your brain.
                </p>
                <button className="btn bg-[#E58014] hover:bg-[#E58014] text-white font-bold text-xl border-none drop-shadow-[0_8px_8px_rgba(247,186,51)]">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
