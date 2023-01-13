import { SigninModal, SignUpModal } from "modals";
import React, { useState } from "react";

function Home() {
  const [signinModal, setSigninModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <div className="  bg-black py-6">
      <div className="flex justify-between max-w-7xl mx-auto text-white">
        <div className="font-bold cursor-pointer">Home</div>
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
      </div>
      <SigninModal open={signinModal} onClose={() => setSigninModal(false)} />
      <SignUpModal open={signUpModal} onClose={() => setSignUpModal(false)} />
    </div>
  );
}

export default Home;
