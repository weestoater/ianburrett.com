import React from "react";

import burtImg from "../assets/img/ianburrett.png";

const Home = () => {
  document.title = "Home - ianburrett.com";

  return (
    <div className="homepage">
      <h1>Welcome</h1>
      <img src={burtImg} alt="Avatar of Ian Burrett" className="avatar" />
      <p className="lead">
        <i className="bi bi-gear text-success me-2"></i> This is a small testing
        space for web ideas by Ian Burrett.
      </p>
    </div>
  );
};

export default Home;
