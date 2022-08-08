import { useState } from "react";
import "./App.css";

import Data from "./data.json";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <center>
        <div className="App">
          <div className="Container">
            <p>
              New Connections <span>2</span>
            </p>
            <div className="wrapper">
              {Data.map((items, key) => {
                return (
                  <div className="item" key={key}>
                    <img src={items.img} alt="icons" />
                    {items.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="Container_Vertical">
            <div className="topnav">
              <a href="#">
                <p>
                  Messages <span>1</span>
                </p>
              </a>
              <div className="search">
                <input
                  type="search"
                  className="input-search"
                  placeholder="&#61442; Search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  results
                />
              </div>
            </div>

            <div className="wrapper_Vertical">
              {Data.filter((items) => {
                if (searchTerm == "") {
                  return items;
                } else if (
                  items.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return items;
                }
              }).map((items, key) => {
                return (
                  <div className="item" key={key}>
                    <div className="row">
                      <div className="column">
                        <img src={items.img} />
                        <a className="tittle">
                          {items.name}
                          <br />
                          <span className="msg">{items.msg}</span>
                        </a>
                      </div>
                      <div className="column1">
                        <ol>
                          <li>
                            <a>{items.time}</a>
                          </li>
                          <li>
                            <div className="para">
                              <p className="dot">{items.num}</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
