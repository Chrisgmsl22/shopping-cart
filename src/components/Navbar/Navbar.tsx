import { ShoppingCartOutlined } from "@ant-design/icons";
import { Nav } from "./stylesheets";
import { Link, useNavigate } from "react-router-dom";
import { ItemsProps } from "../../api/api";

export const Navbar = ({ items }: ItemsProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/total", { state: { items: items } });
  };
  return (
    <Nav>
      {/* <header className=""> */}
      <nav className="navbar">
        <Link to="/" className="logo">
          {/* <Logo /> */}
          <img
            src="https://static.thenounproject.com/png/102903-200.png"
            alt="logo"
            style={{ width: "50px" }}
          />
        </Link>
        <ul className="navMenu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/all-products">All Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <ShoppingCartOutlined onClick={handleNavigate} />
          </li>
        </ul>
      </nav>
      {/* </header> */}
    </Nav>
  );
};
