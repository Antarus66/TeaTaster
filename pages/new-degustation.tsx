import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
// import AromaCircle from '../components/degustation/diagram/AromaCircle';
import dynamic from 'next/dynamic';

const AromaCircle = dynamic(() => import('../components/degustation/diagram/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const { t } = useTranslation();

  return (
    <AromaCircle/>
  );
};

export default NewDegustation;
