import Image from "next/image"
import convertTimeStamp from "../utils/convertTimeStamp"

export default function Programs({ programs }) {
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {programs?.map((program, index) => {
                const startDate = convertTimeStamp(program.start_date)
                const endDate = convertTimeStamp(program.end_date)
                return (
                    <article key={program.id} className="p-2">
                        <p className="text-left text-xs pb-1 opacity-60 px-2">
                            Item {index + 1}
                        </p>
                        <div className="border-2 rounded-lg p-2 h-fit hover:border-[#8186ff] cursor-pointer">
                            <div className="h-[170px] w-[250px] relative overflow-hidden">
                                <Image
                                    src={program.program[0].thumbnail_img_url}
                                    alt={program.program[0].display_title}
                                    priority={true}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-auto"
                                ></Image>
                            </div>
                            <h1 className="text-base font-bold">
                                {program.program[0].display_title}
                            </h1>
                            <p className="text-xs">
                                {startDate} - {endDate}
                            </p>
                            <p className="text-xs">{program.status}</p>
                            <p className="text-xs">
                                {program.program[0].short_title}
                            </p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
