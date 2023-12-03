import { useState } from "react";

function App() {
  return (
    <div className="App">
      <CampaignHelper />
    </div>
  );
}

function CampaignHelper() {
  return (
    <div>
      <SkillTreeSection />
      <GemsSection />
      <TextSection />
    </div>
  );
}

function SkillTreeSection() {
  return (
    <div>
      <ul>
        <li>Skill Tree</li>
      </ul>
    </div>
  );
}

function GemsSection() {
  return <div></div>;
}

function TextSection() {
  return <div></div>;
}

export default App;
