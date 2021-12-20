import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useWindowSize } from "@react-hook/window-size";

import { useDispatch, useSelector } from "react-redux";
// import { addTicket } from "../../";
import {
  addTicket,
  getTickets,
} from "../../../store/redux/ticket/actionSupport";
import TicketValidation from "../../../Validations/ValidateTicket";

const CreateTicketModal = (props) => {
  const data = useSelector((state) => state.Ticket);
  const allticket = data.tickets;
  // console.log("ff", allticket);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  // const [file, setFile] = useState("");

  // formData.append("username", "Chris");
  const [ticketData, setTicketData] = useState({
    file: "",
    title: "",
    name: "",
    email: "",
    mobile: "",
    type: "",
    description: "",
  });

  const [screen] = useWindowSize();
  const toggle = () => {
    setModal(!modal);
  };

  const ImageThumb = ({ image }) => {
    return (
      <img
        src={URL.createObjectURL(image)}
        alt={image.name}
        style={{ height: 200, width: 200 }}
      />
    );
  };

  //Validating Ticket

  const [errors, setErros] = useState({});

  const handleValidation = () => {
    const { errors, isValid } = TicketValidation({
      title: ticketData.title,
      name: ticketData.name,
      email: ticketData.email,
      phone: ticketData.mobile,
      type: ticketData.type,
      description: ticketData.description,
    });
    if (!isValid) {
      setErros(errors);
    } else {
      setErros({});
    }
  };

  return (
    <div>
      <Button
        color="primary"
        style={{
          background: "#3A44A1",
          border: "none",
          outline: "none",
          fontWeight: "900",
        }}
        onClick={toggle}
      >
        Create Ticket
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="view-modal"
        centered
        dialogClassName="view-modal"
        // size="lg"
        style={{ maxWidth: screen > 1000 ? "70%" : "100%" }}
      >
        {screen < 1000 && (
          <ModalHeader toggle={toggle}>Create Ticket</ModalHeader>
        )}
        <ModalBody>
          <div className="create-ticket-form">
            {screen > 1000 && <h5 className="mb-5 mt-5">Create Ticket</h5>}

            <div>
              <label htmlFor="">Ticket Title</label>
              <input
                type="text"
                placeholder="Type here"
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    title: e.target.value,
                  })
                }
              />
            </div>
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                {errors.title}
              </p>
            )}
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Type here"
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    name: e.target.value,
                  })
                }
              />
            </div>
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                {errors.name}
              </p>
            )}
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Type here"
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                {errors.email}
              </p>
            )}
            <div>
              <label htmlFor="">Mobile No.</label>
              <input
                type="text"
                placeholder="Type here"
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    mobile: e.target.value,
                  })
                }
              />
            </div>
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                {errors.phone}
              </p>
            )}
            <div>
              <label htmlFor="">Ticket Type</label>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    type: e.target.value,
                  })
                }
              >
                <option value="">select</option>
                <option value="60141e4961d75f1b7c1fc2b8">
                  General Support
                </option>
                <option value="60141e5361d75f1b7c1fc2b9">
                  Technical Support
                </option>
              </select>
            </div>
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                {errors.type}
              </p>
            )}

            <div style={{ display: "flex" }}>
              <label htmlFor="">Description</label>
              {/* <TinyMce apiKey="vix1s2ydcqr4vsn400a0i74gbkkx2fydhdvvhzl0swvz1kmb" /> */}
              <textarea
                id=""
                name=""
                rows="1"
                cols="50"
                placeholder="Add Description"
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                {errors.description}
              </p>
            )}
            <div>
              {ticketData.file && <ImageThumb image={ticketData.file} />}
            </div>

            <div className="create-ticket-form-btn">
              <label for="files" className="btn btn-default">
                <i class="fas fa-camera mr-2"></i>Choose File
              </label>
              <input
                id="files"
                type="file"
                class="btn btn-default"
                style={{ visibility: "hidden" }}
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    file: e.target.files[0],
                  })
                }
              />
              <button
                onClick={() => {
                  handleValidation();

                  var formData = new FormData(); // Currently empty
                  formData.append("name", ticketData.name);
                  formData.append("title", ticketData.title);
                  formData.append("file", ticketData.file);
                  formData.append("email", ticketData.email);
                  formData.append("mobile", ticketData.mobile);
                  formData.append("description", ticketData.description);
                  formData.append("type", ticketData.type);

                  dispatch(addTicket(formData));
                }}
              >
                Save
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateTicketModal;
