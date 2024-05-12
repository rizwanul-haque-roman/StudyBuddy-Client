import { useEffect, useState } from "react";
import axios from "axios";
import CardAssignment from "./CardAssignment";
import { useLoaderData } from "react-router-dom";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  // const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;
  const { count } = useLoaderData();
  let totalPage = Math.ceil(count / dataPerPage);
  const pages = [...Array(totalPage).keys()];

  console.log(count);
  const haandlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/assignments?page=${
          currentPage - 1
        }&size=${dataPerPage}`
      )
      .then((res) => {
        setAssignments(res.data);
      });
  }, [currentPage]);

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
        <div className="my-12 text-center">
          <button
            onClick={haandlePrev}
            className={`btn ${currentPage == 1 && "btn-disabled"}`}
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page + 1)}
              className={`btn ml-2 ${
                currentPage == page + 1 && "bg-green-400"
              } `}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className={`btn ml-2 ${totalPage == currentPage && "btn-disabled"}`}
            role="button"
            aria-disabled="true"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
