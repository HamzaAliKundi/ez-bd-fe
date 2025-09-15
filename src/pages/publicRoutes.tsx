import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  
  // If user is logged in and trying to access auth pages, redirect to home
  if (token && ["/login", "/signup", "/forgot-password", "/reset-password", "/verify-email", "/verify-email-sent", "/verification-success", "/password-reset-email-sent", "/password-changed"].includes(location.pathname)) {
    return <Navigate to="/home" replace />;
  }
  
  return <Outlet />;
};

export default PublicRoutes;
