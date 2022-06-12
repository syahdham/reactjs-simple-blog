import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import AboutTeam from "./pages/AboutTeam";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/blog">Blog</Link> &nbsp;
            <Link to="/about">About</Link> &nbsp;
            <Link to="/login">Login</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="blog" element={<Blog />}  />
            <Route path="blog/:id" element={<BlogDetail />}  />
            <Route path="login" element={<Login />}  />
            <Route path="about" element={<About />}>
                <Route path="team" element={<AboutTeam />} />
            </Route>
            <Route path="*" element={<Page404 />}  />
        </Routes>
    </div>
  );
}

export default App;
