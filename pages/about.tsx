import { NextPage } from 'next';
import { About } from '../components/about/About';
import { Layout } from '../components/layout/Layout';

const AboutPage: NextPage = () => (
  <Layout
    title="o mnie"
    description="Informacje o mnie. Dowiedz się w czym programuje i czym się zajmuje."
  >
    <About />
  </Layout>
);

export default AboutPage;
