import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item, setIsHovering, isHovering }) => {
    const navigate = useNavigate();

    const showDetail = () => {
      navigate(`/product/${item.id}`);
    }

    const handleMouseOver = (event) => {
        // console.log("handleMouseOver : ", event.target);
        // setIsHovering(true);
        event.target.classList.add("grow")
    }

    const handleMouseOut = (event) => {
        // console.log("handleMouseOut : ", event.target);
        // setIsHovering(false);
        event.target.classList.remove("grow")
    }
  return (
    <div className="productCard" onClick={showDetail}>
      <img src={item?.img}  onMouseOver={(event) => handleMouseOver(event)} onMouseOut={(event) => handleMouseOut(event)}/>
      <div className="productInfo">
        <div>{item?.choice == true ? "Conscious choice" : "\u00A0"}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "신제품" : "\u00A0"}</div>
      </div>
    </div>
  )
}

export default ProductCard
