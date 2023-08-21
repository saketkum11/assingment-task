import { Route, Routes } from "react-router-dom";
import { Dashboard, Landing } from "../server";
const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
export { MyRouter };
