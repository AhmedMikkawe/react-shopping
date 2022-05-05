import { Card, Button, Modal, Carousel, Badge } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
function ProductComponent(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        className="my-3 position-relative card__product__card--hover"
        onClick={handleShow}
        bg={props.product.featuredProduct ? "warning" : null}
      >
        <Badge
          className="position-absolute top-0 end-0 mt-2 me-2"
          pill
          bg="dark"
        >
          {" "}
          ${props.product.price}
        </Badge>

        <Card.Img
          variant="top"
          src={props.product.featuredPhoto}
          className="card__product__image"
        />

        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>

          <Button variant="success">Add To Cart</Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {props.product.photos.map(function (photo) {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={photo} alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <h5>price: ${props.product.price}</h5>
          <h6>product Description:</h6>
          <p>{props.product.description}</p>
          <div className="modal__rating">
            <ReactStars
              count={5}
              value={Number(props.product.rate)}
              size={24}
              isHalf={true}
              edit={false}
            />
            ({props.product.rate}){props.product.reviewsCount}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProductComponent;
