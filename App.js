import React from "react";
import First from "./comp/First";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Div>
      <div className=" col-8 mx-auto jumbotron bg-warning ">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={First} />
          </Switch>
        </BrowserRouter>
      </div>
    </Div>
  );
}
const Div = styled.div`
  margin: 100px auto;
`;
export default App;
