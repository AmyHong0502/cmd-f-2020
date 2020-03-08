import React from 'react';
import { Chart } from 'react-charts';

export default function ProgressChart({ activeSeriesIndex }) {
  const colors = ['#3f51b5', 'orange'];
  const data = React.useMemo(
    () => [
      {
        label: 'Points',
        data: [
          [0, 10],
          [1, 20],
          [2, 40],
          [3, 20],
          [4, 70]
        ]
      },
      {
        label: 'Coins',
        data: [
          [0, 30],
          [1, 10],
          [2, 50],
          [3, 60],
          [4, 40]
        ]
      }
    ],
    []
  );

  const getSeriesStyle = React.useCallback(
    series => ({
      color: `${colors[series.index]}`,
      opacity:
        activeSeriesIndex > -1
          ? series.index === activeSeriesIndex
            ? 1
            : 0.3
          : 1
    }),
    [activeSeriesIndex]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  );

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Chart data={data} axes={axes} getSeriesStyle={getSeriesStyle} tooltip />
    </div>
  );
}
