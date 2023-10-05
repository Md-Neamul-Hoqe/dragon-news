import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location);
  
  if (loading)
    return (
      <section className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </section>
    );

  /* if user found then permit to go */
  if (user) return children;

  /* else navigate to login page */
  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
