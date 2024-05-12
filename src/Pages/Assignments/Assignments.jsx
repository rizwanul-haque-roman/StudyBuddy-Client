import { useEffect, useState } from "react";
import axios from "axios";
import CardAssignment from "./CardAssignment";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/assignments").then((res) => {
      setAssignments(res.data);
    });
  }, []);

  // console.log(assignments);
  return (
    <div className="min-h-screen pt-28">
      <div className="container mx-auto ">
        <div className="border bg-assignment bg-cover bg-center bg-no-repeat h-[30vh] rounded-2xl"></div>
        <h1 className="text-center my-12 text-5xl font-bold">
          Available Assignments
        </h1>
        <div className="grid grid-cols-2 gap-6 my-12">
          {assignments.map((assignment) => (
            <CardAssignment key={assignment._id} assignment={assignment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
