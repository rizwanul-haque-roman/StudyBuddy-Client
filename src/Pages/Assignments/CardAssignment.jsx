import { HiDocumentSearch } from "react-icons/hi";
import { MdEditDocument } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import PropTypes from "prop-types";

const CardAssignment = ({ assignment }) => {
  const { url, title, marks, difficulty } = assignment;
  return (
    <div className="bg-white rounded-2xl hover:transform hover:scale-110 hover:transition hover:duration-300  hover:drop-shadow-xl transition duration-300 ease-out ">
      <div className="flex justify-between items-center border-2 rounded-2xl gap-6 p-6">
        <div className="w-1/3 roounded-2xl">
          <img className="rounded-2xl" src={url} alt="" />
        </div>
        <div className="flex justify-between items-center gap-6 w-full">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">Title: {title}</h3>
            <p className="text-xl font-medium">Marks: {marks}</p>
            <p className="text-xl font-medium">
              Assignment Difficulty: {difficulty}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="btn bg-amber-500">
              <HiDocumentSearch className="text-xl" /> View
            </p>
            <p className="btn bg-green-500">
              <MdEditDocument className="text-xl" /> Update
            </p>
            <p className="btn bg-red-400">
              <AiTwotoneDelete className="text-xl" /> Delete
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
};
