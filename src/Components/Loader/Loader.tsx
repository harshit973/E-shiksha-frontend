import { Route, Routes } from "react-router-dom";
import Layout from "../Page/Layout.tsx";
import Home from "../Page/Home.tsx";
import Courses from "../Page/Courses.tsx";
import { Course } from "../../URL.ts";
export default function Loader() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Course.index} element={<Courses />} />
      </Route>
    </Routes>
  );
}
