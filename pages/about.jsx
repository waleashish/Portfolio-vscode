import styles from '../styles/AboutPage.module.css'
import { getJobs } from './api/jobs'
import { getInternships } from './api/internships'
import JobCard from '../components/JobCard';

const AboutPage = ({ fullTimes, internships }) => {
  return (
    <div className={styles.container}>
      <h3>Work Experience</h3>
      <br/>
      <center><h4>Full Time</h4></center>
      <br/>
      <hr/>
      {fullTimes.map((fullTime =>
        <div className={styles.content}>
          <JobCard key={fullTime.id} about={fullTime}/>
        </div>
      ))}
      <br/>
      <center><h4>Internship</h4></center>
      <br/>
      <hr/>
      {internships.map((internship =>
        <div className={styles.content}>
          <JobCard key={internship.id} about={internship}/>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const fullTimes = getJobs();
  const internships = getInternships();
  return {
    props: { title: 'Work Experience', fullTimes, internships },
  };
}

export default AboutPage;
