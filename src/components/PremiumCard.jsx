export function PremiumCard() {
    return (
        <div className="bg-[#282828] rounded-xl gap-4 md:gap-1 p-6  flex flex-col justify-center md:flex-row items-center h-40 md:h-32 md:justify-between">
            <div className="flex flex-col items-center md:items-start gap-2">
                <h1 className="text-2xl text-white font-semibold">Unlock premium stats</h1>
                <h1 className="text-white">Get up to 10TB of storage for a limited time</h1>
            </div>
            <div className="flex gap-2 px-6 py-3 rounded-3xl bg-white h-12 items-center w-40"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
                <span className="font-semibold">Upgrade</span></div>
        </div>
    )
}