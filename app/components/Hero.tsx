"use client";

export const Hero  = () => {
    return (
        <div className="border border-black dark:border-white             p-5 mx-5 my-10 rounded-md">
            <h1 className="text-5xl font-bold my-2">Nii&apos;s Shop</h1>
            <p>Nii&apos;s Shop is the store that provides you with convenience. So when you need to buy a product, just visit Nii&apos; Shop.</p>

            <h3 className="font-bold text-xl">Woah</h3>
            <div>
                <p>Use code <span className="bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-800 font-medium rounded-sm text-white p-1 ">NEWSTORE</span> to get <span className="bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-800 font-medium rounded-sm text-white p-1 ">30%</span> off!</p>
            </div>
        </div>
    )
}