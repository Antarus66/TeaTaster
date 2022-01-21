import React from 'react';
import { AromaSchema } from '../aroma-circle/Aroma';
import AromaListItem from './item/AromaListItem';
import styles from './AromaList.module.css';

interface AromaListProps {
  schema: AromaSchema;
  selected: string[];
  onUnselect: (itemName: string) => void;
}

const AromaList: React.FC<AromaListProps> = ({ schema, selected, onUnselect }) => {
  const items = selected.map((itemName: string) => (
    <AromaListItem key={itemName}
                   aromaName={itemName}
                   schema={schema}
                   className={styles.aromaItem}
                   onClick={() => onUnselect(itemName)}
    />
  ));

  return (
    <div className={styles.container}>
      {items}
    </div>
  );
};

export default AromaList;
