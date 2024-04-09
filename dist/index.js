'use strict';

// Function to extract features using word frequency from an array of words
function extractWordFrequencyFromArray(wordArray) {
    // Calculate word frequency
    const wordFrequency = new Map();
    wordArray.forEach(word => {
        wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    });
    return wordFrequency;
}
// Example usage:
const words = ["apple", "orange", "banana", "apple", "orange", "apple"];
const wordFrequency$1 = extractWordFrequencyFromArray(words);
console.log(wordFrequency$1);

// Handle CLI input
if (process.argv.length < 3) {
    console.error('Usage: node dist/index.js <text>');
    process.exit(1);
}
const inputText = process.argv.slice(2).join(' ');
// Split inputText into an array of words
const wordArray = inputText.split(/\s+/);
// Call extractWordFrequencyFromArray with the word array
const wordFrequency = extractWordFrequencyFromArray(wordArray);
// Print the word frequency map
console.log(wordFrequency);
