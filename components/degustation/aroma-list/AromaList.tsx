import React from 'react';
import { Aroma, AromaSchema } from '../aroma-circle/Aroma';
import AromaListItem from './item/AromaListItem';
import styles from './AromaList.module.css';

interface AromaListProps {
  schema: AromaSchema;
  selected: Aroma[];
  onUnselect: (aroma: Aroma) => void;
}

const AromaList: React.FC<AromaListProps> = ({ schema, selected, onUnselect }) => {
  const items = selected.map((item: Aroma) => ( // todo: make cursor pointer with styled components
    <AromaListItem key={item.name}
                   aroma={item}
                   schema={schema}
                   className={styles.aromaItem}
                   onClick={() => onUnselect(item)}
    />
  ));

  // todo: change the stack to a div
  return (
    <div className={styles.container}>
      {items}
    </div>
  );
};

export default AromaList;
