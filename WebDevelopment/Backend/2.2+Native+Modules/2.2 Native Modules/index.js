const fs = require("fs");
// fs.writeFile("shola.txt", "Hello Folarin", callback)
// function callback(){
//     console.log("the file has been saved")
// }



fs.readFile('./shola.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 