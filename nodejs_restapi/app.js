//load our app server using express ;)
const express = require('express')
const app = express()
const mysql = require ('mysql')

app.get("/",(req,res) => {
  console.log("responding to root route")
  res.send("Hello from roooot")
})

app.get("/Users",(req,res) => {
  console.log("sending response to request!")
  res.send("Second page!")
})

app.get("/Users1",(req,res) => {
  var user1 = {firstName: "Isaac", lastName: "Douglas"}
  const user2 = {firstName: "Mohammed", lastName: "Shafeeq"}
  console.log("sending response to request!")
  res.json([user1, user2])
})

app.get('/fifa/:id', (req,res) => {
  console.log("trying to fetch " + req.params.id)

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'fifa'
  })

const userId = req.params.playername
const queryString = "SELECT * FROM fifa WHERE id = ?"
connection.query(queryString, [userId], (err, rows, fields) => {
  if (err) {
    console.log("FAILED!"+err)
    res.sendStatus(500)
    res.end()
    return
  }
  console.log("I think this worked?")
  res.json(rows)
})
  // res.end()
})

app.listen(9090, () => {
console.log("Server listening on 9090 ;)")
})
