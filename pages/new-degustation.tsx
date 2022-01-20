import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Aroma } from '../components/degustation/diagram/AromaSchema';

const AromaCircle = dynamic(() => import('../components/degustation/diagram/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const handlePickAroma = (aroma: Aroma) => {
    console.log(aroma.name);
  };

  return <AromaCircle width={900} onPick={handlePickAroma}/>;
};

export default NewDegustation;
