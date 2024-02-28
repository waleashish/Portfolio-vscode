import styles from '../styles/ProjectCard.module.css';
import GithubIcon from '../components/icons/GithubIcon';
import PencilIcon from '../components/icons/PencilIcon'

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.cta}>
        <div>
          {project.scholar && (
            <a
              href={project.scholar}
              target="_blank"
              rel="noopener noreferrer">
              <PencilIcon height={20} width={20} className={styles.icon} />
            </a>
          )}
        </div>
        <div>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer">
              <GithubIcon height={20} width={20} className={styles.icon} />
            </a>
          )}
        </div>
        {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.underline}>
          Demo
        </a>
        )}
        {project.pypi && (
        <a
          href={project.pypi}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.underline}>
          PyPi
        </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
