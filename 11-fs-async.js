const {readFile,writeFile}= require('fs');

console.log('starting');
readFile('./folder/first.txt','utf8',(error,result)=>{
  if(error){
    console.log(error);
  }
    const first =result;
    readFile('./folder/second.txt','utf8',(error,result)=>{
      const second = result;
      writeFile('./folder/result-async.txt',`This is the result: ${first}, ${second}`,(error,result)=>{
        if(error){console.log(error);}
        console.log('task is done');
      });
    });
});
console.log('staring next task');