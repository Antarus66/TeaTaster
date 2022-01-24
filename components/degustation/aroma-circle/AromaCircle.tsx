import React, { useEffect, useRef } from 'react';
import Sunburst, { Node } from 'sunburst-chart';
import * as d3 from 'd3';
import { RGBColor } from 'd3-color';
import { useTranslation } from 'react-i18next';
import styles from './AromaCircle.module.css';
import { Aroma, AromaTree } from '../../../models/aroma/AromaTree';

interface AromaCircleProps {
  width: number;
  onPick: (aroma: Aroma) => void;
  aromaTree: AromaTree;
}

const AromaCircle: React.FC<AromaCircleProps> = ({ width, onPick, aromaTree }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (chartRef.current !== null) {
      chartRef.current.innerHTML = '';
      createChart(chartRef.current);
    }
  });

  function createChart(
    anchor: HTMLDivElement,
  ) {
    const myChart = Sunburst();

    myChart.data(aromaTree)
      .excludeRoot(true)
      .radiusScaleExponent(1.2)
      .labelOrientation('radial')
      // @ts-ignore - the callback returns instance of the passed tree node
      .color(findNodeColor)
      .label((node: Node) => t(`aromas.${node.name}`))
      .maxLevels(2)
      // @ts-ignore - forcing the same segments size for leafs
      .size((node: Node): number | null => (node.children?.length ? null : 1))
      // @ts-ignore - the callback returns instance of the passed tree node
      .onClick(nodeClickHandler)
      .width(width)
      .height(width)(anchor);

    function nodeClickHandler(node: Aroma | AromaTree) {
      if (!node) {
        return;
      }

      // zoom only on categories
      if (node instanceof AromaTree) {
        myChart.focusOnNode(node);
        return;
      }

      onPick(node);
    }
  }

  return <div className={styles.chartAnchor} ref={chartRef} style={{ width }}/>;
};

function findNodeColor(node: Aroma | AromaTree) {
  if ((node instanceof AromaTree) && node.color) {
    return node.color;
  }

  const parentColor = node.getColor();
  const d3ParentColor = d3.color(parentColor) as RGBColor;

  if (node instanceof AromaTree) {
    d3ParentColor.opacity = 0.8;
  } else {
    d3ParentColor.opacity = 0.6;
  }

  return d3ParentColor.toString();
}

export default React.memo(AromaCircle);
