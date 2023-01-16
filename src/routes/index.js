import { Home } from "pages";

// List of Routes name using for links and route
export const routes = Object.freeze({
  HOME: "/",
  ROUTE_PAGE_NOT_FOUND: "/*",
});
// List of route object which will be rendered under Router component
export default Object.freeze([
  {
    path: routes.HOME,
    component: Home,
    privateRoute: false,
  },
  {
    path: routes.TEST,
    component: Home,
    privateRoute: true,
  },
]);
