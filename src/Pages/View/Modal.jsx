import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = ({ isOpen, isClose, id, title, marks }) => {
  const { user } = useContext(AuthContext);
  if (!isOpen) {
    return null;
  }

  const handleClose = (event) => {
    if (event.target.id === "outer-div") {
      isClose(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const note = form.note.value;
    const link = form.link.value;

    const assignmentSubmission = {
      assignmentId: id,
      assignmenTitle: title,
      assignmenMarks: marks,
      link,
      note,
      submitter: user?.displayName,
      submitterEmail: user?.email,
      obtainedMarks: "",
      feedback: "",
      status: "pending",
    };
    // console.log(assignmentSubmission);

    axios
      .post(
        "https://study-buddy-server-six.vercel.app/submission",
        assignmentSubmission
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged === true) {
          Swal.fire({
            title: "Good job!",
            text: "Your assignment has been submitted successfully",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              isClose(false);
            }
          });
        }
      });
  };

  return (
    <div
      onClick={handleClose}
      id="outer-div"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="w-11/12 lg:w-1/2">
        <div className="flex justify-end">
          <button onClick={() => isClose(false)} className="text-white text-xl">
            x
          </button>
        </div>
        <div className=" bg-[#818181c8] py-8 px-12 rounded-2xl">
          <h1 className="text-2xl font-bold text-center">
            Submit your copy of assignment
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="form-control w-full mt-6">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Assignment PDF/DOC link
                </span>
              </div>
              <input
                type="url"
                placeholder="Enter pdf/doc link"
                name="link"
                className="input input-bordered w-full py-4 pl-3"
                required
              />
            </label>
            <label className="form-control w-full mt-6">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Short note
                </span>
              </div>
              <textarea
                placeholder="Give a short note"
                name="note"
                className="textarea textarea-bordered pl-3"
                required
              />
            </label>
            <div className="flex justify-center items-center w-full">
              <button className="mt-10 btn bg-[#E58014] hover:bg-[#E58014] text-xl text-white font-semibold border-none  ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  isClose: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  marks: PropTypes.string,
};
