import React from 'react';
import AromaListItem from './item/AromaListItem';
import styles from './AromaList.module.css';
import { Aroma } from '../../../models/aroma/AromaTree';

interface AromaListProps {
  selected: Aroma[];
  onUnselect: (aroma: Aroma) => void;
}

const AromaList: React.FC<AromaListProps> = ({ selected, onUnselect }) => {
  const items = selected.map((selectedAroma: Aroma) => (
    <AromaListItem key={selectedAroma.id}
                   aroma={selectedAroma}
                   className={styles.aromaItem}
                   onClick={() => onUnselect(selectedAroma)}
    />
  ));

  return (
    <div className={styles.container}>
      {items}
    </div>
  );
};

export default AromaList;
