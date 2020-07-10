import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

import GlobalStyles from './global';

import { Container, ChartContainer } from './styles';



const barData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [
    {
      label: 'Pedidos Anuais',
      backgroundColor: 'rgba(25,99,132,0.2)',
      borderColor: 'rgba(25,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(25,99,132,0.4)',
      hoverBorderColor: 'rgba(25,99,132,1)',
      data: [12, 50, 80, 72, 56],
    },
    {
      label: 'Vendas Anuais',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [15, 59, 85, 75, 56],
    },
  ],
};

const weekBarData = {
  labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  datasets: [
    {
      label: 'Pedidos Semanais',
      backgroundColor: 'rgba(25,99,132,0.2)',
      borderColor: 'rgba(25,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(25,99,132,0.4)',
      hoverBorderColor: 'rgba(25,99,132,1)',
      data: [15, 59, 85, 75, 56, 55, 40],
    },
    {
      label: 'Vendas Semanais',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,0.2)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,0.4)',
      data: [15, 59, 85, 75, 56, 55, 40],
    },
  ],
};

const lineData = {
  labels: [1, 2,3,4,5,6,7,8,9, 10, 11,12,13,14,15,16,17,18,19, 20, 21,22,23,24,25,26,27,28,29, 30],
  datasets: [
    {
      label: 'Vendas Mensais',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0,23,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(50,122,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6,5, 5,9, 8,0, 8,1, 5,6, 5,5, 4,0,2,3,4,5,6,7,8,2,3,4,5,6,7,8,9,2],
    },
  ],
};

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <ChartContainer>
          <Bar
            data={barData}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </ChartContainer>

        <ChartContainer>
          <Line data={lineData} />
        </ChartContainer>

        <ChartContainer>
          <Bar
            data={weekBarData}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </ChartContainer>
      </Container>
    </>
  );
}

