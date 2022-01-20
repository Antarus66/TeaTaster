import React, { useEffect, useRef } from 'react';
import Sunburst, { Node } from 'sunburst-chart';
import * as d3 from 'd3';
import { RGBColor } from 'd3-color';
import styles from './AromaCircle.module.css';
import { Aroma, AromaSchema } from './Aroma';

interface AromaCircleProps {
  width: number;
  onPick: (aroma: Aroma) => void;
  schema: AromaSchema;
}

const AromaCircle: React.FC<AromaCircleProps> = ({ width, onPick, schema }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current !== null) {
      createChart(schema, chartRef.current, width, onPick);
    }
  }, []);

  return <div className={styles.chartAnchor} ref={chartRef}/>;
};

function createChart(
  schema: AromaSchema,
  anchor: HTMLDivElement,
  width: number,
  onPick: (aroma: Aroma) => void,
) {
  const myChart = Sunburst();

  myChart.data(schema as Node)
    .excludeRoot(true)
    .radiusScaleExponent(1.7)
    .labelOrientation('radial')
    .color(findNodeColor)
    // @ts-ignore - forcing the same segments size for leafs
    .size((node: Node): number | null => (node.children?.length ? null : 1))
    .onClick(nodeClickHandler)
    .width(width)
    .height(width)(anchor);

  function nodeClickHandler(node: Node) {
    if (!node) {
      return;
    }

    if (node.children?.length) {
      myChart.focusOnNode(node);
      return;
    }

    onPick({
      name: node.name as string,
    });
  }
}

function findNodeColor(node: Node) {
  if (node.color) {
    return node.color;
  }

  if (node.__dataNode?.parent) {
    const parentColor: string = findNodeColor(node.__dataNode.parent.data);
    const d3ParentColor = d3.color(parentColor) as RGBColor;
    d3ParentColor.opacity = 0.6;

    return d3ParentColor.toString();
  }

  return 'lightgrey';
}

export default AromaCircle;
