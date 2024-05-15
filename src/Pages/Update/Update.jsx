import { useLoaderData, useNavigate } from "react-router-dom";
import form from "../../assets/updateForm.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
  const assignment = useLoaderData();
  const [newDifficulty, setNewDifficulty] = useState("");
  let { _id, title, marks, description, url, difficulty, deadline } =
    assignment;
  const navigate = useNavigate();

  const convertDate = (dateStr) => {
    const parts = dateStr.split("/");
    return `${parts[1]}/${parts[0]}/${parts[2]}`;
  };
  const date = convertDate(deadline);

  const [startDate, setStartDate] = useState(new Date(Date.parse(date)));

  // console.log(difficulty, date);

  const handleChange = (event) => {
    setNewDifficulty(event.target.value);
  };

  if (newDifficulty === "") {
    setNewDifficulty(difficulty);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const url = form.url.value;

    // console.log(today);

    // console.log(difficulty);

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

    const assignment = {
      title,
      marks,
      description,
      url,
      difficulty: newDifficulty,
      deadline: startDate.toLocaleDateString(),
    };

    axios
      .put(
        `https://study-buddy-server-six.vercel.app/assignment?id=${_id}`,
        assignment
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Assignment updated successfully!",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/assignments");
            }
          });
        }

        if (res.data.modifiedCount === 0) {
          Swal.fire({
            title: "Warning!",
            text: "You have not updated anything. Click ok to go back to assignments page or click outside this window to continue updating",
            icon: "warning",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/assignments");
            }
          });
        }
      });

    // console.log(assignment);
  };

  return (
    <div className="min-h-screen pt-28 w-11/12 lg:container mx-auto">
      <div>
        <h1 className="text-5xl font-bold">Update Assignment</h1>
        <p className="lg:w-3/4 mt-6 text-xl">
          Need to tweak something about the assignment. Update the information
          of the assignment in the form below and submit it.
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
                defaultValue={title}
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
                defaultValue={marks}
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
              defaultValue={description}
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
              defaultValue={url}
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
                defaultValue={difficulty}
                onChange={handleChange}
                className="outline-none bg-transparent w-full py-[18px] border-b-2 border-[#264790]"
                required
              >
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
                onChange={(date) => setStartDate(date)}
                placeholderText={deadline}
                selected={startDate}
                required
              />
            </label>
          </div>
          <button className="mt-10 btn w-full bg-[#E58014] hover:bg-[#E58014] text-xl text-white font-semibold border-none  ">
            Update Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
