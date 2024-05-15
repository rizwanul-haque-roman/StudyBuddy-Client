import PropTypes from "prop-types";
// import { useContext } from "react";
// import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ModalMark = ({ isOpen, isClose, pending }) => {
  // const { user } = useContext(AuthContext);
  if (!isOpen) {
    return null;
  }

  const handleClose = (event) => {
    if (event.target.id === "outer-div") {
      isClose(false);
    }
  };

  console.log(pending);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const obtainedMarks = form.obtainedMarks.value;
    const feedback = form.feedback.value;

    const marksAndFeedback = {
      obtainedMarks: obtainedMarks,
      feedback: feedback,
      id: pending._id,
      status: "completed",
    };
    console.log(marksAndFeedback);

    axios
      .patch(
        "https://study-buddy-server-six.vercel.app/submission",
        marksAndFeedback
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Mark given",
            text: "Mark given to the submitted assignment successfully",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
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
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <div className="flex justify-end">
          <button onClick={() => isClose(false)} className="text-white text-xl">
            x
          </button>
        </div>
        <div className="bg-[#818181c8] py-4 lg:py-8  px-4 lg:px-12 rounded-2xl">
          <h1 className="text-2xl font-bold text-center">
            Assignment Response
          </h1>
          <div className="my-6">
            <p>
              <span className="text-lg font-medium">Assignment Link:</span>{" "}
              Click{" "}
              <a href={pending.link} className="underline hover:text-blue-600">
                here
              </a>{" "}
              to see assignment doc/pdf.
            </p>
            <p className="">
              <span className="text-lg font-medium">Submitter short note:</span>{" "}
              {pending.note}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <iframe
              className="lg:w-2/3 h-[40vh] lg:h-[70vh] border-2 border-amber-500 rounded-2xl"
              src={pending.link}
              title="Assignment Preview"
            ></iframe>
            <form onSubmit={handleSubmit} className="lg:w-1/3">
              <label className="form-control w-full lg:mt-6">
                <div className="label">
                  <span className="label-text text-lg font-semibold">
                    Give mark out of {pending.assignmenMarks}
                  </span>
                </div>
                <input
                  type="number"
                  max={pending.assignmenMarks}
                  name="obtainedMarks"
                  className="input input-sm input-bordered w-full py-4 pl-3"
                  required
                />
              </label>
              <label className="form-control w-full lg:mt-6">
                <div className="label">
                  <span className="label-text text-lg font-semibold">
                    Provide a feedback
                  </span>
                </div>
                <textarea
                  placeholder="Type here..."
                  name="feedback"
                  className="textarea textarea-sm textarea-bordered pl-3"
                  required
                />
              </label>
              <div className="flex justify-center items-center w-full">
                <button className="mt-4 lg:mt-10 btn btn-sm bg-[#E58014] hover:bg-[#E58014] lg:text-xl text-white font-semibold border-none  ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMark;

ModalMark.propTypes = {
  isOpen: PropTypes.bool,
  isClose: PropTypes.func,
  pending: PropTypes.object,
};
