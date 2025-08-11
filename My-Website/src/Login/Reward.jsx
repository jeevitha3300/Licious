import React from "react";
import "./reward.css";
import rewardBox from './LoginImages/rewarbox.png'


const faqs = [
  "How do I know if I’m eligible to earn the reward(s)?",
  "The reward is pending. When will the reward be available for redemption?",
  "How do I redeem my reward(s)?",
  "What can I win as a reward?",
  "Will the reward(s) have an expiration date?",
  "Where can I view my reward(s)?",
  "I have Licious Cash/Cash+ in my Licious wallet. Can I redeem it with my reward(s)?",
  "How many rewards can I earn?",
  "Can the reward(s) be gifted?",
  "What happens if I cancel or return an order for which I unlocked a reward?",
  "What happens if Licious cancels or rejects an order in which I unlocked a reward?"
];

const Reward = () => {
  return (
    <div className="rewards-page">
      <div className="rewards-header text-white text-center py-3">
        <h5>Hi 8122060857</h5>
        <p>Welcome to My Rewards</p>
      </div>

      <div className="container text-center my-5">
        <img src={rewardBox} alt="No rewards" className="img-fluid" style={{ maxWidth: "150px" }} />
        <h6 className="mt-3">No rewards yet!</h6>
        <p className="text-muted">Check back this space for exciting rewards.</p>
      </div>

      <div className="container mb-5">
        <h5 className="text-center mb-4">FAQs</h5>
        <div className="accordion" id="faqAccordion">
          {faqs.map((question, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  This is a placeholder answer for: <strong>{question}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-4">
        <button className="btn btn-outline-danger">TERMS & CONDITIONS</button>
        <p className="small mt-2 text-muted">Keep ordering and keep winning big!</p>
      </div>
    </div>
  );
};

export default Reward;
