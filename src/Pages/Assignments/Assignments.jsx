import { useEffect, useState } from "react";
import axios from "axios";
import CardAssignment from "./CardAssignment";
import banner from "../../assets/assignmentBanner.png";
import loader_gif from "../../assets/loader-ezgif.gif";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loader, setLoader] = useState(true);
  const [difficulty, setDifficulty] = useState("");
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;
  let totalPage = Math.ceil(
    isNaN(count?.count) ? 0 / dataPerPage : count?.count / dataPerPage
  );

  // console.log(difficulty);
  const pages = [...Array(totalPage).keys()];

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

  const handleChange = (event) => {
    setDifficulty(event.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://study-buddy-server-six.vercel.app/totalAssignments?difficulty=${difficulty}`
      )
      .then((res) => {
        setCount(res.data);
        setLoader(false);
      });

    axios
      .get(
        `https://study-buddy-server-six.vercel.app/assignments?page=${
          currentPage - 1
        }&size=${dataPerPage}&difficulty=${difficulty}`
      )
      .then((res) => {
        setAssignments(res.data);
        setLoader(false);
      });
  }, [currentPage, difficulty]);

  return (
    <div>
      {loader ? (
        <>
          <div className="flex justify-center items-center h-[70vh]">
            <img className="w-1/3" src={loader_gif} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen pt-28">
            <div className="w-11/12 lg:container mx-auto ">
              <div className="border overflow-hidden lg:h-[30vh] rounded-2xl">
                <img className="w-full" src={banner} alt="" />
              </div>
              <h1 className="text-center my-12 text-5xl font-bold">
                Available Assignments
              </h1>
              <div>
                <form>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-lg font-semibold">
                        Filter
                      </span>
                    </div>
                    <select
                      value={
                        difficulty === "" ? "Filter by Difficulty" : difficulty
                      }
                      onChange={handleChange}
                      className="select select-bordered"
                    >
                      <option disabled>Filter by Difficulty</option>
                      <option value={"easy"}>Easy</option>
                      <option value={"medium"}>Medium</option>
                      <option value={"hard"}>Hard</option>
                      <option value={"all"}>Show all</option>
                    </select>
                  </label>
                </form>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 my-12">
                {assignments.map((assignment) => (
                  <CardAssignment
                    key={assignment._id}
                    assignment={assignment}
                    data={assignments}
                    setData={setAssignments}
                  />
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
                    className={`btn ml-2 my-2 ${
                      currentPage == page + 1 && "bg-green-400"
                    } `}
                    key={page}
                  >
                    {page + 1}
                  </button>
                ))}
                <button
                  onClick={handleNext}
                  className={`btn ml-2 ${
                    totalPage == currentPage && "btn-disabled"
                  }`}
                  role="button"
                  aria-disabled="true"
                >
                  next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Assignments;
