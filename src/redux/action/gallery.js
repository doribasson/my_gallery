import axios from "axios";
import {
  GET_PICTURES_BY_INDEX,
  PICTURES_ERROR,
  RESET_GALLERY,
  INCREMENT_INDEXPAGE,
} from "./types";

export const getPicturesByIndex = (pageIndex) => async (dispatch) => {
  if (pageIndex < 34) {
    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${pageIndex}`
        );
        dispatch({
          type: GET_PICTURES_BY_INDEX,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: PICTURES_ERROR,
          payload: {
            msg: err.response.statusText,
            status: err.response.status,
          },
        });
      }
    }, 1000);
  }
};

export const resetGallary = () => (dispatch) => {
  dispatch({
    type: RESET_GALLERY,
  });
};

export const incrementIndexPage = () => (dispatch) => {
  dispatch({
    type: INCREMENT_INDEXPAGE,
  });
};
