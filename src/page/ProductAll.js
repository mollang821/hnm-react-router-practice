import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [isHovering, setIsHovering] = useState(false);

    const [productList, setProductList] = useState([]);

    const [query, getQuery] = useSearchParams();

    const getProducts = async() => {
        let searchQuery = query.get('q') || "";
        console.log("searchQuery : ", searchQuery);
        // let url = `http://localhost:5000/products?q=${searchQuery}`;
        let url = `https://my-json-server.typicode.com/mollang821/hnm-react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url)
        let data = await response.json();
        console.log("data : ", data);
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getProducts();
    }, [query])

  return (
    <div>
        <Container>
            <Row>
                {productList.map(menu => (
                    <Col lg={3}>
                        <ProductCard item={menu} setIsHovering={setIsHovering} isHovering={isHovering} />
                    </Col>
                ))}
            </Row>
        </Container>
      
    </div>
  )
}

export default ProductAll
