import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("$ ", (answer) => {
  let i = 0;
  while (answer) {
  rl.write(`${answer}${i}: command not found`);
  i++;
  }
  rl.close();
});
