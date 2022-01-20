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
        .excludeRoot(true)
        .radiusScaleExponent(1.7)
        .labelOrientation('radial')
        .color((d) => {
          if (d.color) {
            return d.color;
          }

          return 'lightgrey';
        })
        .width(width) // todo: move out to props
        .height(width)(chartRef.current);
    }
  }, []);

  const onSelect = (e: any) => {
    console.log(e);
  };

  return <div className={styles.chartAnchor} ref={chartRef}/>;
};

export default AromaCircle;
