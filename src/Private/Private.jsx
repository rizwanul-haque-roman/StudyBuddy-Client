import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import loader_gif from "../assets/loader-ezgif.gif";

const Private = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <img className="w-1/3" src={loader_gif} alt="" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default Private;

Private.propTypes = {
  children: PropTypes.node,
};
