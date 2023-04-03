import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <div className="nav">
        <a href='/dashboard' className="button"> Dashboard </a>
        <div className="button"> My Outfits </div>
        <a href='/rate' className="button"> Rate Outfits </a>
        <div className="button"> Upload <br />New Outfit </div>
        <a href='/' className="button"> Logout </a>
      </div>
    );
}
export default Navbar
