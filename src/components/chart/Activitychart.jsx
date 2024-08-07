import { BarChart } from "@mui/x-charts/BarChart";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState, useRef, useEffect } from "react";
import './ActivityChart.css'

const series1 = [12, 8, 15, 18, 22, 14, 12, 8, 15, 18, 22, 14, 56, 9, 32, 7, 78, 65, 32, 43, 23, 46, 28, 56, 9, 32, 7, 78, 65, 32, 43, 23, 46, 28];

const barChartsParams = {
  series: [
    { data: series1 },
  ],
  height: 300,
};

const ActivityChart = () => {
  const [value, setValue] = useState('weekly');
  const [showList, setShowList] = useState(false);
  const listRef = useRef('');
  useEffect(() => {
    listRef.current.addEventListener('click', () => {
      setShowList(false);
    })
  }, [])
  const handleSelect = (event) => {
    setValue(event.target.textContent)
    handleShow();
  }
  const handleShow = () => {
    setShowList(prev => !prev);
  }
  return <>
    <div className="chart-header">
      <h2 className="chart-name">Activity</h2>
      <div className="chart-dropdown">{value} <ArrowDropDownIcon onClick={handleShow} sx={{ marginTop: '5px' }} />
        <div className={showList ? "listItems" : 'show-none'} onClick={handleSelect}>
          <li>weekly</li>
          <li>monthly</li>
          <li>yearly</li>
        </div>
        <div className={showList ? "overlay" : "show-none"} ref={listRef}></div>
      </div>
    </div>
    <BarChart
      {...barChartsParams}
      series={barChartsParams.series.map((series) => ({
        ...series,
      }))}
      sx={{ marginTop: '-50px' }}
      height={280}
      borderRadius={50}
      colors={[
        "#7295fd",
      ]}
      grid={{ horizontal: true, vertical: false }}
    />
  </>
}
export default ActivityChart;
