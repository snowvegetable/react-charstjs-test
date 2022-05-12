import "./App.css";
import { Bar,Line } from "react-chartjs-2"
import {Chart} from "chart.js/auto"
import {BarData} from "./ChartData/BarData"
import {LineData} from "./ChartData/LineData"

function App() {
    return (
        <div className="App">
            <div style={{ width: 700}}>
                <Bar  data={BarData}/>
                <Line data={LineData}/>
            </div>
        </div>
    );
}

export default App;