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

const ultimasFaturas = [
    { mes: 'Abril', ano: 2024, valor: 1200 },
    { mes: 'Março', ano: 2024, valor: 2800 },
    { mes: 'Fevereiro', ano: 2024, valor: 700 },
    { mes: 'Janeiro', ano: 2024, valor: 2000 },
    { mes: 'Dezembro', ano: 2023, valor: 1700 },
    { mes: 'Novembro', ano: 2023, valor: 900 },
    { mes: 'Outubro', ano: 2023, valor: 1500 },
    { mes: 'Setembro', ano: 2023, valor: 800 },
    { mes: 'Agosto', ano: 2023, valor: 2500 },
    { mes: 'Julho', ano: 2023, valor: 1800 },
    { mes: 'Junho', ano: 2023, valor: 300 },
    { mes: 'Maio', ano: 2023, valor: 1500 }
  ];
  

const labels = ultimasFaturas.reverse().map((ultima) => `${ultima.mes}/${ultima.ano}`);
console.log(labels);
const colors = ['#27cad1', '#85d8dc', '#7bdcd1', '#259887', '#02a5b6', '#008177', '#019482', '#00a0ae', '#41bfaa', '#0095a9', '#008896', '#135c65', '#9ecdc7', '#6fd8d3', '#00acb8'];

const data = {
    labels,
    datasets: [
        {
            label: 'Valor das faturas dos últimos 12 meses',
            data: labels.map((() => Math.floor(Math.random() * 2500))),
            backgroundColor: colors,
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