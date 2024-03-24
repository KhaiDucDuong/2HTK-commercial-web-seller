export const truncateText = 
(str : string) =>{
    if(str.length < 25) return str;
    const truncatedString = str.substring(0, 24); // Get substring of first 24 characters
    const lastSpaceIndex = truncatedString.lastIndexOf(" "); // Find index of last space character
    if (lastSpaceIndex !== -1) {
        // If a space is found within first 24 characters
        return truncatedString.substring(0, lastSpaceIndex) + "..."; // Truncate at last space and add ellipsis
    } else {
        // If no space is found within first 24 characters
        return truncatedString + "..."; // Truncate at 24th character and add ellipsis
    }
};