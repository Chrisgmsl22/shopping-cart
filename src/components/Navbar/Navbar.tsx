import { Nav } from "./stylesheets";

export const Navbar = () => {
  return (
    <Nav>
      {/* <header className=""> */}
      <nav className="navbar">
        <a href="#" className="logo">
          Home
        </a>
        <ul className="navMenu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#">All Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {/* </header> */}
    </Nav>
  );
};
