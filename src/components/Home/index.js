import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ProjectCard from '../ProjectCard';
import linkedinIcon from '../../assets/images/linkedin.png';
import githubIcon from '../../assets/images/github.png';
import resumePDF from '../../assets/files/Resume.pdf';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const email = "tomboehan@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert('tomboehan@gmail.com copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const openResume = () => {
    window.open(resumePDF, '_blank');
  };  

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/thomas-hanle-58b9121b6/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/TommyHanle', '_blank');
  };

  const nameArray = [' ', 'T','h', 'o', 'm', 'a', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>As a Full-Stack Software Engineer, I leverage my strong background in team skills, analytics, and problem-solving, gained from a Communications degree at Boston College and an intensive 420-hour curriculum at General Assembly's Software Engineering Immersive program. Passionate about collaborating with teams to create innovative projects and tackle complex challenges, I bring a unique blend of skills and a keen eye for detail, eager to contribute to the success of any development team.</h2>

          <h4>Skills</h4>
          <h2>JAVASCRIPT | PYTHON | REACT | SQL | AWS | JQUERY | NODE.JS | CSS | HTML | EXPRESS | MONGODB | POSTGRESQL | DJANGO | JSON WEB TOKENS | OAUTH | MAPBOX | BOOTSTRAP | GOOGLE APIS | GIT | HEROKU | SALESFORCE | TRELLO</h2>

          <div className="buttons-wrapper">
            <button onClick={copyEmailToClipboard} className="flat-button">
              CONTACT ME: {email}
            </button>
            <div className="resume-icons-wrapper">
              <button onClick={openResume} className="res-button">
                MY RESUME
              </button>
              <button onClick={openLinkedIn} className="icon-button">
                <img src={linkedinIcon} alt="LinkedIn" />
              </button>
              <button onClick={openGitHub} className="icon-button">
                <img src={githubIcon} alt="GitHub" />
              </button>
            </div>
          </div>


        </div>

          <div className="project-showcase">
            <h3 className="showcase-title">My Projects</h3>
            <div className="project-grid">
              <ProjectCard
              image="https://i.imgur.com/uo3lXhq.png"
              title="Pulse"
              description="A Real Estate Forecast App."
              technologies={['React', 'Node.js', 'Express']}
              githubLink="https://github.com/TommyHanle/Pulse"
              />
              <ProjectCard
              image="https://i.imgur.com/V1Ao1kE.png"
              title="Apiary"
              description="An Event Locator/Forum App."
              technologies={['Python', 'Django', 'PostgreSQL']}
              githubLink="https://github.com/DwAwilliamsGHB/apiaryapp"
              />
              <ProjectCard
              image="https://i.imgur.com/KLiFnwO.png"
              title="Trivall"
              description="A Trip Planning App."
              technologies={['Node.js', 'Express', 'MongoDB']}
              githubLink="https://github.com/TommyHanle/trivall-app"
              />
              <ProjectCard
              image="https://i.imgur.com/7H1JoTi.png"
              title="Battleship"
              description="The Classic Battleship Game."
              technologies={['JavaScript', 'HTML', 'CSS']}
              githubLink="https://github.com/TommyHanle/Battleship-Game"
              />
            </div>
          </div>
        </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
