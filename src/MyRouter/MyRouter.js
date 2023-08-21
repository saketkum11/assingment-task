import { Route, Routes } from "react-router-dom";
import { Dashboard, Landing } from "../server";
import { RequireAuth } from "./RequireAuth";
const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};
export { MyRouter };
