import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const NewDegustation: NextPage = () => {
  const { t } = useTranslation();

  return (
    <h2>{t('hello-world')}</h2>
  );
};

export default NewDegustation;
