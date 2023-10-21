import  { useState } from "react";
import {PropTypes} from 'prop-types';
const AddToCartButton = ({ product }) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
  };
  console.log(cart);
  return (
    <div>
      <button className="bg-orange-600 px-3 py-1 rounded" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

AddToCartButton.propTypes = {
    product: PropTypes.object.isRequired
};
export default AddToCartButton;
