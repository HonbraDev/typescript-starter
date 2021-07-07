// A user-friendly TypeScript loader with readable error messages

let script, chalk;

try {
  chalk = require("chalk");
} catch (e) {
  console.error(
    "Cannot import 'chalk'. Please install npm packages by running 'npm install'."
  );
  process.exit(1);
}

try {
  script = require("./build/index.js");
} catch (error) {
  console.error(
    chalk.red(
      "Cannot import compiled script. Please compile the code by running 'npm run build'."
    )
  );
  process.exit(1);
}

try {
  script.default();
} catch (error) {
  console.error(chalk.red("Uncaught runtime error:"));
  console.error(error);
  process.exit(1);
}
