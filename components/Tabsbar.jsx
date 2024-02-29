import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="Home.jsx" path="/" />
      <Tab icon="/java_icon.svg" filename="WorkExperience.java" path="/about" />
      <Tab icon="/py_icon.svg" filename="Projects.py" path="/projects" />
      {/* <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" /> */}
      <Tab icon="/yml_icon.svg" filename="Contact.yml" path="/contact" />
    </div>
  );
};

export default Tabsbar;
