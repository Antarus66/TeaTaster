import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { Snackbar } from '@mui/material';
import { Aroma } from '../components/degustation/aroma-circle/Aroma';
// import data from '../components/degustation/diagram/d3-data.json';
import aromaSchema from '../aroma-schema.json';
import AromaList from '../components/degustation/aroma-list/AromaList';

const AromaCircle = dynamic(() => import('../components/degustation/aroma-circle/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const [pickedAromaNames, setPickedAromaNames] = useState<string[]>([]);
  const [showAlreadyPicked, setShowAlreadyPicked] = useState<boolean>(false);

  const handlePickAroma = useCallback((aroma: Aroma) => {
    setPickedAromaNames((prevList) => {
      if (prevList.includes(aroma.name)) {
        setShowAlreadyPicked(true);
        return prevList;
      }

      return [...prevList, aroma.name];
    });
  }, [setPickedAromaNames, setShowAlreadyPicked]);

  const handleUnpickAroma = (removingAroma: string) => {
    setPickedAromaNames((prevList) => prevList.filter(
      (item) => item !== removingAroma,
    ));
  };

  return (
    <>
      <AromaCircle schema={aromaSchema} width={700} onPick={handlePickAroma}/>
      <AromaList schema={aromaSchema} selected={pickedAromaNames} onUnselect={handleUnpickAroma}/>
      <Snackbar
        open={showAlreadyPicked}
        message="Already here!"
        autoHideDuration={1000}
        onClose={() => setShowAlreadyPicked(false)}
      />
    </>
  );
};

export default NewDegustation;
