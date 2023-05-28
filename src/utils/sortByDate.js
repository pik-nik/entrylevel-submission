export default function sortByDate(firstDate, secondDate) {
    return new Date(secondDate.start_date) - new Date(firstDate.start_date)
}
