import Image from "next/image"
function Program({
    count,
    imageURL,
    displayTitle,
    startDate,
    endDate,
    status,
}) {
    return (
        <article className="m-2 p-2 hover:scale-105 transition ease-in-out duration-100 text-left">
            <p className="text-left text-xs pb-1 opacity-60 px-2">
                Item {count}
            </p>
            <div className="rounded-lg h-fit cursor-pointer overflow-hidden bg-[#343260]">
                <div className="h-[170px] w-[300px] relative overflow-hidden">
                    <Image
                        src={imageURL}
                        alt={displayTitle}
                        priority={true}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                    ></Image>
                </div>
                <p className="text-xs text-[#10b981] px-4 mt-3">{status}</p>
                <h1 className="text-base font-bold px-4 py-1">
                    {displayTitle}
                </h1>
                <p className="text-xs px-4 mb-3">
                    {startDate} - {endDate}
                </p>
            </div>
        </article>
    )
}

export default Program
