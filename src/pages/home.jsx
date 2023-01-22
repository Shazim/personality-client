import Header from "components/Header";
import React, { useState } from "react";

function Home() {
  const [signinModal, setSigninModal] = useState(false);
  return (
    <>
      <Header signinModal={signinModal} setSigninModal={setSigninModal} />
      <div
        onClick={() => setSigninModal(true)}
        className="absolute-center absolute text-5xl text-center flex items-center justify-center cursor-pointer"
      >
        Start
      </div>
    </>
  );
}

export default Home;
