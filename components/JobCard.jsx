import Image from 'next/image';
import styles from '../styles/AboutCard.module.css'

const JobCard = ({ about }) => {
    return (
        <div>
            <div className={styles.card}>
                <div>
                    <Image
                        src={about.img}
                        alt={about.company_name}
                        height={180}
                        width={180}
                    />
                </div>
                <div>
                    <h3>{about.company_name}</h3><br/>
                    <h4>{about.position}</h4>
                    {about.description.map((desc) =>
                        <p><br></br>
                            {desc}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobCard;