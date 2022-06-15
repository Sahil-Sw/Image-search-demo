import { GET_IMAGE_INITIATE, GET_IMAGE_SUCCESS } from "./actionType";

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
