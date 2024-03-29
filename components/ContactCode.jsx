import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'ashishwale747@gmail.com',
    href: 'mailto:ashishwale747@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/ashish-wale',
    href: 'https://www.linkedin.com/in/ashish-wale/',
  },
  {
    social: 'GitHub',
    link: 'github.com/waleashish',
    href: 'https://github.com/waleashish',
  },
  {
    social: 'Medium',
    link: 'medium.com/waleashish',
    href: 'https://medium.com/@waleashish',
  },
  {
    social: 'Portfolio',
    link: '(this)',
    href: 'https://waleashish.vercel.app/'
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       {/* <p className={styles.line}>
       tag: <a>production</a>
        </p> */}
      <p className={styles.line}>
        <span>waleashish</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
