import * as types from "./actionTypes";
import db from "../firebase";
const addData = () => ({
  type: types.ADD_DATA,
});

const getDatas = (datas) => ({
  type: types.GET_DATAS,
  payload: datas,
});

const editData = (datas) => ({
  type: types.EDIT_DATA,
  payload: datas,
});

const deleteData = () => ({
  type: types.DELETE_DATA,
});

const getData = (data) => ({
  type: types.GET_DATA,
  payload: data,
});

export const getDatasInitiate = () => {
  return function (dispatch) {
    db.collection("datas").onSnapshot((querySnapshot) => {
      const datas = [];
      querySnapshot.forEach((doc) => {
        datas.push({ ...doc.data(), id: doc.id });
      });
      dispatch(getDatas(datas));
    });
  };
};

export const addDataInitiate = (data) => {
  return function (dispatch) {
    db.collection("datas").doc().set(data);
    dispatch(addData());
  };
};

export const deleteDataInitiate = (id) => {
  return function (dispatch) {
    db.collection("datas").doc(id).delete();
    dispatch(deleteData());
  };
};

export const getDataInitiate = (id) => {
  return function (dispatch) {
    db.collection("datas")
      .doc(id)
      .get()
      .then((data) => {
        dispatch(getData({ ...data.data() }));
      })
      .catch((error) => console.log(error));
  };
};

export const editDataInitiate = (id,data) => {
  return function (dispatch) {
    db.collection("datas").doc(id).update(data);
    dispatch(editData());
  };
};