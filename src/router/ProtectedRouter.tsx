import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const ProtectedRouter = ({ children }: Props) => {
  //TODO: check if user is logged in
  const user = false;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
