import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

export default function ImcGraphics() {
  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'IMC',
        data: [],
        tension: 0.5,
        fill: true,
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(255, 99, 132)',
        pointBackgroundColor: 'rgba(255, 99, 132)',
        borderWidth: 0.1 ,
      }
    ]
  });

  const calcularIMC = () => {
    const estaturaMetros = estatura / 100;
    const imc = peso / (estaturaMetros * estaturaMetros);
    return imc.toFixed(2);
  };

  const getIMCColor = (imc) => {
    if (imc < 18.5) {
      return 'rgba(0, 123, 255)';
    } else if (imc >= 18.5 && imc < 25) {
      return 'rgba(40, 167, 69)';
    } else if (imc >= 25 && imc < 30) {
      return 'rgba(255, 193, 7)';
    } else {
      return 'rgba(220, 53, 69)';
    }
  };

  const updateData = () => {
    const newData = [...data.datasets[0].data];
    const imc = parseFloat(calcularIMC());
    newData.push(imc);
    const newLabels = [...data.labels];
    newLabels.push(`Peso ${data.labels.length + 1}`);
    setData({
      ...data,
      labels: newLabels,
      datasets: [
        {
          ...data.datasets[0],
          data: newData,
          backgroundColor: newData.map((imcValue) => getIMCColor(imcValue))
        }
      ]
    });
  };

  const handleEstaturaChange = (event) => {
    setEstatura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  return (
    <div className='flex justify-center h-96'>
    <div className='m-8 flex flex-col'>
      <div className='flex flex-col'>
        <label className='text-dark-green'>Estatura (cm):</label>
        <input className='w-24 border border-2 border-fluorescent-green text-center focus:outline-none rounded-lg' type="number" value={estatura} onChange={handleEstaturaChange} />
      </div>
      <div className='flex flex-col '>
        <label className='text-dark-green'>Peso (kg):</label>
        <input className='w-24 border border-2 border-fluorescent-green text-center focus:outline-none rounded-lg' type="number" value={peso} onChange={handlePesoChange} />
      </div>
      <button className='text-dark-green m-4 border border-2 border-fluorescent-green rounded-lg border-t-0 border-r-0 border-l-0' onClick={updateData}>Calcular IMC y Actualizar Gráfico</button>
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
    </div>
  );
}
