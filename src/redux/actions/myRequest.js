import * as types from "../../constants/type";

export const myRequestList = (filters) => ({
  type: types.LIST_MYREQUEST,
  payload: filters,
});
export const getListMyRequestSuccess = (data) => ({
  type: types.GET_LIST_MYREQUEST_SUCCESS,
  payload: data,
});
export const getListMyRequestFail = (error) => ({
  type: types.GET_LIST_MYREQUEST_FAIL,
  payload: error,
});