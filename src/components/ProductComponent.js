import { Card, Button, Modal, Carousel, Badge } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
function ProductComponent(props) {
  const { product, onAdd } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        className="my-3 position-relative card__product__card--hover"
        onClick={handleShow}
        bg={product.featuredProduct ? "warning" : null}
      >
        <Badge
          className="position-absolute top-0 end-0 mt-2 me-2"
          pill
          bg="dark"
        >
          {" "}
          ${product.price}
        </Badge>

        <Card.Img
          variant="top"
          src={product.featuredPhoto}
          className="card__product__image"
        />

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <div className="d-grid gap-2">
            <Button
              variant="success"
              onClick={(e) => {
                e.stopPropagation();
                onAdd(product);
              }}
            >
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {product.photos.map(function (photo) {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={photo} alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <h5>price: ${product.price}</h5>
          <h6>product Description:</h6>
          <p>{product.description}</p>
          <div className="modal__rating">
            <ReactStars
              count={5}
              value={Number(product.rate)}
              size={24}
              isHalf={true}
              edit={false}
            />
            ({product.rate}){product.reviewsCount}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
            }}
          >
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProductComponent;
