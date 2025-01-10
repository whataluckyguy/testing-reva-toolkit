import { Link } from "react-router-dom";
import "reva-toolkit/dist/index.css";

function App() {
  return (
    <div className="flex space-x-2">
      <Link to="/table" className=" border border-black p-2 rounded-lg">
        Go to Table view.
      </Link>
      <Link to="/dashboard" className=" border border-black p-2 rounded-lg">
        Go to Dashboard view.
      </Link>
    </div>
  );
}

export default App;
