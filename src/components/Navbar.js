import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar({name = "my web" , option}) // yaha per hum props name ko pass kiya hai defaultpros ki tarah
{

    return(
      <div className="navbar" >
      <h3>{name}</h3>
      <Link to="/Home">{option}</Link>
      <Link to="/TextForm">TextForm</Link>
      <li>Home</li>
      <li>Home</li>
    </div>
    );
}

Navbar.PropsTypes = {   // ishme comfusion hai bad me padenge
    name: PropTypes.string.isRequired
}

export default Navbar;