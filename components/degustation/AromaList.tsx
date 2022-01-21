import React from 'react';
import { Stack } from '@mui/material';
import { Aroma, AromaSchema } from './aroma-circle/Aroma';
import AromaListItem from './AromaListItem';

interface AromaListProps {
  schema: AromaSchema;
  selected: Aroma[];
  onUnselect: (aroma: Aroma) => void;
}

const AromaList: React.FC<AromaListProps> = ({ schema, selected, onUnselect }) => {
  const getUnselectItemHandler = (item: Aroma) => () => onUnselect(item);

  const items = selected.map((item: Aroma) => ( // todo: make cursor pointer with styled components
    <AromaListItem key={item.name}
                   aroma={item}
                   schema={schema}
                   onClick={getUnselectItemHandler(item)}
    />
  ));

  // todo: change the stack to a div
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      {items}
    </Stack>
  );
};

export default AromaList;
