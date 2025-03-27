import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttendanceChart = () => {
    const data = {
        labels: ["Abhishek", "Benedict", "Rohinth", "Trivikram"],
        datasets: [
            {
                label: "Attendance %",
                data: [85, 92, 78, 95], // Example data
                backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722"],
            },
        ],
    };

    return (
        <div className="card p-4 shadow mt-3">
            <h4 className="text-center">Attendance Overview</h4>
            <Bar data={data} />
        </div>
    );
};

export default AttendanceChart;
