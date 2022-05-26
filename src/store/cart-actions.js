/* ========= THUNK =========  */

import { UIActions } from "./ui-slice";
import { CartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-eb97e-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Something bad happened by fetching data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        CartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showNot({
          status: "error",
          title: "ERROR!",
          message: "Fetching cart data not worked!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNot({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-eb97e-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        UIActions.showNot({
          status: "error",
          title: "ERROR!",
          message: "Sending cart data not worked!",
        })
      );
    }

    dispatch(
      UIActions.showNot({
        status: "success",
        title: "SUCCESS",
        message: "Sending cart data worked!",
      })
    );
  };
};
