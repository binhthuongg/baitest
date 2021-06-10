import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StyledComponent } from "./styles";

function NavBar(props) {
  return (
    <StyledComponent>
      {/* <h3>Abivin</h3> */}
      <h3>test</h3>
      <ul className="navigation">
        <li>
          <Link to="/sign-up">SignUp</Link>
        </li>
        <li>
          <Link to="/log-in">Login</Link>
        </li>
      </ul>
    </StyledComponent>
  );
}

export default NavBar;
