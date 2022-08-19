import app from "./server.js";

const { PORT = 6001 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

// import util from "util"

// // const util = require('node:util');

// const o = {
//   a: [1, 2, [[
//     'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do ' +
//       'eiusmod \ntempor incididunt ut labore et dolore magna aliqua.',
//     'test',
//     'foo']], 4],
//   b: new Map([['za', 1], ['zb', 'test']])
// };
// console.log(util.inspect(o, { compact: true, depth: 5, breakLength: 80, colors:true, showHidden:true }));

// const os = require("os");
// const fs = require("fs")

// const { spawn } = require('child_process');
// const bat = spawn('cmd.exe', ['/c', 'TheJump']);

// bat.stdout.on('data', (data) => {
//   console.log(data.toString());
// });

// bat.stderr.on('data', (data) => {
//   console.error(data.toString());
// });

// bat.on('exit', (code) => {
//   console.log(`Child exited with code ${code}`);
// });

// const { exec } = require('node:child_process');
// console.log("🚀 ~ file: index.js ~ line 5 ~ exec", exec)

// exec('echo "The \\$HOME variable is $HOME"', (err, stdout, stderr)=>{
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;

// });

// fs.writeFileSync("hello.txt","hello world2");

// const text = fs.readFileSync("./hello.txt", { encoding:"utf-8"});
// console.log("🚀 ~ file: index.js ~ line 7 ~ text", text)

// const extraText = text + " I was added!";

// fs.writeFileSync("hello.txt",extraText);

// fs.mkdirSync("stuff");

// fs.rename("./hello.txt", "./stuff/hello.txt", (err)=>{if (err) console.log(err); console.log("done")});

// console.log(os.cpus());
// console.log(`you have ${os.cpus().length}corse`);
// console.log(`you are running on${os.platform()}`)

// require('dotenv').config()

// const { NAME="anonymous", NODE_ENV="development"}=process.env

// console.log("name", NAME);
// console.log("NODE_ENV", NODE_ENV)

// console.log(__filename);
// console.log(__dirname);
