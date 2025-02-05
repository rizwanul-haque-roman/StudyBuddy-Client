import { useContext, useState } from "react";
import form from "../../assets/form.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const CreateAssignments = () => {
  const { user } = useContext(AuthContext);
  const [difficulty, setDifficulty] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const url = form.url.value;
    const deadline = startDate.toLocaleDateString();
    const publisher = user?.email;
    const today = new Date().toLocaleDateString();

    // console.log(today);

    if (title.length < 15) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Assignment title should contain more than 15 characters.",
      });
      return;
    }
    if (marks > 50) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Maximum mark should not exceed 50.",
      });
      return;
    }
    if (description.length < 30) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Assignment description should contain more than 50 characters.",
      });
      return;
    }
    if (difficulty === "") {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please select difficulty for the assignment",
      });
      // console.log(difficulty);
      return;
    }
    if (deadline <= today) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please give at least one day time to complete the assignment.",
      });
      // console.log(difficulty);
      return;
    }

    const assignment = {
      publisher,
      title,
      marks,
      description,
      url,
      difficulty,
      deadline,
    };

    axios
      .post("https://study-buddy-server-six.vercel.app/assignments", assignment)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged === true) {
          Swal.fire({
            title: "Success!",
            text: "Assignment Created Successfully!",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        }
      });

    // console.log(assignment);
  };

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className="min-h-screen pt-28 w-11/12 lg:container mx-auto">
      <div>
        <h1 className="text-5xl font-bold">Create Assignments</h1>
        <p className="lg:w-3/4 mt-6 text-xl">
          Stuck on a problem? Why not create an Assignment about the problem you
          are facing. People can take this assingment and provide solution to
          your problem.
        </p>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <div className="hidden lg:block">
          <img className="w-10/12" src={form} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="w-full mb-12">
          <div className="flex gap-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Assignment Title
                </span>
              </div>
              <input
                type="text"
                placeholder="Title of assignment"
                name="title"
                className="outline-none bg-transparent w-full py-4 pl-1 border-b-2 border-[#264790]"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Assignment Marks
                </span>
              </div>
              <input
                type="number"
                placeholder="Assignment marks. i.e 50"
                name="marks"
                className="outline-none bg-transparent w-full py-4 pl-1 border-b-2 border-[#264790]"
                required
              />
            </label>
          </div>
          <label className="form-control w-full mt-6">
            <div className="label">
              <span className="label-text text-lg font-semibold">
                Assignment Description
              </span>
            </div>
            <textarea
              placeholder="Describe the assignment"
              name="description"
              className="outline-none bg-transparent w-full py-4 pl-1 border-b-2 border-[#264790]"
              required
            />
          </label>
          <label className="form-control w-full mt-6">
            <div className="label">
              <span className="label-text text-lg font-semibold">
                Assignment Thumbnail URL
              </span>
            </div>
            <input
              type="url"
              placeholder="Enter thumbnail url"
              name="url"
              className="outline-none bg-transparent w-full py-4 pl-1 border-b-2 border-[#264790]"
              required
            />
          </label>
          <div className="flex gap-6 items-center mt-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Assignment Difficulty
                </span>
              </div>
              <select
                onChange={handleChange}
                className="outline-none bg-transparent w-full py-[18px] border-b-2 border-[#264790]"
                required
              >
                <option disabled selected>
                  Set Diffuculty
                </option>
                <option value={"easy"}>Easy</option>
                <option value={"medium"}>Medium</option>
                <option value={"hard"}>Hard</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Assignment Deadline
                </span>
              </div>
              <DatePicker
                className="outline-none bg-transparent w-full py-4 pl-1 border-b-2 border-[#264790]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                required
              />
            </label>
          </div>
          <button className="mt-10 btn w-full bg-[#E58014] hover:bg-[#E58014] text-xl text-white font-semibold border-none  ">
            Create Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignments;
