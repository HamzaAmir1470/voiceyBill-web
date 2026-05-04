import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-full h-auto">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
