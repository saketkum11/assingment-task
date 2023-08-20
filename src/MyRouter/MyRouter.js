import { Route, Routes } from "react-router-dom";
import { Landing } from "../server";
const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};
export { MyRouter };
