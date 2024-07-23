const readline = require('readline');

// Set up the interface to handle interactive input
const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Flag to determine if the exit message should be displayed
let shouldDisplayExitMessage = true;

// Handle interactive user input
readl.on('line', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
  readl.close();
  if (shouldDisplayExitMessage) {
    console.log('This important software is now closing');
  }
});

// Check if the process is receiving piped input, if not don't print
process.stdin.on('data', () => {
  shouldDisplayExitMessage = false;
});

process.stdin.on('end', () => {
  if (shouldDisplayExitMessage) {
    console.log('This important software is now closing');
  }
});
