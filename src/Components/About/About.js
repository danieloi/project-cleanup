import React from "react";

export const About = () => {
  return (
    <div className="">
      <h3 className="title white center">ABOUT US</h3>
      <div className="divider" />
      <div className="contain">
        <div id="name" className="">
          <div className="divider" />
          <h3 className="center">Our Name</h3>
          <div className="divider" />
          {/* <p>Our name comes from the English word "spick-and-span"</p> */}
          <div className="card">
            <h4 className="center underline">
              <strong>spick-and-span</strong>
            </h4>
            <div className="divider" />
            <p>1 : spotlessly clean</p>
            <p className="">
              <strong>Synonyms</strong>: stainless, unsoiled, unsullied,
              pristine, spotless, stainless, squeaky clean
            </p>
          </div>

          <div className="divider" />
          <div className="divider" />
        </div>

        <div id="occupation" className="">
          <div className="">
            <div className="divider" />
            <h3 className="center">What We Do</h3>
            <div className="divider" />
            <div className="card center">
              <p>
                <strong>On-demand</strong> cleaning services for
              </p>
              {/* <p>
              {" "}
              homes <i className="material-icons">home</i>, vehicles{" "}
              <i className="material-icons">directions_car</i> and clothing{" "}
              <i className="material-icons">local_laundry_service</i>
            </p> */}
              <p>
                {" "}
                <strong>homes</strong>, <strong>vehicles</strong> and{" "}
                <strong>clothing</strong>{" "}
              </p>
              <p>
                within the <strong>Abuja</strong> area.{" "}
              </p>
              <p>
                We leave whatever you assign us,{" "}
                <strong>spotlessly clean</strong>.
              </p>
            </div>
            <div className="divider" />
            <div className="divider" />
          </div>
        </div>
        <div id="method">
          <div className="divider" />
          <h3 className="center">How We Do It</h3>
          <div className="divider" />
          <div className="card center">
            <p>
              You visit <strong>www.spikandspan.net</strong>{" "}
            </p>
            <p>You choose what you want to have cleaned</p>
            <p>You specify a time and a place</p>
            <p>We show up and get to work </p>
            <p>
              <strong>Clean and simple</strong>.
            </p>
          </div>

          <div className="divider" />
          <div className="divider" />
        </div>
        <div id="cleaners">
          <div className="divider" />

          <h3 className="center">Our Cleaners</h3>
          <div className="divider" />
          <div className="card">
            <p>
              They are <strong>honest</strong> and <strong>diligent</strong>{" "}
              individuals with full-time jobs as cleaners under the firm that
              has maintained <strong>National Hospital Abuja </strong>
              for almost two decades.{" "}
            </p>
            <p>
              Our platform is an extra source of revenue for them as they serve
              you with their <strong>expertise</strong>
            </p>
          </div>
          <div className="divider" />
          <div className="divider" />
        </div>
      </div>
      <div className="" />
    </div>
  );
};
