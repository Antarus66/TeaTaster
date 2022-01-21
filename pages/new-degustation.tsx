import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Aroma } from '../components/degustation/aroma-circle/Aroma';
// import data from '../components/degustation/diagram/d3-data.json';
import aromaSchema from '../aroma-schema.json';
import AromaList from '../components/degustation/aroma-list/AromaList';

const AromaCircle = dynamic(() => import('../components/degustation/aroma-circle/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const [pickedAromaNames, setPickedAromaNames] = useState<string[]>([]);

  const handlePickAroma = (aroma: Aroma) => {
    setPickedAromaNames((prevList) => {
      if (prevList.includes(aroma.name)) {
        // todo: show a toaster "Already here!"
        return prevList;
      }

      return [...prevList, aroma.name];
    });
  };

  const handleUnpickAroma = (removingAroma: string) => {
    setPickedAromaNames((prevList) => prevList.filter(
      (item) => item !== removingAroma,
    ));
  };

  return (
    <div>
      <AromaCircle schema={aromaSchema} width={700} onPick={handlePickAroma}/>
      <AromaList schema={aromaSchema} selected={pickedAromaNames} onUnselect={handleUnpickAroma}/>
    </div>
  );
};

export default NewDegustation;
