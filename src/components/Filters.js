import { shortTitles, statusList } from "../utils/constants"
export default function Filters({ handleChange }) {
    return (
        <div className="flex flex-row space-x-2 mb-2">
            <label htmlFor="short_title">Short title:</label>
            <select
                name="short_title"
                id="short_title"
                className="border-gray border-2 text-sm cursor-pointer rounded-md text-black"
                onChange={handleChange}
            >
                <option value="">--select option--</option>
                {shortTitles.map(title => (
                    <option key={title} value={title}>
                        {title}
                    </option>
                ))}
            </select>
            <label htmlFor="status">Status:</label>
            <select
                name="status"
                id="status"
                className="border-gray border-2 text-sm cursor-pointer rounded-md text-black"
                onChange={handleChange}
            >
                <option value="">--select option--</option>
                {statusList.map(status => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    )
}
