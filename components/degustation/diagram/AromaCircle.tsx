import React, { useEffect, useRef } from 'react';
import Sunburst, { Node } from 'sunburst-chart';
import * as d3 from 'd3';
import { RGBColor } from 'd3-color';
import { useTranslation } from 'react-i18next';
import styles from './AromaCircle.module.css';
import { Aroma, AromaSchema } from './Aroma';

interface AromaCircleProps {
  width: number;
  onPick: (aroma: Aroma) => void;
  schema: AromaSchema;
}

const AromaCircle: React.FC<AromaCircleProps> = ({ width, onPick, schema }) => {
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

    myChart.data(schema as Node)
      .excludeRoot(true)
      .radiusScaleExponent(1.2)
      .labelOrientation('radial')
      .color(findNodeColor)
      .label((node: Node) => t(`aromas.${node.name}`))
      .maxLevels(2)
      // @ts-ignore - forcing the same segments size for leafs
      .size((node: Node): number | null => (node.children?.length ? null : 1))
      .onClick(nodeClickHandler)
      .width(width)
      .height(width)(anchor);

    function nodeClickHandler(node: Node) {
      if (!node) {
        return;
      }

      // zoom only on parent nodes
      if (node.children?.length) {
        myChart.focusOnNode(node);
        return;
      }

      onPick({
        name: node.name as string,
      });
    }
  }

  return <div className={styles.chartAnchor} ref={chartRef} style={{ width }}/>;
};

function findNodeColor(node: Node) {
  if (node.color) {
    return node.color;
  }

  if (node.__dataNode?.parent) {
    const parentColor: string = findNodeColor(node.__dataNode.parent.data);
    const d3ParentColor = d3.color(parentColor) as RGBColor;

    if (node.children?.length) {
      d3ParentColor.opacity = 0.8;
    } else {
      d3ParentColor.opacity = 0.6;
    }

    return d3ParentColor.toString();
  }

  return 'lightgrey';
}

export default AromaCircle;
