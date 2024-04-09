import z from '../assets/z.png';
import meta from '../assets/meta.png';
import vue from '../assets/vue.png';
import figma from '../assets/figma.png';
import angular from '../assets/angular.png';


export function Installedapps() {

    const appList = [

        { img: z, appName: "Zepplin", amount: "686.00", status: 'Active', userID: 114423, joiningMonth: 'October', groupName: "Design" },
        { img: figma, appName: "Figma", amount: "864.00", status: 'Pending', userID: 76223, joiningMonth: 'June', groupName: "Finance" },
        { img: meta, appName: "Meta", amount: "176.00", status: 'Cancelled', userID: 89453, joiningMonth: 'March', groupName: "Coding" },
        { img: angular, appName: "Angular", amount: "49.00", status: 'Active', userID: 11467, joiningMonth: 'February', groupName: "Marketing" },
        { img: vue, appName: "Vue", amount: "999.00", status: 'Active', userID: 67385, joiningMonth: 'October', groupName: "Finance" },
    ]
    return (
        <div className="bg-white shadow-xl overflow-x-auto  rounded-xl p-6">

            <div className="flex items-center py-2 justify-between">
                <h1 className="font-semibold text-2xl">Installed apps</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9D9FA1" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </div>

            <hr />

            <div className=" py-2">
               <div className="overflow-x-auto">
               <table className="md:w-full">
                    <colgroup>
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                    </colgroup>
                    <thead className="text-[#5F6980] overflow-x-auto bg-[#F9FAFB]">
                        <tr>
                            <th className="md:px-3 px-10 py-[10px] text-left whitespace-nowrap text-sm font-medium rounded-l" colSpan="1">Source</th>
                            <th className="md:px-3 px-20 py-[10px] whitespace-nowrap text-left text-sm font-medium" colSpan="1">Amount</th>
                            <th className="px-6 py-[10px] whitespace-nowrap text-left text-sm font-medium" colSpan="1">Status</th>
                            <th className="md:px-3 px-10 py-[10px] whitespace-nowrap text-left text-sm font-medium" colSpan="1">User ID</th>
                            <th className="px-8 py-[10px] whitespace-nowrap text-right text-sm font-medium rounded-r" colSpan="1">Joined</th>
                            <th className="px-8 py-[10px] whitespace-nowrap text-right text-sm font-medium rounded-r" colSpan="1">Group</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white  divide-[#E6E6E6]">
                        {appList.map((app) => (
                            <tr key={app.userID} className="text-sm  relative border-b-2 border-gray-200">
                                <td className="  whitespace-nowrap text-black font-medium">
                                    <div className="flex  items-center ">
                                        <img src={app.img} alt="" />
                                        <span className='text-sm '>{app.appName}</span>
                                    </div>
                                </td>
                                <td className="md:px-3 px-20 py-[10px] whitespace-nowrap text-[#5F6980]">{app.amount}</td>


                                <td className={`py-[10px]  whitespace-nowrap flex items-center justify-center my-10 ${app.status === 'Active' ? 'text-[#20C997] bg-[#DCFFF5] font-semibold border-2 rounded-xl h-2 w-20 border-[#DCFFF5]' : app.status === 'Pending' ? 'text-[#FD7E14]  font-semibold border-2 rounded-xl h-2 w-20 bg-[#FFEAD8] border-[#FFEAD8]' : 'text-[#5F6980]  border-2  font-semibold rounded-xl h-2 w-20 bg-[#F2F4F7] border-[#F2F4F7]'}`}>
                                    {app.status}
                                </td>



                                <td className="md:px-3 px-10 py-[10px] whitespace-nowrap text-[#5F6980]">{app.userID}</td>
                                <td className="px-8 py-[10px] whitespace-nowrap text-[#5F6980] text-right ">{app.joiningMonth}</td>
                                <td className="px-8 py-[10px] whitespace-nowrap text-[#5F6980] text-right ">{app.groupName}</td>
                                <span className=" border-b-2 border-gray-700"></span>
                            </tr>
                        ))}
                    </tbody>

                </table>
               </div>
                    <div className='flex py-6 flex-row gap-4 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>

                        <span>1 / 15</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </div>

            </div>
        </div>
    )
}