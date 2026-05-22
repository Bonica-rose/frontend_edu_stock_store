export const splitComplexName = (fullName) => {    
    // List of common titles to ignore/remove
    const titles = ['mr', 'mrs', 'ms', 'dr', 'prof', 'sir', 'madam'];
    
    // Clean spaces and split into words
    let words = fullName.trim().split(/\s+/);
    
    // 1. Remove title if present as the very first word
    if (words.length > 0 && titles.includes(words[0].toLowerCase().replace('.', ''))) {
        words.shift(); 
    }
    
    let firstName = "";
    let lastName = "";

    // 2. Check if the new first word is an initial (3 or fewer characters)
    if (words.length > 0 && words[0].length <= 3) {
        const initial = words[0];
        
        // Find the first actual name (longer than 3 characters)
        const firstNameIndex = words.findIndex(word => word.length > 3);
        
        if (firstNameIndex !== -1) {
            firstName = words[firstNameIndex];
            
            // Gather all other words except the initial and the firstName
            const remainingWords = words.filter((_, idx) => idx !== 0 && idx !== firstNameIndex);
            
            // Put remaining words first, then suffix the initial at the very end
            lastName = remainingWords.concat(initial).join(" ");
        } else {
            // Fallback if all remaining words are short
            firstName = words[0];
            lastName = words.slice(1).join(" ");
        }
    } else if (words.length > 0) {
        // Standard behavior: First word is firstName, all remaining words are lastName
        firstName = words[0];
        lastName = words.slice(1).join(" ");
    }

    return { firstName, lastName };
}

// --- Test Cases ---
// console.log(splitComplexName("Dr. J H Smith"));     
// Output: { firstName: 'Smith', lastName: 'H J' } (Title removed, initial suffixed)

// console.log(splitComplexName("Mr. Alex John Michael Smith")); 
// Output: { firstName: 'Alex', lastName: 'John Michael Smith' } (Title removed, 4 words handled)

// console.log(splitComplexName("A. Williamson Roberts Davis")); 
// Output: { firstName: 'Williamson', lastName: 'Roberts Davis A.' } (Initial suffixed on multi-word last name)
