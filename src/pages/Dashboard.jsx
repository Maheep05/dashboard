import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { PremiumCard } from "../components/PremiumCard";
import { Sidenav } from "../components/Sidenav";
import { Installedapps } from "./Installedapps";
import { Performance } from "../components/Performance";
export function Dashboard() {



    const cardData = [{
        title: "Revenue",
        data: "$56,945",
        change: 45,
        lastChange: 4.6,
    }, {
        title: "Users",
        data: "76.8 %",
        change: -1.7,
        lastChange: 4.6,
    }, {
        title: "New Signups",
        data: "116",
        change: 0.00
    }, {
        title: "Retention",
        data: "12.67 %",
        change: 0.6,
        lastChange: 4.6,
    }]


    return (
        <div className="flex ">
            <Sidenav />
            <div className="w-full md:w-screen bg-[#f2f4f7]">
                <Navbar />
                <div className="flex flex-col gap-4 p-4">
                    <PremiumCard />
                    <div className=" flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                        {cardData.map((cData, index) => (
                            <Card key={index} title={cData.title} data={cData.data} change={cData.change} lastChange={cData.lastChange} />
                        ))}
                    </div>
                    <Performance />
                    <Installedapps />

                </div>
            </div>
        </div>
    )
}