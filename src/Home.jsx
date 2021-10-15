import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addDataInitiate,
  deleteDataInitiate,
  editDataInitiate,
  getDataInitiate,
  getDatasInitiate,
} from "./redux/actions";

const initialState = {
  subject: "",
  topic: "",
  notes: "",
};

function Home() {
  const [state, setstate] = useState(initialState);
  const { subject, topic, notes } = state;
  const [edit, setedit] = useState(false);
  const [userId, setuserId] = useState(null);
  const dispatch = useDispatch();
  const { datas, data } = useSelector((state) => state.subject);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      dispatch(addDataInitiate(state));
      setstate({ subject: "", topic: "", notes: "" });
      toast.success("💪🤩Submitted successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(editDataInitiate(userId, state));
      setuserId(null);
      setedit(false);
      setstate({ subject: "", topic: "", notes: "" });
      toast.info("🤘😎Upadated Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    dispatch(getDatasInitiate());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setstate({ ...data });
    }
  }, [data]);

  const deleteData = (id) => {
    dispatch(deleteDataInitiate(id));
    toast.success("😮🤯Deleted Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const editData = (id) => {
    setedit(true);
    setuserId(id);
    dispatch(getDataInitiate(id));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-sm-8  mt-3">
            {datas &&
              datas.map((item, index) => (
                <div className="accordion" id="accordionExample" key={index}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed bold fontsize"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {item.subject}
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="boxShadow">
                          <h4 className="bold text-center p-2">
                            {item.topic}{" "}
                          </h4>
                        </div>
                        <div>
                          <em>{item.notes}</em>
                        </div>
                        <div className="mt-2 text-center">
                          <button
                            className="btn btn-success m-2"
                            onClick={() => editData(item.id)}
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteData(item.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* ---------------FORM START FROM HER------------------ */}

          <div className="  col-sm-4 mt-3 boxShadow2 p-3 ">
            <h5 className="text-center p-2 border">
              {!edit ? " Add Subject Topic And Notes" : "Update The Data"}
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label className="form-label bold">Subject Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please Enter The Subject Name"
                  name="subject"
                  value={subject || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 ">
                <label className="form-label bold">Topic Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please Enter The Subject Topic Name"
                  name="topic"
                  value={topic || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 ">
                <label className="form-label bold">Notes</label>
                <textarea
                  rows="4"
                  type="text"
                  className="form-control"
                  placeholder="Enter The Subject Notes"
                  name="notes"
                  value={notes || ""}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {!edit ? "Submit" : "Update"}
              </button>
            </form>

            <div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
