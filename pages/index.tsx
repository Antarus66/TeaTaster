import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const loremIpsumNumber = 40;
  const longLoremIpsum = loremIpsum.repeat(loremIpsumNumber);
  const placeholder = <p>{longLoremIpsum}</p>;

  return (
    <Layout>
      <h1>Hello world!!!</h1>
      {placeholder}
    </Layout>
  );
};

export default Home;
