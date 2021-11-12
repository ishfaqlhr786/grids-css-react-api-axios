import React, { useState } from "react";
import "./Signup.styles.css";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";

const customStyles = {
  content: {
    width: "50%",
    textAlign: "center",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const SignUp = () => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    cPassword: "",
  });
  const [error, setError] = useState({
    errName: " name should not empty",
    errEmail: "email should not be empty",
    errPwd: "last name should not be empty",
    errcPwd: "cnic should not be empty",
  });
  const [image, setImage] = useState("");
  const [choice, setChoice] = useState(false);
  const changeImage = (e) => {
    try {
      setImage(URL.createObjectURL(e.target.files[0]));
    } catch {
      return 0;
    }
  };
  const handleOnChange = (e) => {
    //console.log(myref.current.value)
    const target = e.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;

    const value = target.value;
    const name = target.name;

    setForm({
      ...form, //adds values into forms
      [name]: value,
    });
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  function openModal() {
    if (!form.Name || !form.Email || !form.Password || !form.cPassword) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setChoice(true);
    //  console.log(myref.current.value)
    console.log(form);
    if (form.Password === form.cPassword) {
      handleOnChange(e);
    } else {
      //  <Redirect to="/SignUp" />;
      alert("password and confrm password are not matched");
    }
    //  if(form.mobile !== "^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$"){
    //  alert("plz enter cnic number in  required pattern")
    // }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="wrapperSignup">
          <div className="mainSignup">
            <h1 className="signupTitle">Sign Up Here</h1>
            <div className="box">
              <div className="col1">
                <div className="col1Content">
                  <label for="name">name</label>
                  <br />
                  <br />
                  <input
                    type="text"
                    id="name"
                    value={form.Name}
                    name="Name"
                    className="inputSignup"
                    onChange={handleOnChange}
                    placeholder="please ur Name"
                  />
                  <br />
                  <span
                    style={
                      form.Name === "" && choice === true
                        ? {
                            display: "block",
                            border: "2px solid red",
                            color: "red",
                            width: "80%",
                          }
                        : { display: "none" }
                    }
                  >
                    {error.errName}
                  </span>
                  <br />
                  <br />
                  <label for="email">email</label>
                  <br />
                  <br />
                  <input
                    type="email"
                    id="email"
                    value={form.Email}
                    name="Email"
                    className="inputSignup"
                    onChange={handleOnChange}
                    placeholder="please ur Email address"
                  />
                  <br />

                  <span
                    style={
                      form.Email === "" && choice === true
                        ? {
                            display: "block",
                            border: "2px solid red",
                            color: "red",
                            width: "80%",
                          }
                        : { display: "none" }
                    }
                  >
                    {error.errEmail}
                  </span>
                  <br />
                  <br />
                  <label for="pwd">Password</label>
                  <br />
                  <br />
                  <input
                    type="password"
                    id="pwd"
                    value={form.Password}
                    name="Password"
                    className="inputSignup"
                    onChange={handleOnChange}
                    placeholder="please ur Password"
                  />
                  <br />
                  <br />
                  <span
                    style={
                      form.Password === "" && choice === true
                        ? {
                            display: "block",

                            border: "2px solid red",
                            color: "red",
                            width: "80%",
                          }
                        : { display: "none" }
                    }
                  >
                    {error.Password}
                  </span>
                  <br />
                  <br />
                </div>
              </div>
              <div className="col2">
                <div className="ImgUpload">
                  <span>please choose a picture</span>
                  <input
                    type="file"
                    onChange={changeImage}
                    name="image"
                    id="file"
                  />

                  <img
                    src={image}
                    width="200px"
                    height="180px"
                    style={
                      image === ""
                        ? { display: "none" }
                        : {
                            position: "absolute",
                            top: "19px",
                            right: "85px",
                          }
                    }
                  />
                </div>
                <br />
                <br />
                <br />
                <div style={{ position: "relative", left: "60px" }}>
                  <label for="cpwd">Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    id="cpwd"
                    value={form.cPassword}
                    name="cPassword"
                    className="inputSignup"
                    onChange={handleOnChange}
                    placeholder="please confirm your password"
                  />
                  <br />
                  <span
                    style={
                      form.cPassword === "" && choice === true
                        ? {
                            display: "block",
                            border: "2px solid red",
                            color: "red",
                            width: "80%",
                          }
                        : { display: "none" }
                    }
                  >
                    {error.errcPwd}
                  </span>
                </div>
                <br />
                <div className="submitDiv">
                  <input
                    type="submit"
                    value="submit data"
                    onClick={openModal}
                    className="submitBtn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Submitted Data Successfully
        </h2>
        <button onClick={closeModal}>close</button>
        <div>
          {Object.entries(form).map(([key, value]) => {
            return (
              <h2>
                {key} - {value}
              </h2>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
