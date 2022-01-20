import React, { useEffect, useRef } from 'react';
import Sunburst from 'sunburst-chart';
import data from './d3-data.json';
import styles from './AromaCircle.module.css';

const AromaCircle: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = Sunburst();
    const width = 900;

    if (chartRef.current !== null) {
      myChart.data(data)
        .width(width)
        .height(width)(chartRef.current);
    }
  }, []);

  const onSelect = (e: any) => {
    console.log(e);
  };

  return <div className={styles.chartAnchor} ref={chartRef}/>;
};

export default AromaCircle;
