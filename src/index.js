import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'HTML',
    level: 'advanced',
    color: 'orangered',
  },
  {
    skill: 'CSS',
    level: 'advanced',
    color: 'skyblue',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: 'gold',
  },
  {
    skill: 'React',
    level: 'intermediate',
    color: 'violet',
  },
  {
    skill: 'solidity',
    level: 'beginner',
    color: '#323232',
  },
  {
    skill: 'Web Dev',
    level: 'intermediate',
    color: 'lightgreen',
  },
  {
    skill: 'Game Dev',
    level: 'beginner',
    color: 'grey'
  }
];

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
      {skills.map((s) => (
        <Skill skillObj={s} key={s.skill} />
      ))}
    </div>
  );
};

const Skill = ({ skillObj }) => {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: skillObj.color,
        color: 'ghostwhite',
        textShadow: '0 0 4px #000000',
        fontWeight: 'bold',
        letterSpacing: '1px',
      }}
    >
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === 'advanced'
          ? '💪🏻'
          : skillObj.level === 'intermediate'
          ? '👍🏻'
          : skillObj.level === 'beginner'
          ? '👶🏻'
          : ''}
      </span>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
