import React, { useRef, useState } from "react";
import ReactCountUp from "react-countup-v2";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
Modal.setAppElement("#root");

const CountUp = () => {
  const idleref = useRef(null);
  const idlereffinal = useRef(null);
  const [log, setlog] = useState(true);
  const [mod, setmod] = useState(false);
  return (
    <div className="jumbotron">
      <ReactCountUp endVal={1000} />
      {log ? <h2>hello</h2> : <h2>bye</h2>}
      <br />
      <Modal
        isOpen={mod}
        style={{
          overlay: {
            backgroundColor: "grey"
          },
          content: {
            color: "orange",
            backgroundColor: "lightblue"
          }
        }}
        onRequestClose={() => setmod(false)}
      >
        <h2>u idle</h2>
        <button
          onClick={() => {
            setmod(false);
            setlog(false);
            clearTimeout(idlereffinal.current);
          }}
        >
          log out
        </button>
        <button
          onClick={() => {
            clearTimeout(idlereffinal.current);
            setmod(false);
          }}
        >
          signed in
        </button>
      </Modal>
      <IdleTimer
        ref={idleref}
        timeout={5000}
        onIdle={() => {
          setmod(true);
          idlereffinal.current = setTimeout(() => {
            setmod(false);
            setlog(false);
          }, 5000);
        }}
      ></IdleTimer>
    </div>
  );
};

export default CountUp;
