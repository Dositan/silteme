import {
  IoHome,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

function App() {
  const iconStyle = { width: 20, height: 20 };
  return (
    <div className="App">
      <header>
        <img src={require("./profile.jpg")} alt="profile" />
        <h1>@dositan</h1>
      </header>
      <ul>
        <li>
          <a
            href="https://www.dosek.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoHome style={iconStyle} /> Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Dositan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub style={iconStyle} /> Github
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/dastanozgeldi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter style={iconStyle} /> Twitter
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/dosek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin style={iconStyle} /> Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
