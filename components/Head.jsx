import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ashish Wale's Profolio."
      />
      <meta
        name="keywords"
        content="ashish wale, ashish, wale, software engineer, software development engineer, machine learning engineer, ashish wale portfolio"
      />
      <meta property="og:title" content="Ashish Wale's Portfolio" />
      <meta
        property="og:description"
        content="Ashish Wale's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://waleashish.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Ashish Wale',
};
