import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Aroma, AromaSchema } from '../components/degustation/diagram/Aroma';
// import data from '../components/degustation/diagram/d3-data.json';
import aromaAchema from '../aroma-schema.json';

const AromaCircle = dynamic(() => import('../components/degustation/diagram/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const handlePickAroma = (aroma: Aroma) => {
    console.log(aroma.name);
  };

  return <AromaCircle schema={aromaAchema} width={700} onPick={handlePickAroma}/>;
};

export default NewDegustation;
