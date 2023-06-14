import { Chart } from "chart.js/auto";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function ImcGraphics() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setIMC] = useState(0);

  useEffect(() => {
    const heightMeters = height / 100;
    const newIMC = weight / (heightMeters * heightMeters);
    setIMC(newIMC.toFixed(2));
  }, [height, weight]);

  const getIMCColor = () => {
    if (imc < 18.5) {
      return "rgba(0, 123, 255)";
    } else if (imc >= 18.5 && imc < 25) {
      return "rgba(40, 167, 69)";
    } else if (imc >= 25 && imc < 30) {
      return "rgba(255, 193, 7)";
    } else {
      return "rgba(220, 53, 69)";
    }
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleSave = () => {
    
    console.log("IMC guardado:", imc);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 m-2">
        <div className="m-10">
          <div className="flex flex-col items-center">
            <label className="text-dark-green">Estatura (cm)</label>
            <input
              className="w-24 border border-2 border-fluorescent-green text-center focus:outline-none rounded-lg"
              type="number"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-dark-green">Peso (kg)</label>
            <input
              className="w-24 border border-2 border-fluorescent-green text-center focus:outline-none rounded-lg"
              type="number"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-dark-green m-4 border border-2 border-fluorescent-green rounded-lg p-1"
              onClick={handleSave}
            >
              Guardar
            </button>
          </div>
        </div>
        <div className="flex justify-center h-96 p-4 border border-2 border-fluorescent-green">
          <Bar
            data={{
              labels: ["IMC"],
              datasets: [
                {
                  data: [imc],
                  backgroundColor: [getIMCColor()],
                  tension: 0.5,
                  fill: true,
                  borderColor: "rgba(255, 99, 132)",
                  pointRadius: 5,
                  pointBorderColor: "rgba(255, 99, 132)",
                  pointBackgroundColor: "rgba(255, 99, 132)",
                  borderWidth: 0.1,
                  barThickness: 50,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
