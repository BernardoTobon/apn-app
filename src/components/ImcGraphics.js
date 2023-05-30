import { Line } from "react-chartjs-2"
import {
    Chart as chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ToolTip,
    Legend,
    Filler,
} from 'chart.js';

chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ToolTip,
    Legend,
    Filler
)

var beneficios = [0, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
var meses = ["enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre"];

var data = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            tension: 0.5,
            fill: true,
            borderColor: 'rgba(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132,0.5)',
            pointRadius: 5,
            pointBorderCOlor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        }
    ]
}

export default function ImcGraphics() {
    return <Line data={data} options={opions}/>
}