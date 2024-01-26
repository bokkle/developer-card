import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return <img className="avatar" src="/CTZN3096.png" alt="Me" />;
};

const Intro = () => {
  return (
    <div>
      <h1>Bokkle</h1>
      <p>
        Full stack developer, specializing in web and game development. When not
        coding, I like to play chess, lift weights, and go to the beach.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="HTML" color="orangered" />
      <Skill skill="CSS" color="skyblue" />
      <Skill skill="JavaScript" color="gold" />
      <Skill skill="React" color="violet" />
      <Skill skill="Solidity" color="#323232" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: props.color,
        color: "ghostwhite",
        textShadow: "0 0 4px #000000",
        fontWeight: "bold",
        letterSpacing: "1px",
      }}
    >
      <span>{props.skill}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
