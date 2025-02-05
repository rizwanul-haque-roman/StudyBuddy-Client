import { HiDocumentSearch } from "react-icons/hi";
import { MdEditDocument } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const CardAssignment = ({ assignment, data, setData }) => {
  const { _id, url, title, marks, difficulty, publisher } = assignment;
  const { user } = useContext(AuthContext);

  const handleDelete = () => {
    // console.log("Publisher:", publisher, "user:", user.email, "id", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (publisher === user?.email) {
          axios
            .delete(
              `https://study-buddy-server-six.vercel.app/assignments?id=${_id}`
            )
            .then((res) => {
              // console.log(res.data);
              if (res.data.acknowledged === true) {
                const newData = data.filter((item) => item._id !== _id);
                setData(newData);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            })
            .catch((error) => {
              // console.log(error.massage);
              Swal.fire({
                title: "Error!",
                text: error.massage,
                icon: "error",
              });
            });
        } else {
          Swal.fire({
            title: "Error!",
            text: "You can't delete this assignment. You are not the publisher of this assignment",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <div className="bg-base-300 rounded-2xl transform hover:scale-[1.05] hover:transition hover:duration-300  hover:drop-shadow-xl transition duration-300 ease-out border-2 border-base-300">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-6">
        <div className="lg:w-1/3 roounded-2xl">
          <img className="rounded-2xl" src={url} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full">
          <div className="space-y-5 lg:w-3/5">
            <h3 className="text-2xl font-semibold">Title: {title}</h3>
            <p className="text-xl font-medium">Marks: {marks}</p>
            <p className="text-xl font-medium">
              Assignment Difficulty: {difficulty}
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-2">
            <Link to={`https://studybuddy-org.web.app/view/${_id}`}>
              <p className="btn bg-amber-500 hover:bg-amber-600 lg:w-full">
                <HiDocumentSearch className="lg:text-xl" /> View
              </p>
            </Link>
            <Link to={`https://studybuddy-org.web.app/update/${_id}`}>
              <p className="btn bg-green-500 hover:bg-green-600 lg:w-full">
                <MdEditDocument className="lg:text-xl" /> Update
              </p>
            </Link>
            <p
              onClick={handleDelete}
              className="btn bg-red-400 hover:bg-red-500 lg:w-full"
            >
              <AiTwotoneDelete className="lg:text-xl" /> Delete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAssignment;

CardAssignment.propTypes = {
  assignment: PropTypes.object,
  data: PropTypes.array,
  setData: PropTypes.func,
};
