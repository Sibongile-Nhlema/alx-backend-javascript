// display message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Flag to determine if the exit message should be displayed
const shouldDisplayExitMessage = false;

// user inputs
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  process.exit();
});

// exit message
process.on('exit', () => {
  console.log('This important software is now closing');
});
