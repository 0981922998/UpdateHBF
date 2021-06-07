import { call, put, takeEvery } from "redux-saga/effects";
import { LIST_MYREQUEST } from "../../constants/type";
import myRequestApi from "../../services/api/listRequestApi";
import * as actions from "../actions/listRequest";

function* listMyRequest(filters) {
  try {
    yield put(actions.startGetListRequest(true));
    const dataMyRequest = yield call(myRequestApi.getAll, filters);
    if (dataMyRequest) {
      yield put(actions.getListRequestSuccess(dataMyRequest));
    }
  } catch (error) {
    yield put(actions.getListRequestFail(false));
  } 
}

export default function* watchListMyRequest() {
  yield takeEvery(LIST_MYREQUEST, listMyRequest);
}
