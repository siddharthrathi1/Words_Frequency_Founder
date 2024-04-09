import { extractWordFrequencyFromArray } from './summarizer'; // Import the extractWordFrequencyFromArray function

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
