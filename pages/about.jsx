import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './ASHISH_WALE_RESUME.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Pursuing Masters in Computer Science @ <a >Arizona State University</a>.</li>
        {/* <li><span role="img" aria-label="graduate-hat">🎓</span> Conducting research on <b>AI</b> and <b>Computer Vision</b> @ <a href='https://aicip.github.io/research.htm'>AICIP Lab</a>.</li> */}
        {/* <li><span role="img" aria-label="laptop">💻</span> Currently building Masked Image Modeling models for Remote Sensing data. </li> */}
      </ul>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="ASHISH_WALE_RESUME.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} renderMode="svg"/>
          {/* <Page pageIndex={1} renderMode="svg"/> */}
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
