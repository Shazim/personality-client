import React, { useState } from "react";
import { getCookie, removeCookie } from "cookies/Cookies";
import { SigninModal, SignUpModal } from "modals";
import { useNavigate } from "react-router-dom";

function Header({ signinModal, setSigninModal }) {
  const [signUpModal, setSignUpModal] = useState(false);
  const history = useNavigate();

  const [accessToken, setAccessToken] = useState(getCookie("token"));

  const handleLogout = () => {
    setAccessToken();
    history("/");
    removeCookie("token");
  };

  return (
    <div className="bg-black py-6">
      <div className="flex justify-between max-w-7xl mx-auto text-white">
        <div className="font-bold cursor-pointer">Home</div>
        {accessToken ? (
          <div className="font-bold cursor-pointer" onClick={handleLogout}>
            {" "}
            Logout
          </div>
        ) : (
          <div className="flex">
            <div
              className="mr-10 cursor-pointer font-bold"
              onClick={() => setSigninModal(true)}
            >
              Login
            </div>
            <div
              className="cursor-pointer font-bold"
              onClick={() => setSignUpModal(true)}
            >
              SignUp
            </div>
          </div>
        )}
      </div>

      <SigninModal
        open={signinModal}
        onClose={() => setSigninModal(false)}
        setAccessToken={setAccessToken}
      />
      <SignUpModal open={signUpModal} onClose={() => setSignUpModal(false)} />
    </div>
  );
}

export default Header;
