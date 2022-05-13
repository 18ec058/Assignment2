import React, { useContext } from "react";
import { AppContext } from "../App";
import { PieChart } from 'react-minimal-pie-chart';
import { dividerClasses } from "@mui/material";



const Results = () => {
  const [appData] = useContext(AppContext);

  return (
    <div>
      Results:
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
      ))}
    
    <PieChart
    data={[
    { title: 'One', value: 1, color: '#E38627' },
    { title: 'Two', value: 2, color: '#C13C37' },
    { title: 'Three', value: 3, color: '#4287f5'}
    
  ]}
/>
    </div>
  );
};

export default Results;
