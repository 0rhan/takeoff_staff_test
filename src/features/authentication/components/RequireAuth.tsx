import { useContext} from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "providers/AuthContext";

const RequireAuth = ({ children }: { children: JSX.Element}) => {
  const location = useLocation();
  const { authentication } = useContext(AuthContext);

  if (!authentication) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
