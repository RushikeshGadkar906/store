export const formatIndianNumber = (number) => {
    // Convert number to string
    let numStr = number.toString();

    // If the number is less than 1000, just return it without commas
    if (numStr.length < 4) {
        return numStr;
    }

    // Separate the last 3 digits and the rest of the number
    let lastThree = numStr.slice(-3);
    let otherNumbers = numStr.slice(0, -3);

    // Add commas to the other numbers in pairs
    otherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

    // Concatenate the last three digits and the rest
    return otherNumbers + ',' + lastThree;
}