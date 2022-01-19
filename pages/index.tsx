import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const loremIpsumNumber = 40;
  const longLoremIpsum = loremIpsum.repeat(loremIpsumNumber);
  const placeholder = <p>{longLoremIpsum}</p>;

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('ua');
  }, []);

  return (
    <Layout>
      <h1>{t('hello-world')}</h1>
      {placeholder}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    session: await getSession(ctx),
  },
});

export default Home;
