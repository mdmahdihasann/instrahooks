import { Route, Routes } from "react-router-dom";
import "./index.css";
import PrivateRouters from "./routes/PrivateRouters";
import PostList from "./components/posts/PostList";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRouters/>}>
        <Route path="/" element={<PostList/>} />
      </Route>
    </Routes>
  );
}

export default App;
