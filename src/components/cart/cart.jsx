import Button from "../button/button";
import { totalPrice } from "../units/total-price";
import "./cart.css";

const Cart = (props) => {
  const { cartItems, onCheckout } = props;
  return (
    <div className="cart__container">
      <p>
        Umumiy narx:{" "}
        {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      <Button
        title={cartItems.length === 0 ? "Buyurtma berish" : "To'lov"}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
};

export default Cart;
