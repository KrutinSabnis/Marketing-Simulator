// import logo from "./logo.svg";
import "./App.css";
import { Routes, NavLink, Route } from "react-router-dom";
import { useState } from "react";

function Todo({
  newPAge1state,
  newPAge2state,
  newPAge3state,
  newPAge4state,
  newPAge5state
}) {
  return (
    <div className="CardDiv">
      <h1>Marketing Simulator</h1>
      <div className="card">
        <span>Create Plan</span>{" "}
        <NavLink className="tickor" to="/newPAge1">
          {newPAge1state ? "✅" : "❌"}
        </NavLink>
      </div>
      <div className="card">
        <span>Define Step</span>{" "}
        <NavLink className="tickor" to="/newPAge2">
          {newPAge2state ? "✅" : "❌"}
        </NavLink>
      </div>
      <div className="card">
        <span>Set params</span>{" "}
        <NavLink className="tickor" to="/newPAge3">
          {newPAge3state ? "✅" : "❌"}
        </NavLink>
      </div>
      <div className="card">
        <span>Distribute </span>
        {"     "}
        <NavLink className="tickor" to="/newPAge4">
          {newPAge4state ? "✅" : "❌"}
        </NavLink>
      </div>
      <div className="card">
        <span>Redifine</span>{" "}
        <NavLink className="tickor" to="/newPAge5">
          {newPAge5state ? "✅" : "❌"}
        </NavLink>
      </div>
    </div>
  );
}

function NewPage({ setnNwPAge1state }) {
  return (
    <>
      <div className="PageCardParent">
        <h1>Create Plan</h1>
        <lable>
          <bold>Input Details:</bold>
          <input />
        </lable>
        <button
          className="btn"
          onClick={() => {
            setnNwPAge1state(true);
            alert("done");
          }}
        >
          Submit
        </button>
        <button
          className="btn"
          onClick={() => {
            setnNwPAge1state(false);
            alert("done");
          }}
        >
          Unsubmit
        </button>
        <NavLink to="/">Back</NavLink>
      </div>
    </>
  );
}

function NewPage2({ setnNwPAge2state }) {
  return (
    <>
      <div className="PageCardParent">
        <h1>Create Plan</h1>
        <lable>
          <bold>Input Details:</bold>
          <input />
        </lable>
        <button className="btn" onClick={() => setnNwPAge2state(true)}>
          Submit
        </button>
        <button className="btn" onClick={() => setnNwPAge2state(false)}>
          Unsubmit
        </button>
        <NavLink to="/">Back</NavLink>
      </div>
    </>
  );
}
function NewPage3({ setnNwPAge3state }) {
  return (
    <div className="PageCardParent">
      <h1>Create Plan</h1>
      <lable>
        <bold>Input Details:</bold>
        <input />
      </lable>
      <button className="btn" onClick={() => setnNwPAge3state(true)}>
        Submit
      </button>
      <button className="btn" onClick={() => setnNwPAge3state(false)}>
        Unsubmit
      </button>
      <NavLink to="/">Back</NavLink>
    </div>
  );
}
function NewPage4({ setnNwPAge4state }) {
  return (
    <div className="PageCardParent">
      <h1>Create Plan</h1>
      <lable>
        <bold>Input Details:</bold>
        <input />
      </lable>
      <button className="btn" onClick={() => setnNwPAge4state(true)}>
        Submit
      </button>
      <button className="btn" onClick={() => setnNwPAge4state(false)}>
        Unsubmit
      </button>
      <NavLink to="/">Back</NavLink>
    </div>
  );
}
function NewPage5({ setnNwPAge5state }) {
  return (
    <div className="PageCardParent">
      <h1>Create Plan</h1>
      <lable>
        <bold>Input Details:</bold>
        <input />
      </lable>
      <button className="btn" onClick={() => setnNwPAge5state(true)}>
        Submit
      </button>
      <button className="btn" onClick={() => setnNwPAge5state(false)}>
        Unsubmit
      </button>
      <NavLink to="/">Back</NavLink>
    </div>
  );
}

function App() {
  const [db, setDb] = useState([
    {
      text: "This is a sampe todo",
      isDone: false
    },
    {
      text: "This 1 a sampe todo",
      isDone: false
    },
    {
      text: "This 2 a sampe todo",
      isDone: false
    },
    {
      text: "This 3 a sampe todo",
      isDone: false
    }
  ]);
  const [newPAge1state, setnNwPAge1state] = useState(false);
  const [newPAge2state, setnNwPAge2state] = useState(false);
  const [newPAge3state, setnNwPAge3state] = useState(false);
  const [newPAge4state, setnNwPAge4state] = useState(false);
  const [newPAge5state, setnNwPAge5state] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Todo
              newPAge1state={newPAge1state}
              newPAge2state={newPAge2state}
              newPAge3state={newPAge3state}
              newPAge4state={newPAge4state}
              newPAge5state={newPAge5state}
            />
          }
        />
        <Route
          path="/newPage1"
          element={<NewPage setnNwPAge1state={setnNwPAge1state} />}
        />
        <Route
          path="/newPage2"
          element={<NewPage2 setnNwPAge2state={setnNwPAge2state} />}
        />
        <Route
          path="/newPage3"
          element={<NewPage3 setnNwPAge3state={setnNwPAge3state} />}
        />
        <Route
          path="/newPage4"
          element={<NewPage4 setnNwPAge4state={setnNwPAge4state} />}
        />
        <Route
          path="/newPage5"
          element={<NewPage5 setnNwPAge5state={setnNwPAge5state} />}
        />
      </Routes>
    </>
  );
}

export default App;
