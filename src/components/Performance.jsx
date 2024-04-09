import ReactApexChart from 'react-apexcharts';


export function Performance() {


    const data= {
        series: [{
            name: 'Instagram',
            data: [180, 250, 190, 150, 270, 109, 260]
        }, {
            name: 'facebook',
            data: [180, 186, 300, 400, 200, 280, 200]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            yaxis: {
                tickAmount: 4, // intervals in y axis
                min: 0, // origin
            }

        },
    };


    return (
        <div className='bg-white shadow-lg rounded-xl'>
            <div>
                <div className='flex justify-between items-center p-6'>
                    <span className='font-semibold text-lg'>Performance</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9D9FA1" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

                </div>
                <hr />
                <div className='p-6'>
                    <ReactApexChart options={data.options} series={data.series} type="area" height={350} />
                </div>
            </div>
        </div>
    )
}




