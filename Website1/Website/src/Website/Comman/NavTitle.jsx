import React from "react";
import { Link } from "react-router-dom";

function NavTitle({ img, name, title }) {
  return (
    <div>
      <section
        id="center"
        className="center_about"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "100px 0"
        }}
      >
        <div className="center_om">
          <div className="container-xl">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">{title}</h1>

                <h6 className="col_green mb-0 mt-3 fw-normal">
                  <Link className="text-light" to="/">
                    Home
                  </Link>

                  <span className="mx-2 text-white-50"> / </span>

                  {name}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavTitle;