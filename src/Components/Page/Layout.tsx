import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.tsx";

export default function Layout() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
