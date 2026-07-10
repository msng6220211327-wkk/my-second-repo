const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button type="button" className="cart-submit" onClick={onAddToCart}>
      カートに入れる
    </button>
  );
};

export default AddToCartButton;
