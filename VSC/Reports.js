var dbfcon=require('./dbConnection');
// import React from "react";
// import './home.css';
// export class home extends React.Component {

module.exports=

function showRecords(request,response){
   var con=dbfcon();
   con.query("select * from personal",function(err,result){
       if(err){
           console.log("Error")
       }
       else{
           response.writeHead(200,{'Content-Type':'text/HTML'});
           result.forEach(function(record){
               response.write(""+record.empno+" ");
               response.write(""+record.Name+" ");
               response.write(""+record.Address+" ");
               response.write("<BR>")
           })
           response.end();
       }
   })
}