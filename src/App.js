import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import router from "routes";
import "./index.css";
import PrivateRoute from "routes/PrivateRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {router.map((item) => {
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                element={
                  <PrivateRoute>
                    <item.component />
                  </PrivateRoute>
                }
              />
            );
            // }
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
