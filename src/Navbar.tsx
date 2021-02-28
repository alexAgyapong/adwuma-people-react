import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill, BsPeopleFill } from "react-icons/bs";
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Adwuma HR</Link>
            <div>
                <Link to="/"><span className="hide-on-mobile"> Employees</span><BsPeopleFill className="hide-on-desktop" /> </Link>
                <Link to="/"><span className="hide-on-mobile">Add Employee</span><BsFillPersonPlusFill className="hide-on-desktop" /></Link>
            </div>
        </nav>
    );
}

export default Navbar;