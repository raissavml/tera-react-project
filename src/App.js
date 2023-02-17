import { BrouserRouter, Routes, Route} from "react-router-dom";

import Home from ".components/pages/Home.jsx";
import Home from ".components/pages/UserBlog.jsx";
import Home from ".components/pages/Users.jsx";

import "./styles/normalize.css";
import "./styles/fontwesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrouserRouter>
    <Routes>
      < Route path="/" element={<Home />} />
      < Route path="/users" element={<Users />} />
      < Route path="/:userId" element={<UserBlog />} />
      < Route path="/:userId/posts/new" element={<UserPostForm />} />
      < Route path="*" element={<div>Not found</div>} />
    </Routes>
    </BrouserRouter>
  )
}

export default App;
