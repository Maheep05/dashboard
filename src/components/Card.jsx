export function Card({ title, data, change, lastChange }) {
    const colorClass = change < 0 ? "text-[#DC3545] border-[#FFE0E3] bg-[#FFE0E3]" : change === 0 ? "text-[#5F6980] border-[#F2F4F7] bg-[#F2F4F7]" : "text-[#20C997] border-[#DCFFF5] bg-[#DCFFF5]";

    return (
        <div className="h-40 shadow-md mx-1 md:mx-0 md:w-72 rounded-xl p-6 flex flex-col justify-between bg-white">
            <div className="flex flex-col gap-1">
                <h1 className="text-[#5F6980]">{title}</h1>
                 <h1 className="text-black font-semibold text-2xl">{data}</h1>
            </div>
           
                <div className="flex flex-row gap-4 items-center">
                   {change !== undefined && <span className={`border-2 rounded-3xl px-2 text-xs ${colorClass}`}>{change}%</span>}
                    { lastChange !== 0 && <span className="font-semibold text-[#9D9FA1] text-xs">From {lastChange}%</span>}
                </div>
           
        </div>
    );
}
