import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import ToastNotification from "./comp/ToastNotification";
import Modall from "./comp/Modal";
import TollTip from "./comp/TollTip";
import CountUp from "./comp/CountUp";
function App() {
  return (
    <div>
      <CountUp />
      <ToastNotification />
      <Modall />
      <TollTip />
    </div>
  );
}
const Div = styled.div``;
export default App;
