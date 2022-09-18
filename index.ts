import fs from "fs";
import * as path from "path";

const rename = async () => {
  const pathToFiles = __dirname + "/files";
  // The following regex matches any text within parantheses
  const regex = /\(.*?\)/;

  fs.readdir(pathToFiles, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const fileName = file.split(" - ");
      // console.log(fileName);
      const newName = file
        .replace(`${fileName[0]} - `, "")
        .replace(regex, `- ${fileName[0]}`);
      fs.rename(
        `${pathToFiles}/${file}`,
        `${pathToFiles}/${newName}`,
        (err) => {
          if (err) throw err;
        }
      );
    });
  });
};

rename();
