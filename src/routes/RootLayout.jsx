import { Outlet } from "react-router";
import SideBar from "./SideBar";

function RootLayout() {
  return (
    <div>
      <div className="header">
        <h1>402호 천재들</h1>
      </div>
      <div className="main">
        <SideBar />
        <div className="content">
          {/* 중요 */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
