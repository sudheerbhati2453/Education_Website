import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { Instructor } from "./pages/Instructor";
import { Login } from "./pages/Login/login";
import Register from './pages/Login/register.jsx';
import Gallery from './pages/Gallery/gallery.jsx';
import Contact from "./components/common/Contact/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/about'
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path='/courses'
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path='/instructor'
          element={
            <Layout>
              <Instructor />
            </Layout>
          }
        />
        <Route
          path='/blog'
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path='/single-blog'
          element={
            <Layout>
              <BlogSinglePage />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path='/register'
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path='/gallery'
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path='/contact'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
