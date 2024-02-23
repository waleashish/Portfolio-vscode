import ProjectCard from '../components/ProjectCard';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ misc_projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br/>
      {/* <center><h4>Machine Learning</h4></center>
      <hr/> */}
      {/* <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
      {/* <br/>
      <center><h4>Bots</h4></center>
      <hr/> */}
      {/* <div className={styles.container}>
        {bots_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
      {/* <br/>
      <center><h4>PyPi Packages</h4></center>
      <hr/> */}
      {/* <div className={styles.container}>
        {pypi_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
      <center><h4>Projects Overview</h4></center>
      <br/>
      <hr/>
      <div className={styles.container}>
        {misc_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  // const ml_projects = getMLProjects();
  // const bots_projects = getBotsProjects();
  // const pypi_projects = getPyPiProjects();
  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', misc_projects },
  };
}

export default ProjectsPage;
