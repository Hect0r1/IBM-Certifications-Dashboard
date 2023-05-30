import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Theme, Header, HeaderName, HeaderGlobalBar, ExpandableSearch, OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { Content } from '@carbon/react';
import { User, Upload, Search } from '@carbon/react/icons';
import {useNavigate} from 'react-router-dom';


import './_dashboard-page.scss';

const DashboardPage = ({ user, setUser }) => {

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };

    const navigate = useNavigate();

    const loginNavigate = () => {
        setUser();
        navigate("/");
    };

    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const chartRef3 = useRef(null);
    const chartRef4 = useRef(null);
    const chartRef5 = useRef(null);
    const chartRef6 = useRef(null);
    const chartRef7 = useRef(null);
    const chartRef8 = useRef(null);
    const chartRef9 = useRef(null);

    useEffect(() => {
        // Configuración y renderizado de la primera gráfica de dona
        if (chartRef1.current) {
            chartRef1.current.destroy();
        }

        const donutChart1 = document.getElementById('donutChart1');
        chartRef1.current = new Chart(donutChart1, {
            type: 'doughnut',
            data: {
                labels: ['Guadalajara', 'Mexico City', 'Vancouver'],
                datasets: [
                    {
                        data: [30, 20, 25],
                        backgroundColor: ['#005d5d', '#1192e8', '#6929c4'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Work Location',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la segunda gráfica de dona
        if (chartRef2.current) {
            chartRef2.current.destroy();
        }

        const donutChart2 = document.getElementById('donutChart2');
        chartRef2.current = new Chart(donutChart2, {
            type: 'doughnut',
            data: {
                labels: ['DevOps', 'Agile', 'Cibersecurity'],
                datasets: [
                    {
                        data: [15, 25, 35],
                        backgroundColor: ['#8300c5', '#001e4a', '#00a29d'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Main Area of Certification',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la gráfica de barras
        if (chartRef3.current) {
            chartRef3.current.destroy();
        }

        const barChart = document.getElementById('barChart');
        chartRef3.current = new Chart(barChart, {
            type: 'bar',
            data: {
                labels: ['2008-2010', '2011-2013', '2014-2016', '2017-2019', '2020-2023'],
                datasets: [
                    {
                        label: 'Dataset',
                        data: [5, 10, 15, 20, 8],
                        backgroundColor: ['#5d0000', '#b3004c', '#00605f', '#007feb', '#8300c5'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Issue Date',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la primera gráfica de porcentaje de completado
        if (chartRef4.current) {
            chartRef4.current.destroy();
        }

        const percentChart1 = document.getElementById('percentChart1');
        chartRef4.current = new Chart(percentChart1, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [
                    {
                        data: [75, 25],
                        backgroundColor: ['#8300c5', '#d3d3d3'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Bar Chart',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la segunda gráfica de porcentaje de completado
        if (chartRef5.current) {
            chartRef5.current.destroy();
        }

        const percentChart2 = document.getElementById('percentChart2');
        chartRef5.current = new Chart(percentChart2, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [
                    {
                        data: [40, 60],
                        backgroundColor: ['#29009e', '#d3d3d3'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Bar Chart',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la tercera gráfica de porcentaje de completado
        if (chartRef6.current) {
            chartRef6.current.destroy();
        }

        const percentChart3 = document.getElementById('percentChart3');
        chartRef6.current = new Chart(percentChart3, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [
                    {
                        data: [90, 10],
                        backgroundColor: ['#007feb', '#d3d3d3'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Bar Chart',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la cuarta gráfica de porcentaje de completado
        if (chartRef7.current) {
            chartRef7.current.destroy();
        }

        const percentChart4 = document.getElementById('percentChart4');
        chartRef7.current = new Chart(percentChart4, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [
                    {
                        data: [80, 20],
                        backgroundColor: ['#00827c', '#d3d3d3'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Bar Chart',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la quinta gráfica de porcentaje de completado
        if (chartRef8.current) {
            chartRef8.current.destroy();
        }

        const percentChart5 = document.getElementById('percentChart5');
        chartRef8.current = new Chart(percentChart5, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [
                    {
                        data: [60, 40],
                        backgroundColor: ['#b3004c', '#d3d3d3'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Bar Chart',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        // Configuración y renderizado de la sexta gráfica de porcentaje de completado
        if (chartRef9.current) {
            chartRef9.current.destroy();
        }

        const percentChart6 = document.getElementById('percentChart6');
        chartRef9.current = new Chart(percentChart6, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [
                    {
                        data: [50, 50],
                        backgroundColor: ['#001e4a', '#d3d3d3'],
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Bar Chart',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
        });
    }, []);

    return (

        <>
            <script>
                window.history.forward();
            </script>
            <Theme theme="g100">
                <Header aria-label="IBM Platform Name">
                    <HeaderName prefix="IBM">
                        <span style={{ fontWeight: 'bold' }}>Certifications Dashboard</span>
                    </HeaderName>
                    <HeaderGlobalBar>
                        <div className="expandable-search">
                            <ExpandableSearch
                                renderIcon={() => <Search size={20} className="search-icon"/>}
                                size="lg"
                                placeholder="Search by Uid"
                                id="search-explandable-1"
                                onChange={() => {}}
                                onKeyDown={() => {}}
                            />
                        </div>
                        <OverflowMenu
                            // onClick={}
                            renderIcon={() => <Upload size={20} />}
                            size="lg"/>
                        <OverflowMenu
                            flipped={true}
                            renderIcon={() => <User size={20}/>}
                            size="lg">
                            <OverflowMenuItem onClick={loginNavigate} itemText="Log out" className="overflow-menu-item"/>
                        </OverflowMenu>
                    </HeaderGlobalBar>
                </Header>
                <Content>
                    <h1>Hello, {user?.email}</h1>
                </Content>
            </Theme>

            <div className="title-container">
                <h1>IBM Certifications Dashboard</h1>
            </div>

            <div className="subtitle-container">
                <h2>Trending Certifications</h2>
            </div>


            <div className="dashboard-container">

                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="donutChart1"></canvas>
                    </div>
                </div>

                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="donutChart2"></canvas>
                    </div>
                </div>

                <div></div>

                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="percentChart1"></canvas>
                    </div>
                </div>

                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="percentChart2"></canvas>
                    </div>
                </div>


                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="barChart"></canvas>
                    </div>
                </div>

                <div></div>
                <div></div>

                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="percentChart3"></canvas>
                    </div>
                </div>
                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="percentChart4"></canvas>
                    </div>
                </div>

                <div></div>
                <div></div>
                <div></div>


                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="percentChart5"></canvas>
                    </div>
                </div>
                <div className="chart-container">
                    <div className="canvas-container">
                        <canvas id="percentChart6"></canvas>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
