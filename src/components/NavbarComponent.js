import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Button,
  Badge,
} from "react-bootstrap";
function NavbarComponent(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="cart-dropdown">
                Cart{" "}
                {props.cartCount < 1 ? null : (
                  <Badge pill bg="danger">
                    {props.cartCount}
                  </Badge>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="cart__menu">
                {props.cartItems.products.length > 0 ? (
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                ) : (
                  <p className="text-center">Cart is Empty</p>
                )}

                <Dropdown.Divider />
                <div className="d-grid gap-2 mx-2">
                  <Button href="#" variant="warning">
                    CheckOut
                  </Button>
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
