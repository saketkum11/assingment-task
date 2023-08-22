import { Toaster } from "react-hot-toast";
import "./App.css";
import { MyRouter } from "./server";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <MyRouter />
    </div>
  );
}

export default App;
