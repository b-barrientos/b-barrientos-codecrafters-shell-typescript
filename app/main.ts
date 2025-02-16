import { exit } from "process";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
  // This automatically prompts with the first expected prompt of "$ ${answer}"
  rl.question("$ ", (answer) => {
    // Early exit if user enters exit 0  to prompt
    if (answer === "exit 0") {
      exit();
    }
    // Echo user prompt
    else if (answer.startsWith("echo")) {
      const sanitizedEcho = answer.slice(5, answer.length);
      console.log(`${sanitizedEcho}`);
    }
    // Handle invalid user input
    else if (answer.includes("invalid")) {
      console.log(`${answer}: command not found`);
    }
    /**
     * Recall the function itself again to cause a REPL loop (Read-evaluate-prompt-loop)
     *  rl.question gives the first read -> $ ${answer}
     *  rl.write evaluates and returns -> command not found
     *  promptUser(); call to itself prompts the user again and handles the loop portion as well
     */
    promptUser();
  });
}

// Invoke the promptUser function at start up. This is where it is called first when spinned up.
promptUser();
