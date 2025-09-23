import { Navigate, Outlet, useLocation } from "react-router-dom";

const PUBLIC_PATHS = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/verify-email-sent",
  "/verification-success",
  "/password-reset-email-sent",
  "/password-changed",
  "/",
  "/how-it-works",
  "/pricing",
  "/contact"
];

const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // If user is logged in and trying to access auth or public-only pages, redirect to dashboard
  if (
    token &&
    PUBLIC_PATHS.includes(location.pathname)
  ) {
    return <Navigate to="/portfolio" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
