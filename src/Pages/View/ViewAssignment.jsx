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
    <div className="min-h-screen pt-28 container mx-auto">
      <div>
        <div className="border overflow-hidden h-[30vh] rounded-2xl">
          <img className="w-full" src={banner} alt="" />
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-5xl font-bold">View Assignment Details</h1>
        <p className="w-3/4 mt-6 text-xl">
          Vew all the information about the assignment. Read through everything
          before you get a clear idea about the assignment. A clear
          understanding is neccessary to solve any problem. Good luck!
        </p>
      </div>
      <div>
        <div className="flex gap-8 items-center my-12">
          <img className="w-1/4 border rounded-2xl" src={url} alt="" />
          <div className="w-full">
            <div className="flex justify-between items-center my-2">
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
                className="mt-10 btn bg-[#E58014] hover:bg-[#E58014] text-xl text-white font-semibold border-none  drop-shadow-[0_8px_8px_rgba(247,186,51)]"
              >
                Take Assignment
              </button>
              <Modal
                isOpen={showModal}
                isClose={setShowModal}
                id={_id}
                title={title}
              ></Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
