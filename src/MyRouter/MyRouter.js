import { Route, Routes } from "react-router-dom";
import { Landing } from "../server";
const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  );
};
export { MyRouter };
