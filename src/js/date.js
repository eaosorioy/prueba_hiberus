export function getDateDifference(startDate, endDate) {
    const startDateObj = new Date(startDate)
    const endDateObj = new Date(endDate)
    const diff = endDateObj.getTime() - startDateObj.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    return days;
}
