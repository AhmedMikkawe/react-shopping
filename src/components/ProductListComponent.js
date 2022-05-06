import { Container, Row, Col } from "react-bootstrap";
import ProductComponent from "./ProductComponent";
function ProductListComponent(props) {
  const { products, onAdd } = props;

  return (
    <Container className="mt-5">
      <Row>
        {products.map(function (product, index) {
          return (
            // used index for key is not recommended instead using an id from database but used index for removing the error message only
            <Col xs={12} md={6} lg={4} key={index}>
              <ProductComponent product={product} onAdd={onAdd} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default ProductListComponent;
