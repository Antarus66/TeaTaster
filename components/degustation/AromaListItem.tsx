import React from 'react';
import { useTranslation } from 'react-i18next';
import { Aroma, AromaSchema } from './aroma-circle/Aroma';
import Label from '../UI/Label';

interface AromaListItemProps {
  aroma: Aroma;
  schema: AromaSchema;
  onClick: () => void;
}

const AromaListItem: React.FC<AromaListItemProps> = ({ aroma, schema, onClick }) => {
  const { t } = useTranslation();
  const color = getAromaColor(aroma, schema);
  const name = t(`aromas.${aroma.name}`);

  return <Label backgroundColor={color} onClick={onClick}>{name}</Label>;
};

export default AromaListItem;

function getAromaColor(aroma: Aroma, schema: AromaSchema): string {
  return 'lightgray';
}
