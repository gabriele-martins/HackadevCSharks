import React from "react";

import styles from "./index.module.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1, 
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
   
        },
        
    },
};



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September', 'October', 'November', 'December'];
const data = {
    labels,
    datasets: [
        {
            label: 'Valor das faturas dos últimos 12 meses',
            data: labels.map((() => Math.floor(Math.random() * 2500))),
            backgroundColor: '#00efc5',
            borderColor: '#121214',
            borderWidth: 1
        }
    ],
};

export function Grafico(){
    return(
        <div className={styles.graficoDiv}>
            <Bar className={styles.grafico} options={options} data={data} />
        </div>
    )
}