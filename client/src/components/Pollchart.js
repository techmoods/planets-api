import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 20, 21],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(1, 159, 64, 0.2)',
        'rgba(172, 99, 255, 0.2)',
        'rgba(255, 211, 99, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(1, 159, 64, 1)',
        'rgba(172, 99, 255, 1)',
        'rgba(255, 211, 99, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

class Pollchart extends React.Component {

  render() {
    return (
        <div className=''>
            <Doughnut data={data} />
        </div>
    );
  }
}

export default Pollchart