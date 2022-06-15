import {
  GET_IMAGE_INITIATE,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_ERROR,
} from "./actionType";

const initialState = {
  loading: false,
  imageData: [],
  error: false,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_INITIATE:
      return {
        loading: true,
        imageData: [],
        error: false,
      };

    case GET_IMAGE_SUCCESS:
      return {
        loading: false,
        imageData: action.payload,
        error: false,
      };

    case GET_IMAGE_ERROR:
      return {
        loading: false,
        imageData: [],
        error: true,
      };

    default:
      return {
        loading: false,
        imageData: [],
        error: false,
      };
  }
};

export default imageReducer;
