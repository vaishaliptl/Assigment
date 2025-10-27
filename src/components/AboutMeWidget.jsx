import React, { useState } from "react";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "exp", label: "Experiences" },
  { id: "rec", label: "Recommended" }
];

const content = {
  about:
    "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years. My wife Tiffany and my 4 year old twin daughters—Emma and Ella — are just starting school.",
  exp:
    "Experience: 3 years at Salesforce as Sales Rep. Prior: 2 years in customer success. Skills: CRM, outreach, product demos, negotiation.",
  rec:
    "Recommended: Focus on customer-first discovery, use data-driven cadences, and automate follow-ups for better conversion."
};

export default function AboutMeWidget() {
  const [active, setActive] = useState("about");

  return (
    <div className="widget about-widget">
      <div className="tabs-row">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="content">
        <p>{content[active]}</p>
      </div>
    </div>
  );
}
