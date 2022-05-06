import { Navbar, Container, Nav, Dropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavbarComponent(props) {
  const { cartItems, cartCount } = props;
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          React Cart
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="cart-dropdown">
                Cart{" "}
                {cartCount < 1 ? null : (
                  <Badge pill bg="danger">
                    {cartCount}
                  </Badge>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="cart__menu">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => {
                    return (
                      <div className="cart__menu__item my-2 px-2">
                        <img
                          className="cart__menu__item__image"
                          src={item.featuredPhoto}
                          alt=""
                        />
                        <p className="text-truncate">{item.name}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center">Cart is Empty</p>
                )}

                <Dropdown.Divider />
                <div className="d-grid gap-2 mx-2">
                  <Link to="/cart" className="btn btn-warning">
                    CheckOut
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
