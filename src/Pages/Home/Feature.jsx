import { MdAssignment } from "react-icons/md";

const Feature = () => {
  return (
    <div className="container mx-auto my-24">
      <h1 className="text-7xl font-extrabold">Features</h1>
      <div className="">
        <div className="flex gap-6 justify-between my-12">
          <div className="flex flex-col juctify-center items-center hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out border p-6 w-52 rounded-2xl">
            <MdAssignment className="text-8xl" />
            <h3 className="text-2xl font-medium">
              Assignment <br /> Creatation
            </h3>
          </div>
          <div className="flex flex-col juctify-center items-center transition duration-300 ease-in-out border p-6 w-52 hover:w-60 rounded-2xl">
            <MdAssignment className="text-8xl" />
            <h3 className="text-2xl font-medium">
              Assignment <br /> Completion
            </h3>
          </div>
          <div className="flex flex-col juctify-center items-center transition duration-300 ease-in-out border p-6 w-52 hover:w-60 rounded-2xl">
            <MdAssignment className="text-8xl" />
            <h3 className="text-2xl font-medium">
              Assignment <br /> Grading
            </h3>
          </div>
          <div className="flex flex-col juctify-center items-center transition duration-300 ease-in-out border p-6 w-52 hover:w-60 rounded-2xl">
            <MdAssignment className="text-8xl" />
            <h3 className="text-2xl font-medium">
              Peer <br /> Review
            </h3>
          </div>
          <div className="flex flex-col juctify-center items-center transition duration-300 ease-in-out border p-6 w-52 hover:w-60 rounded-2xl">
            <MdAssignment className="text-8xl" />
            <h3 className="text-2xl font-medium">
              Take or Get
              <br /> Help
            </h3>
          </div>
          <div className="flex flex-col juctify-center items-center transition duration-300 ease-in-out border p-6 w-52 hover:w-60 rounded-2xl">
            <MdAssignment className="text-8xl" />
            <h3 className="text-2xl font-medium">
              Free of <br /> Cost
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

/**
 * features
 *
 * 1. Assignment Creatation
 * 2. Assignment Completion
 * 3. Assignment Grading
 * 4. Peer Review
 * 5. Free of cost
 * 6. Take or Get Help
 */
