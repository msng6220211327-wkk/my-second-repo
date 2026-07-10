const CartControls = ({ onDecrease, onIncrease }) => {
  return (
    <div className="cart-actions">
      <button type="button" onClick={onDecrease}>
        個数を減らす
      </button>
      <button type="button" onClick={onIncrease}>
        個数を増やす
      </button>
    </div>
  );
};

export default CartControls;
