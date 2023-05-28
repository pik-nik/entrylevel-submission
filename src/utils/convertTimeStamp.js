import { format } from "date-fns"

export default function convertTimeStamp(timeStamp) {
    const dateArr = timeStamp
        .split("T")[0]
        .split("-")
        .map(string => Number(string))
    const [year, month, day] = dateArr
    const convertedDate = format(new Date(year, month, day), "d MMM yyyy")
    return convertedDate
}
