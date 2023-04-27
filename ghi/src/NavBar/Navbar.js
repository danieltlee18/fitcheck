import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../services/auth";

const Navbar = () => {
    const [logout] = useLogoutMutation();
    return (
        <div className="nav">
            <Link to="/dashboard" className="button">
                {" "}
                Dashboard{" "}
            </Link>

            <Link to="/outfits" className="button">
                {" "}
                My Outfits{" "}
            </Link>

            <Link to="/rate" className="button">
                {" "}
                Rate Outfits{" "}
            </Link>

            <Link to="/createoutfit" className="button">
                {" "}
                Upload Outfit{" "}
            </Link>

            <Link to="/" onClick={logout} className="button">
                {" "}
                Logout{" "}
            </Link>
        </div>
    );
};
export default Navbar;
