import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx/SignIn";
import NotFound from "./pages/NotFound/NotFound";
import "../src/assets/styles/globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store";
import User from "./pages/User/User";
import Controller from "./controllers/Controller";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<Controller />}>
              <Route exact path="/user" element={<User />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
