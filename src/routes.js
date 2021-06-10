import Login from "./pages/Login";
import LoginSuccessful from "./pages/LoginSuccessful";

const routes = [
  {
    path: "/",
    component: Login,
    exact: true
  },
  {
    path: "/login-success",
    component: LoginSuccessful,
    exact: true
  }
];

export default routes;
