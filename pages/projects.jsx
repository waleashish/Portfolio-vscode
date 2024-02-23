import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br/>
      {/* <center><h4>Machine Learning</h4></center>
      <br/>
      <hr/>
      <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/> */}
      <center><h4>Projects Overview</h4></center>
      <br/>
      <hr/>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  // const ml_projects = getMLProjects();
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
