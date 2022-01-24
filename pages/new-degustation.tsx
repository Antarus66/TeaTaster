import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useCallback, useMemo, useState } from 'react';
import { Snackbar } from '@mui/material';
// import data from '../components/degustation/diagram/d3-data.json';
import aromaSchema from '../aroma-schema.json';
import AromaList from '../components/degustation/aroma-list/AromaList';
import { Aroma, AromaTree } from '../models/aroma/AromaTree';
import { RawAromaTree } from '../models/aroma/RawAromaTree';

const AromaCircle = dynamic(() => import('../components/degustation/aroma-circle/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => {
  const [pickedAromas, setPickedAromas] = useState<Aroma[]>([]);
  const [showAlreadyPicked, setShowAlreadyPicked] = useState<boolean>(false);

  const aromaTree = useMemo(
    () => new AromaTree(aromaSchema as RawAromaTree),
    [aromaSchema],
  );

  const handlePickAroma = useCallback((newAroma: Aroma) => {
    setPickedAromas((prevList) => {
      if (prevList.find((aroma) => aroma.id === newAroma.id)) {
        setShowAlreadyPicked(true);
        return prevList;
      }

      return [...prevList, newAroma];
    });
  }, [setPickedAromas, setShowAlreadyPicked]);

  const handleUnpickAroma = (removingAroma: Aroma) => {
    setPickedAromas((prevList) => prevList.filter(
      (item) => item.id !== removingAroma.id,
    ));
  };

  return (
    <>
      <AromaCircle aromaTree={aromaTree} width={700} onPick={handlePickAroma}/>
      <AromaList selected={pickedAromas} onUnselect={handleUnpickAroma}/>
      <Snackbar
        open={showAlreadyPicked}
        message="This aroma is already here!"
        autoHideDuration={1000}
        onClose={() => setShowAlreadyPicked(false)}
      />
    </>
  );
};

export default NewDegustation;
