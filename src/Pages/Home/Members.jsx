import globe from "../../assets/globe.gif";

const Members = () => {
  return (
    <div className="container mx-auto my-24">
      <div>
        <div>
          <div className="hero justify-between">
            <div className="flex flex-row-reverse justify-between items-center">
              <img src={globe} className="w-2/5" />
              <div className="w-1/2">
                <h1 className="text-7xl font-bold leading-[80px]">
                  More Than 25K+ <br /> Students in one place.
                </h1>
                <p className="my-8 text-xl font-medium">
                  Connect with people around the globe to learn something new
                  everyday. Solve problems by completing assignmets and charge
                  up your brain.
                </p>
                <button className="btn bg-[#F7BA33] hover:bg-[#F7BA33] text-white font-bold text-xl border-none drop-shadow-[0_8px_8px_rgba(247,186,51)]">
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
