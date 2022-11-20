import {
  GET_PICTURES_BY_INDEX,
  PICTURES_ERROR,
  RESET_GALLERY,
  INCREMENT_INDEXPAGE,
} from "../action/types";

const initialState = {
  gallery: [],
  indexPage: null,
  loading: true,
  allLoaded: false,
  error: {},
};

export const galleryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PICTURES_BY_INDEX:
      return {
        ...state,
        gallery: state.indexPage > 1 ? [...state.gallery, ...payload] : payload,
        indexPage: state.indexPage + 1,
        loading: false,
      };
    case INCREMENT_INDEXPAGE:
      return {
        ...state,
        indexPage: state.indexPage + 1,
      };
    case RESET_GALLERY:
      return {
        ...state,
        gallery: [],
        indexPage: 1,
        allLoaded: false,
      };
    case PICTURES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
