import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Software</h1>
          {/* <h1>Development</h1> */}
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Ashish Wale</h1>
            <h6 className={styles.bio}>Software Development Engineer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                    Software Development
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      Java
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Python
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Javascript
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='APIs' className='APIs'>
                      APIs
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Apache-Kafka
                    </span>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      Data-Pipelines
                    </span>
                    <span key='MLOps' className='MLOps'>
                      PyTorch
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      TensorFlow
                    </span>
                    <span key='Bots' className='Bots'>
                      NLP
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpeg"
                width={300}
                height={290}
                alt="Ashish' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
