// Function to extract features using word frequency from an array of words
export function extractWordFrequencyFromArray(wordArray: string[]): Map<string, number> {
    // Calculate word frequency
    const wordFrequency = new Map<string, number>();
    wordArray.forEach(word => {
        wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    });

    return wordFrequency;
}

// Example usage:
const words = ["apple", "orange", "banana", "apple", "orange", "apple"];
const wordFrequency = extractWordFrequencyFromArray(words);
console.log(wordFrequency);
