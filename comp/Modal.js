import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
const Modall = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="mt-5">
      <button
        className="btn btn-outline-secondary"
        onClick={() => setstate(true)}
      >
        Open
      </button>
      <Modal
        style={{
          overlay: {
            backgroundColor: "grey"
          },
          content: {
            color: "orange",
            backgroundColor: "lightblue"
          }
        }}
        isOpen={state}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setstate(false)}
      >
        Modal
        <button
          className="btn btn-outline-danger"
          onClick={() => setstate(false)}
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default Modall;
