// ====================== IMPORTED LIBRARIES ====================
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

// ====================== IMPORTED UTILS ========================
import { getCookie } from 'cookies/Cookies';

function PrivateRoute({ component: Component, path, privateRoute, ...rest }) {
  const { access_token } =
    (getCookie('user') && JSON.parse(getCookie('user'))) || {};

  const { isLogout } = useSelector((state) => state.modals);


  return (
    isLogout ? (
      <div className="w-100% h-100vh flex items-center justify-center flex-col ">
        <TailSpin
          color="#C71118"
          height={80}
          width={80}
          artworks
          ariaLabel="loading"
        />
        <h3>You have been logged out!</h3>
      </div>
    ) : (
      <Route
        {...rest}
        path={path}
        render={(props) =>
          access_token ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )
  );
}

export default PrivateRoute;
