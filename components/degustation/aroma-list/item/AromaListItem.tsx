import React from 'react';
import { useTranslation } from 'react-i18next';
import { AromaSchema } from '../../aroma-circle/Aroma';
import Label from '../../../UI/Label';
import styles from './AromaListItem.module.css';

interface AromaListItemProps {
  aromaName: string;
  schema: AromaSchema;
  onClick: () => void;
  className: string;
}

const AromaListItem: React.FC<AromaListItemProps> = ({
  aromaName, schema, onClick, className,
}) => {
  const { t } = useTranslation();
  const color = getAromaColor(aromaName, schema);
  const name = t(`aromas.${aromaName}`);
  const labelClasses = [styles.item, className].join(' ');

  return <Label className={labelClasses} backgroundColor={color} onClick={onClick}>{name}</Label>;
};

function getAromaColor(aromaName: string, schema: AromaSchema): string {
  return 'lightgray';
}

export default AromaListItem;
