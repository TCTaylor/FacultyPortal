import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const { roles } = useAuth();

  //console.log(roles);
  //console.log(allowedRoles);

  var allowed = roles.some((role) => allowedRoles.includes(role));
  //console.log("Allowed: " + allowed);

  const content = allowed ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );

  return content;
};

export default RequireAuth;
