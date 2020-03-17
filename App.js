import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import ToastNotification from "./comp/ToastNotification";
import Modall from "./comp/Modal";
import TollTip from "./comp/TollTip";
import CountUp from "./comp/CountUp";
import ColorPicker from "./comp/ColorPicker";
function App() {
  return (
    <div>
      <ColorPicker />
      <ToastNotification />
      <Modall />
      <TollTip />
    </div>
  );
}
const Div = styled.div``;
export default App;
