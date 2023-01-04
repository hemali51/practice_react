import React, { useState } from "react";

export function Tabs_content() {
  const [toggleState, setTogglestate] = useState(1);
  const Toggletab = (index) => {
    setTogglestate(index);
  };
  return (
    <div className="tabswrapper">
      <div className="container">
        <div className="tabspart">
          <div className="tabsabovepart">
            <ul className="d-flex justify-content-center align-items-center">
              <li
                className={toggleState === 1 ? "active" : "tabs"}
                onClick={() => Toggletab(1)}
              >
                Home
              </li>
              <li
                className={toggleState === 2 ? "active" : "tabs"}
                onClick={() => Toggletab(2)}
              >
                FAQ's
              </li>
              <li
                className={toggleState === 3 ? "active" : "tabs"}
                onClick={() => Toggletab(3)}
              >
                Reviews
              </li>
            </ul>
          </div>
          <div className="tabscontentpart">
            <div className={toggleState === 1 ? "active_content" : "content"}>
              <p>Tabs First</p>
            </div>
            <div className={toggleState === 2 ? "active_content" : "content"}>
              <p>Tabs Second</p>
            </div>
            <div className={toggleState === 3 ? "active_content" : "content"}>
              <p>Tabs Third</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
