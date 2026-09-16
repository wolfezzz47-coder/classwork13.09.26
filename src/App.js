import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import LoginPage from "./pages/login/LoginPage";
import {Route, Routes} from "react-router";
import Layout from "./Components/layout/Layout";
import NoMatchPage from "./pages/NoMatch/NoMatchPage";
import HomePage from "./pages/Home/HomePage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"login"} element={<LoginPage/>}/>
                <Route path={"register"} element={<RegisterPage/>}/>
                <Route path={"*"} element={<NoMatchPage/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
