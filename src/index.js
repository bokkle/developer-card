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
    <ul className="skill-list">
      <li
        className="skill"
        style={{ color: 'ghostwhite', textShadow: '0 0 4px #000000', backgroundColor: "orange", fontWeight: "bold" }}
      >
        HTML
      </li>
      <li
        className="skill"
        style={{ color: 'ghostwhite', textShadow: '0 0 4px #000000', backgroundColor: "lightblue", fontWeight: "bold" }}
      >
        CSS
      </li>
      <li
        className="skill"
        style={{ color: 'ghostwhite', textShadow: '0 0 4px #000000', backgroundColor: "orangered", fontWeight: "bold" }}
      >
        JavaScript
      </li>
      <li
        className="skill"
        style={{ color: 'ghostwhite', textShadow: '0 0 4px #000000', backgroundColor: "violet", fontWeight: "bold" }}
      >
        React
      </li>
      <li
        className="skill"
        style={{ color: 'ghostwhite', textShadow: '0 0 4px #000000', backgroundColor: "darkgray", fontWeight: "bold" }}
      >
        Solidity
      </li>
    </ul>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
