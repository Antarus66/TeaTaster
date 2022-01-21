import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Aroma, AromaSchema } from '../components/degustation/aroma-circle/Aroma';
// import data from '../components/degustation/diagram/d3-data.json';
import aromaAchema from '../aroma-schema.json';
import AromaList from '../components/degustation/AromaList';

const AromaCircle = dynamic(() => import('../components/degustation/aroma-circle/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const [pickedAroma, setPickedAroma] = useState<Aroma[]>([]);

  const handlePickAroma = (aroma: Aroma) => {
    setPickedAroma((prevList) => ([...prevList, aroma]));
  };

  const handleUnpickAroma = (aroma: Aroma) => {
    console.log('unpick'); // todo: add unpicking logic
  };

  return (
    <div>
      <AromaCircle schema={aromaAchema} width={700} onPick={handlePickAroma}/>
      <AromaList schema={aromaAchema} selected={pickedAroma} onUnselect={handleUnpickAroma}/>
    </div>
  );
};

export default NewDegustation;
