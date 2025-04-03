const fs = require('fs');

// Synchronous read & write file (Blocking)
// const textIn = fs.readFileSync('1-node-farm/starter/txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('1-node-farm/starter/txt/output.txt',textOut);

// Asynchronous read & write File (Non Blocking)
// Part - 1
// const textIn = fs.readFile('1-node-farm/starter/txt/input.txt','utf-8',(err,data)=>{
//     const textOut = `This is what we know about avacado: ${data}.\nCreated on ${Date.now()}`;
//     fs.writeFile('1-node-farm/starter/txt/outputasync.txt',textOut,(err,data1)=>{
//         console.log('Write File Completed.');
//     });
// });
// console.log('Reading File...');
// Part - 2
const textIn = fs.readFile('1-node-farm/starter/txt/start.txt', 'utf-8' ,(err,data1)=>{
    fs.readFile(`1-node-farm/starter/txt/${data1}.txt`, 'utf-8' ,(err,data2)=>{
        console.log(data2);
        fs.readFile('1-node-farm/starter/txt/append.txt','utf-8',(err,data3)=>{
            console.log(data3);
            fs.writeFile('1-node-farm/starter/txt/final.txt', `${data2}\n${data3}`, err=>{
                console.log("Your file has been written successfully!");
            })
        });
    });
});
console.log('Reading the Files...');