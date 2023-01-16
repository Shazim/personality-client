import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import router from "routes";
import "./index.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {router.map((item) => {
            if (item.privateRoute) {
              return (
                <PrivateRoute
                  key={item.path}
                  path={item.path}
                  element={<item.component />}
                  exact
                  privateRoute={item.privateRoute}
                />
              );
            } else {
              return (
                <Route
                  exact
                  key={item.path}
                  path={item.path}
                  element={<item.component />}
                />
              );
            }
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
