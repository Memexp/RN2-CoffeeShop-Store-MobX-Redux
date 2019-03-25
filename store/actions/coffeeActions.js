import * as actionTypes from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      dispatch(setCoffeeShopsLoading()); // loading until the fetch finished - do not forget it
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const coffeeShops = res.data;

      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: actionTypes.COFFEESHOPS_LOADING
  };
};
