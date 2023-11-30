import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  let {id} = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/mollang821/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="prodictImg">
          <img src={product?.img} />
        </Col>
        <Col className="productInfo">
          <div className="productTitle">{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice == true ? "Conscious choice" : "\u00A0"}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-true">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product?.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Button variant="dark" type="submit">
                장바구니
            </Button>
            <Button variant="dark" type="submit">
                바로구매
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
