export const dateCreate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

//return difference between two dates in days
export const compareWithCurrentTime = (dateString) => {
    const inputDate = new Date(dateString.split('.').reverse().join('-'));
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate - inputDate);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}
