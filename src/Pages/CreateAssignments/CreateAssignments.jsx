import { useContext, useState } from "react";
import form from "../../assets/form.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Auth/AuthProvider";

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

    const assignment = {
      publisher,
      title,
      marks,
      description,
      url,
      difficulty,
      deadline,
    };

    console.log(assignment);
  };

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className="h-screen pt-28 container mx-auto">
      <div>
        <h1 className="text-5xl font-bold">Create Assignments</h1>
        <p className="w-3/4 mt-6 text-xl">
          Stuck on a problem? Why not create an Assignment about the problem you
          are facing. People can take this assingment and provide solution to
          your problem.
        </p>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <div>
          <img className="w-10/12" src={form} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="w-full">
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
                className="outline-none w-full py-4 border-b-2 border-[#264790]"
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
                placeholder="Assignment marks. i.e 100"
                name="marks"
                className="outline-none w-full py-4 border-b-2 border-[#264790]"
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
              placeholder="Explain the assignment shortly"
              name="description"
              className="outline-none w-full py-4 border-b-2 border-[#264790]"
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
              className="outline-none w-full py-4 border-b-2 border-[#264790]"
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
                className="outline-none w-full py-[18px] border-b-2 border-[#264790]"
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
              {/* <input
                type="date"
                placeholder="Assignment marks. i.e 100"
                name="date"
                className="outline-none w-full py-4 border-b-2 border-[#264790]"
              /> */}
              <DatePicker
                className="outline-none w-full py-4 border-b-2 border-[#264790]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
          </div>
          <button className="mt-10 btn w-full bg-[#E58014] hover:bg-[#E58014] text-xl text-white font-semibold border-none  drop-shadow-[0_8px_8px_rgba(247,186,51)]">
            Create Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignments;
