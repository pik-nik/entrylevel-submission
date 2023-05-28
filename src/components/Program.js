import Image from "next/image"
function Program({
    count,
    imageURL,
    displayTitle,
    startDate,
    endDate,
    shortTitle,
    status,
}) {
    return (
        <article className="p-2">
            <p className="text-left text-xs pb-1 opacity-60 px-2">
                Item {count}
            </p>
            <div className="border-2 rounded-lg p-2 h-fit hover:border-[#8186ff] cursor-pointer">
                <div className="h-[170px] w-[250px] relative overflow-hidden">
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
                <h1 className="text-base font-bold">{displayTitle}</h1>
                <p className="text-xs">
                    {startDate} - {endDate}
                </p>
                <footer className="text-xs flex flex-row justify-between mx-2">
                    <p>{shortTitle}</p>
                    <p>{status}</p>
                </footer>
            </div>
        </article>
    )
}

export default Program
