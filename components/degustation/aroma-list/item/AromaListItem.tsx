import React from 'react';
import { useTranslation } from 'react-i18next';
import { Aroma, AromaSchema } from '../../aroma-circle/Aroma';
import Label from '../../../UI/Label';
import styles from './AromaListItem.module.css';

interface AromaListItemProps {
  aroma: Aroma;
  schema: AromaSchema;
  onClick: () => void;
  className: string;
}

const AromaListItem: React.FC<AromaListItemProps> = ({
  aroma, schema, onClick, className,
}) => {
  const { t } = useTranslation();
  const color = getAromaColor(aroma, schema);
  const name = t(`aromas.${aroma.name}`);
  const labelClasses = [styles.item, className].join(' ');

  return <Label className={labelClasses} backgroundColor={color} onClick={onClick}>{name}</Label>;
};

function getAromaColor(aroma: Aroma, schema: AromaSchema): string {
  return 'lightgray';
}

export default AromaListItem;
