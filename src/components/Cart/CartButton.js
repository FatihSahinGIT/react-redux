import classes from "./CartButton.module.css";

/* === REDUX IMPORT === */
import { UIActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();


  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(UIActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
