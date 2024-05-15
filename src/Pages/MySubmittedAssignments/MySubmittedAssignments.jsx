import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const MySubmittedAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pendingAssignments, setPendingAssignments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://study-buddy-server-six.vercel.app/mySubmission?email=${user?.email}`,
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
    <div className="min-h-screen pt-28 container mx-auto">
      <div>
        <h1 className="text-5xl font-bold">Your Submitted Assignments</h1>
        <p className="w-3/4 mt-6 text-xl">
          Here is all the assignments that you have submitted and waiting to be
          marked and reviewed by others.
        </p>
        <div className="overflow-x-auto my-12">
          {pendingAssignments.length === 0 && (
            <div className="flex justify-center my-6">
              <h3 className="text-3xl font-semibold">
                You have not submitted any assignment.
              </h3>
            </div>
          )}
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Assignment Title</th>
                <th>Status</th>
                <th>Assignment Marks</th>
                <th>Obtained Marks</th>
                <th>Feedback</th>
              </tr>
            </thead>
            {pendingAssignments.map((pending, idx) => (
              <>
                <tbody>
                  <tr>
                    <th>{idx + 1}</th>
                    <td>{pending.assignmenTitle}</td>
                    <td>
                      <p
                        className={`${
                          pending.status === "pending"
                            ? "badge badge-info"
                            : "badge badge-success"
                        }`}
                      >
                        {pending.status}
                      </p>
                    </td>
                    <td>{pending.assignmenMarks}</td>
                    <td>
                      {pending.obtainedMarks === ""
                        ? "Not marked yet"
                        : pending.obtainedMarks}
                    </td>
                    <td>
                      {pending.feedback === ""
                        ? "Not Marked Yet"
                        : pending.feedback}
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySubmittedAssignments;
