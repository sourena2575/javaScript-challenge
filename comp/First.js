import React, { useContext } from "react";

import { ContextBase } from "./ContextProvider";
const First = props => {
  const { state, dispatch } = useContext(ContextBase);
  console.log(state);

  if (state.firstChange === "") {
    return (
      <>
        <form>
          <div className="form-group">
            <label>مدل </label>
            <select
              className="form-control"
              onChange={e =>
                dispatch({ type: "CHANGE", payload: e.target.value })
              }
            >
              {state.data.map(item => {
                return (
                  <option key={item.id} value={item.model}>
                    {item.model}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </>
    );
  } else if (state.secondChange === "") {
    return (
      <>
        <form>
          <div className="form-group">
            <label>سال تولید</label>
            <select
              className="form-control"
              onChange={e =>
                dispatch({ type: "CHANGE2", payload: e.target.value })
              }
            >
              {state.second.year.map(item => {
                return (
                  <option key={item.id} value={item.build}>
                    {item.build}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </>
    );
  } else if (state.thirdChange === "") {
    return (
      <>
        <form>
          <div className="form-group">
            <label>رنگ </label>
            <select
              className="form-control"
              onChange={e =>
                dispatch({ type: "CHANGE3", payload: e.target.value })
              }
            >
              {state.third.color.map(item => {
                return (
                  <option key={item.id} value={item.base}>
                    {item.base}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <div className="row">
        <div className="col-8 mx-auto  bg-danger rounded">
          <p> مدل: {state.firstChange}</p>
          <p> سال تولید: {state.secondChange}</p>
          <p> رنگ: {state.thirdChange}</p>
        </div>
      </div>
    );
  }
};

export default First;
