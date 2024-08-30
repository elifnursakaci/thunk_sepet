import api from "../../utils/api";
import Actions from "../actionTypes";

const thunkFonksiyonu = () => {
  return (dispatch) => {};
};

export const getRestaurants = () => (dispatch) => {
  dispatch({ type: Actions.REST_LOADING });

  api
    .get("/restaurants")
    .then((res) => dispatch({ type: Actions.REST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: Actions.REST_ERROR, payload: err.message })
    );
};
