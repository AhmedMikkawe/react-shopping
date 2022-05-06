import { Container, Row, Col } from "react-bootstrap";
function Cart(props) {
  const { cartItems } = props;
  return (
    <Container className="mt-5">
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <Row className="my-3">
              <Col xs={12} lg={3}>
                <img
                  className="img-thumbnail cartItem__image"
                  src={item.featuredPhoto}
                  alt=""
                />
              </Col>
              <Col xs={12} lg={9}>
                <h4>{item.name}</h4>
                <p className="fw-bold">${item.price}</p>
                <p>{item.description}</p>
              </Col>
            </Row>
          );
        })
      ) : (
        <h1 className="text-center">Cart is Empty</h1>
      )}
    </Container>
  );
}
export default Cart;
