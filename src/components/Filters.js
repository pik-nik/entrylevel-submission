import { shortTitles, statusList } from "../utils/constants"
export default function Filters({ handleChange }) {
    return (
        <div className="flex flex-col md:flex-row space-y-3 space-x-0 md:space-x-5 md:space-y-0 mb-2">
            <div className="space-x-1">
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
            </div>
            <div className="space-x-1">
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
        </div>
    )
}
