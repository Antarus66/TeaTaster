import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Aroma } from '../components/degustation/diagram/Aroma';
import data from '../components/degustation/diagram/d3-data.json';

const AromaCircle = dynamic(() => import('../components/degustation/diagram/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const handlePickAroma = (aroma: Aroma) => {
    console.log(aroma.name);
  };

  return <AromaCircle schema={data} width={900} onPick={handlePickAroma}/>;
};

export default NewDegustation;
