import React from 'react';
import styles from './Label.module.css';

interface AromaListItemProps {
  backgroundColor?: string;
  onClick: () => void;
  className?: string;
}

const Label: React.FC<AromaListItemProps> = ({
  backgroundColor = 'lightgray', onClick, className, children,
}) => (
  <div className={`${styles.item} ${className}`}
       style={{ backgroundColor }}
       onClick={onClick}>
    {children}
  </div>
);

export default Label;
