const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  await fs.updateFile(fileName,'An online learning platform.');
  // write code here
  // dont change function name
  
};

module.exports = updateFile;
