import React, { useContext } from "react";

import { ContextBase } from "./ContextProvider";
const Second = props => {
  const { state, dispatch } = useContext(ContextBase);
  console.log(state, props);

  return (
    <>
      <form>
        <div className="form-group">
          <select
            className="form-control"
            onChange={e =>
              dispatch({ type: "CHANGE", payload: e.target.value })
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
};
export default Second;
