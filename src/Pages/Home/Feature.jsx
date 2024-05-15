import { MdAssignment } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import features from "../../assets/features.png";

const Feature = () => {
  return (
    <div className="w-11/12 lg:container mx-auto my-12 lg:my-24">
      <h1 className="text-[46px] lg:text-6xl font-bold">What We Provide</h1>
      <div className="">
        <div className="grid grid-cols-2 lg:flex gap-6 justify-between my-12">
          <div className="flex flex-col juctify-center bg-base-200 items-center hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-xl transition duration-300 ease-out p-6 w-auto rounded-2xl">
            <MdAssignment className="text-8xl text-[#264790]" />
            <h3 className="text-xl font-medium">
              Assignment <br /> Creatation
            </h3>
          </div>
          <div className="flex flex-col juctify-center bg-base-200 items-center hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-xl transition duration-300 ease-out p-6 w-auto rounded-2xl">
            <MdAssignmentTurnedIn className="text-8xl text-[#264790]" />
            <h3 className="text-xl font-medium">
              Assignment <br /> Completion
            </h3>
          </div>
          <div className="flex flex-col juctify-center bg-base-200 items-center hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-xl transition duration-300 ease-out p-6 w-auto rounded-2xl">
            <GrDocumentPerformance className="text-8xl text-[#264790]" />
            <h3 className="text-xl font-medium">
              Assignment <br /> Grading
            </h3>
          </div>
          <div className="flex flex-col juctify-center bg-base-200 items-center hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-xl transition duration-300 ease-out p-6 w-auto rounded-2xl">
            <MdOutlineRateReview className="text-8xl text-[#264790]" />
            <h3 className="text-xl font-medium">
              Peer <br /> Review
            </h3>
          </div>
          <div className="flex flex-col juctify-center bg-base-200 items-center hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-xl transition duration-300 ease-out p-6 w-auto rounded-2xl">
            <FaHandsHelping className="text-8xl text-[#264790]" />
            <h3 className="text-xl font-medium">
              Take or Get
              <br /> Help
            </h3>
          </div>
          <div className="flex flex-col juctify-center bg-base-200 items-center hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-xl transition duration-300 ease-out p-6 w-auto rounded-2xl">
            <TbFreeRights className="text-8xl text-[#264790]" />
            <h3 className="text-xl font-medium">
              Free of <br /> Cost
            </h3>
          </div>
        </div>
        <div>
          <div className="hero justify-between">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <img src={features} className="lg:w-2/5 drop-shadow-lg" />
              <div className="lg:w-1/2">
                <h1 className="text-5xl font-bold">
                  Boost up you study with the best features available
                </h1>
                <div className="rounded-xl p-6 bg-base-200 my-6 flex items-center justify-center hover:scale-110 transition duration-300 ease-out hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-2xl">
                  <p className="text-xl font-medium">
                    Need Help with any problem? Just create an Assignment and
                    post it.
                  </p>
                </div>
                <div className="rounded-xl p-6 bg-base-200 my-6 flex items-center justify-center hover:scale-110 transition duration-300 ease-out hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-2xl">
                  <p className="text-xl font-medium">
                    Help someone by taking an Assignment and after Completion
                    submit it.
                  </p>
                </div>
                <div className="rounded-xl p-6 bg-base-200 my-6 flex items-center justify-center hover:scale-110 transition duration-300 ease-out hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-2xl">
                  <p className="text-xl font-medium">
                    Review assignment & provide feedback to enhance topic
                    understanding.
                  </p>
                </div>
                <div className="rounded-xl p-6 bg-base-200 my-6 flex items-center justify-center hover:scale-110 transition duration-300 ease-out hover:transition hover:duration-300 hover:ease-in-out hover:drop-shadow-2xl">
                  <p className="text-xl font-medium">
                    Knowledge sharing is always Free of Cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
