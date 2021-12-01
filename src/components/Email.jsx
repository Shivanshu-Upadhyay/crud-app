import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Img from "../img/Img.svg";
function Email() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nkstn6m",
        "template_e4a98qa",
        e.target,
        "user_fvRkuSsFUOAOpA68z5ZYS"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("💪🤩Submitted successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>

                  <img src={Img} alt="contact" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <form className="mb-5" onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control mb-4"
                          name="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control mb-4"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control  mb-4"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control  mb-4"
                          name="message"
                          rows={7}
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-primary rounded-0 py-2 px-4  mb-4"
                        />
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
