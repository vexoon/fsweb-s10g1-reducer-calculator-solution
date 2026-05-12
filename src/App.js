import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import {
  
  CHANGE_OPERATION,
  CLEAR,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  MEMORY_PLUS,
  screenType,
  CALCULATE,
} from "./actions";
import reducer, { initialState } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.screen} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Temp:</b> {state.temp}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  dispatch({ type: MEMORY_PLUS });
                }}
                value={"M+"}
              />
              <CalcButton
                onClick={() => {
                  dispatch({ type: MEMORY_RECALL });
                }}
                value={"MR"}
              />
              <CalcButton
                onClick={() => {
                  dispatch({ type: MEMORY_CLEAR });
                }}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={1}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={2}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={3}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={4}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={5}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={6}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={7}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={8}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={9}
              />
            </div>
            <div className="row ">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={0}
              />
              <CalcButton
                onClick={(e) => dispatch({ type: CLEAR })}
                value={"CE"}
              />
              <CalcButton
                onClick={(e) => dispatch({ type: CALCULATE })}
                value={"="}
              />
            </div>
            <div className="row">
              <CalcButton
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
                value={"+"}
              />
              <CalcButton
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
                value={"*"}
              />
              <CalcButton
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
                value={"-"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
