import React from "react";

export const Faqs = () => {
  return (
    <div>
      <h3 className="center title white">FREQUENTLY ASKED QUESTIONS</h3>
      <div className="contain">
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
        <div className="card no_padding">
          <p className="question">
            <span className="q">Q</span> What is your hourly rate?
          </p>
          <p className="answers">Our rate is N1500 per hour.</p>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
        <div className="card no_padding">
          <p className="question">
            <span className="q">Q</span> Can I tip my cleaner?
          </p>
          <p className="answers">Yes</p>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
        <div className="card no_padding">
          <p className="question">
            <span className="q">Q</span> How do payments work?
          </p>
          <p className="answers">
            Our payments are handled by Paystack.<br />
            For security reasons we do not keep any of your card details on our
            servers.
          </p>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
      </div>
    </div>
  );
};
