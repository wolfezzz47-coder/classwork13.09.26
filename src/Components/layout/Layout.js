import {Outlet} from "react-router";
import Navbar from "./Navbar";
// <Outlet/> буде підставлятися дочірний
// компонент в маршруті, такі як homepage та інші.
const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className={"container"}>
                <Outlet/>
            </div>
        </>
    )
}
export default Layout;