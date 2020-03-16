import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const ToastNotification = () => {
  return (
    <div className="col-10 mt-5 ">
      <button
        className="btn btn-outline-info align-self-center"
        onClick={() =>
          toast.error("Amir", { position: toast.POSITION.TOP_LEFT })
        }
      >
        Click
      </button>
      <button
        className=" btn btn-outline-info align-self-center ml-5"
        onClick={() =>
          toast.success("Amir", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 8000
          })
        }
      >
        Click
      </button>
      <button
        className=" btn btn-outline-info align-self-center ml-5"
        onClick={() =>
          toast.info("Amir", { position: toast.POSITION.TOP_CENTER })
        }
      >
        Click
      </button>
    </div>
  );
};

export default ToastNotification;
