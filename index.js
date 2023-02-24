// // // // // // const http = require("http")
// // // // // // const port = 3000;
// // // // // // const server =  http.createServer((req,res)=>{
// // // // // //   if(req.url==='/'){
// // // // // //     res.writeHead(200,{'content-Type': 'text/plain'})
      
    
    
    
// // // // // // res.end("hello node")
    
// // // // // //    } 
// // // // // //     if(req.url==='/dash'){
// // // // // //    res.writeHead(200,{'content-Type': 'text/html'})
  



// // // // // //     res.end("<h1>hello from abhilash this is your  dash side</h1>")
// // // // // //     }

// // // // // // })

// // // // // // server.listen(port);
// // // // // // // console.log("server run",port);

// // // // // const fs = require('fs');

// // // // // const biodata = {
// // // // //   name:"abhilash",
// // // // //   age:24,
// // // // //   village:"kardhan",
// // // // // };
// // // // // const jsondata = JSON.stringify(biodata);
// // // // // fs.writeFile("json1.json", jsondata,(err) =>{
// // // // //   console.log(jsondata)
// // // // // });
// // // // // fs.readFile("json1.json","utf-8", (err,data)=>
// // // // // {
// // // // //   console.log(data.name);
// // // // // })


var events = require('events');
// // // //// var eventEmitter = new events.EventEmitter();

// // // // //Create an event handler:
// // // // var myEventHandler1 = function () {
// // // //   console.log('I hear a scream!');
// // // // }

// // // // var myEventHandler2 = function () {
// // // //   console.log('I hear a scream! another listner');
// // //  }
// // // // //Assign the eventhandler to an event:
// // // // eventEmitter.on('scream1',myEventHandler1);

// // // // eventEmitter.on('scream2',myEventHandler2);
// // // // //Fire the 'scream' event:
// // // // eventEmitter.emit('scream1');

// // // // eventEmitter.emit('scream2');
const express = require("express")
 const port = 3000;
 const app = express();
 const path = require('path');
 let ejs = require('ejs')
 app.set('view engine', 'ejs')
 app.set('views','views')

 app.use(express.static('public'))
 var contactList = [
  {
     name: "Abhilash Rawal",
      phone: "1111111111",
  },
  {
     name: "Ketan Rawal",
      phone: "1234567890"
  },
  {
     name: "Aryan Rawal",
      phone: "12131321321"
  }
]
//app.use('/static', express.static(path.join(__dirname,'public')))
app.get('/', function(req,res){
  res.render('index',{
  title:"project file",
  
    list:contactList
   
})
 })
 
  

 app.listen(port,()=>{
  
   console.log(`express server is running on port no. ${port}`); })


// var path = require('path');
// //Return the directries:
// var directories = path.dirname('even/index.js');
// console.log(directories);
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
//console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// console.log(q.pathname)

/*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.year)

// Node.js program to demonstrate the	
// path.dirname() method
	
// Import the path module
// Node.js program to demonstrate the	
// path.dirname() method
	
// // Import the path module
// const path = require('path');

// console.log("File name:", __filename);
// path1 = path.dirname(__filename);
// console.log(path1);

// console.log("Directory name:", __dirname);
// path2 = path.dirname(__dirname);
// console.log(path2);

// console.log(__dirname +"   ketan   " +__filename,)


// console.log(__filename)
// console.log(__dirname)

// var abhilash = path.dirname(__dirname)

// console.log(abhilash)
