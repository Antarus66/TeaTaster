import React from 'react';
import { useTranslation } from 'react-i18next';
import Label from '../../../UI/Label';
import styles from './AromaListItem.module.css';
import { Aroma } from '../../../../models/aroma/AromaTree';

interface AromaListItemProps {
  aroma: Aroma;
  onClick: () => void;
  className: string;
}

const AromaListItem: React.FC<AromaListItemProps> = ({
  aroma, onClick, className,
}) => {
  const { t } = useTranslation();
  const color = aroma.getColor();
  const name = t(`aromas.${aroma.name}`);
  const labelClasses = [styles.item, className].join(' ');

  return <Label className={labelClasses} backgroundColor={color} onClick={onClick}>{name}</Label>;
};

export default AromaListItem;
