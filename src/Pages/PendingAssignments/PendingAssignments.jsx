import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ModalMark from "./ModalMark";
import { AuthContext } from "../../Auth/AuthProvider";

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pending, setPending] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://study-buddy-server-six.vercel.app/pending?email=${user.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setPendingAssignments(res.data);
      });
  }, [user.email]);

  return (
    <div className="min-h-screen pt-28 w-11/12 lg:container mx-auto">
      <div>
        <h1 className="text-5xl font-bold">Pending Assignments</h1>
        <p className="lg:w-3/4 mt-6 text-xl">
          Here is all the pending assignments People have submitted and waiting
          to be marked and reviewed by you. You can view and mark these
          assignments except the ones you have submitted.
        </p>
        <div className="overflow-x-auto my-12">
          {pendingAssignments.length === 0 && (
            <div className="flex justify-center my-6">
              <h3 className="text-3xl font-semibold">
                No Pending Assignments available
              </h3>
            </div>
          )}
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Submitter note</th>
                <th>Assignment Title</th>
                <th>Assignment Marks</th>
                <th>Status</th>
                <th>Give marks</th>
              </tr>
            </thead>
            {pendingAssignments.map((pending, idx) => (
              <>
                <tbody>
                  <tr>
                    <th>{idx + 1}</th>
                    <td>{pending.submitter}</td>
                    <td>{pending.submitterEmail}</td>
                    <td>{pending.note}</td>
                    <td>{pending.assignmenTitle}</td>
                    <td>{pending.assignmenMarks}</td>
                    <td>
                      <p className="badge badge-info">{pending.status}</p>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setPending(pending);
                        }}
                        className="btn btn-sm bg-amber-500"
                      >
                        Give mark
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
            <ModalMark
              isOpen={showModal}
              isClose={setShowModal}
              pending={pending}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignments;
