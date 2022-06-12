import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
        <>
            <h1>About</h1>
            <p>Pergi kehalaman about team:
                <Link to="/about/team"> Click here</Link></p>
            <Outlet />
        </>
    );
}