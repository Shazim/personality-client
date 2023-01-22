// ====================== IMPORTED LIBRARIES ====================
import { useNavigate } from "react-router-dom";
// ====================== IMPORTED UTILS ========================
import { getCookie } from "cookies/Cookies";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const token = getCookie("token");
  const history = useNavigate();
  useEffect(() => {
    if (!token) {
      // not logged in so redirect to login page with the return url
      history("/");
    }
    if (token) {
      history("/test");
    }
  }, []);

  // authorized so return child components
  return children;
}

export default PrivateRoute;
