import { Container, Row, Col } from "react-bootstrap";
import ProductComponent from "./ProductComponent";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";

function ProductListComponent(props) {
  const { products, onAdd } = props;
  const [productsPerPage] = useState(3);
  const [productsShowen, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setProducts(products);
  }, []);
  // Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = productsShowen.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Container className="mt-5">
      <Row>
        {currentProducts.map(function (product, index) {
          return (
            // used index for key is not recommended instead using an id from database but used index for removing the error message only
            <Col xs={12} md={6} lg={4} key={index}>
              <ProductComponent product={product} onAdd={onAdd} />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </Row>
    </Container>
  );
}
export default ProductListComponent;
