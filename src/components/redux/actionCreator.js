import {
  GET_IMAGE_INITIATE,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_ERROR,
} from "./actionType";

export const getImageInitiate = () => {
  return {
    type: GET_IMAGE_INITIATE,
  };
};

export const imageRecievedSuccess = (data) => {
  return {
    type: GET_IMAGE_SUCCESS,
    payload: data,
  };
};

export const failedToRecieveImage = () => {
  return {
    type: GET_IMAGE_ERROR,
  };
};
