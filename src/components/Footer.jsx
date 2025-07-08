import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a
        href="https://github.com/furkanssarri"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FaGithub className="footer-icon" /> furkanssarri {currentYear}
      </a>
    </footer>
  );
};

export default Footer;
