import { Home, Test } from "../pages";

export const routes = Object.freeze({
  HOME: "/",
  TEST: "/test",
  ROUTE_PAGE_NOT_FOUND: "/*",
});

export default Object.freeze([
  {
    path: routes.HOME,
    component: Home,
    privateRoute: false,
  },
  {
    path: routes.TEST,
    component: Test,
    privateRoute: true,
  },
]);
