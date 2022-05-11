import { useState } from "react";
import BarChart from "./components/BarChart";
import "./App.css";
import { UserData } from "./Data";

function App() {
    const [userData, setUserData] = useState({
        // labels: UserData.map((data) => data.year),
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: "Users Gained",
                // data: UserData.map((data) => data.userGain),
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99,  132, 0.2)',
                    'rgba(54,  162, 235, 0.2)',
                    'rgba(255, 206, 86,  0.2)',
                    'rgba(75,  192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99,  132, 1)',
                    'rgba(54,  162, 235, 1)',
                    'rgba(255, 206, 86,  1)',
                    'rgba(75,  192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth:3,
            },
        ],
    });


    return (
        <div className="App">
            <div style={{ width: 700}}>
                <BarChart chartData={userData} />
            </div>
        </div>
    );
}

export default App;