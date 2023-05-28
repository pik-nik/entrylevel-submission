import convertTimeStamp from "../utils/convertTimeStamp"
import Program from "./Program"

export default function Sessions({ sessions }) {
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {sessions?.flatMap((session, index) => {
                const startDate = convertTimeStamp(session.start_date)
                const endDate = convertTimeStamp(session.end_date)
                return session.program.map(program => (
                    <Program
                        key={`${session.id}-${program.id}`}
                        count={index + 1}
                        imageURL={program.thumbnail_img_url}
                        displayTitle={program.display_title}
                        startDate={startDate}
                        endDate={endDate}
                        status={session.status}
                    />
                ))
            })}
        </div>
    )
}
