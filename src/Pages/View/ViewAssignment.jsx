import { useLoaderData } from "react-router-dom";
import banner from "../../assets/viewAssignment.png";
import Modal from "./Modal";
import { useState } from "react";

const ViewAssignment = () => {
  const assignment = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  const { _id, title, deadline, difficulty, description, marks, url } =
    assignment;

  return (
    <div className="min-h-screen w-11/12 pt-28 lg:container mx-auto">
      <div>
        <div className="border overflow-hidden lg:h-[30vh] rounded-2xl">
          <img className="w-full" src={banner} alt="" />
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-4xl lg:text-5xl font-bold">
          View Assignment Details
        </h1>
        <p className="lg:w-3/4 mt-6 text-xl">
          Vew all the information about the assignment. Read through everything
          before you get a clear idea about the assignment. A clear
          understanding is neccessary to solve any problem. Good luck!
        </p>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-8 items-center my-12">
          <img className="lg:w-1/4 border rounded-2xl" src={url} alt="" />
          <div className="w-full">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0 my-2">
              <h3 className="text-4xl font-bold">{title}</h3>
              <p className="text-2xl font-bold">Marks: {marks}</p>
            </div>
            <div className="text-lg flex justify-between">
              <p>Diffuculty: {difficulty}</p>
              <p>Deadline: {deadline}</p>
            </div>
            <div className="my-6">
              <h3 className="text-2xl font-semibold">Assignment Description</h3>
              <p className="mt-2 text-lg">{description}</p>
              <button
                onClick={() => setShowModal(true)}
                className="mt-10 btn bg-[#E58014] hover:bg-[#E58014] text-xl text-white font-semibold border-none  "
              >
                Take Assignment
              </button>
              <Modal
                isOpen={showModal}
                isClose={setShowModal}
                id={_id}
                title={title}
                marks={marks}
              ></Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
