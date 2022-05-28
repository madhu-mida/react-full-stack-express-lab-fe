import { Link } from "react-router-dom";

function Header(props) {
    //inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        padding: "18px",
        width: "90%",
        margin: "auto",
        marginTop: "30px",
    };

    return (
        <header>
            <h1>Portfolio</h1>
            <nav style={navStyle}>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
            </nav>
        </header>
    );
}

export default Header;