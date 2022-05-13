import React, { useContext } from "react";
import { AppContext } from "../App";
import { PieChart } from 'react-minimal-pie-chart';


const Results = () => {
  const [appData] = useContext(AppContext);

  return (
    <div>
      Results:
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
      ))}
    </div>
  );
};

<PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;

export default Results;
