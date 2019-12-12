var express = require("express");
var app = express();
var cookieparse = require("cookie-parser");
app.use(cookieparse());
app.get("/", function(req, res) {
  res.writeHeader(200, { "Content-type": "text/html" });
  res.write("<b><u>Select Timestable");
  res.write("<br>");
  for (var i = 1; i <= 10; i++) {
    res.write(`<a href=http://localhost:5000/selectStart/${i}>${i}</a>`);
    res.write("<br>");
  }
  res.end();
});
app.get(["/selectStart/:start", "/selectStart/"], function(req, res) {
  var num = req.params.start;
  if (num == null) {
    res.redirect("/");
  } else {
    res.cookie("select", num);
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("Timestable: " + num + " Selected");
    res.write("<br>");
    res.write("Select a starting point");
    res.write("<br>");
    for (var i = 10; i <= 1000; i += 10) {
      res.write(`<a href=http://localhost:5000/selectEnd/${i}>${i}</a>`);
      res.write("<br>");
    }
    res.end();
  }
});
app.get(["/selectEnd/:end", "/selectEnd/"], function(req, res) {
  var num2 = req.params.end;
  var num = req.cookies.select;
  if (num == null) {
    res.redirect("/");
  }
  if (num2 == null) { 
    res.redirect("selectStart");
  } else {
    res.cookie("selectEnd", num2);
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("Timestable: " + num + " Selected");
    res.write("<br>");
    res.write("Starting from: " + num2);
    res.write("<br>");
    res.write("Select the end point");
    res.write("<br>");
    for (var i = 10; i <= 1000; i += 10) {
      res.write(`<a href="http://localhost:5000/printTable/${i}">${i}</a>`);
      res.write("<br>");
    }
  }
});
app.get(["/printTable/:q", "/printTable/"], function(req, res) {
  var num = req.params.q;
  var num2 = req.cookies.selectEnd;
  var num3 = req.cookies.select;
  res.writeHead(200, { "Content-type": "text/html" });
  for (var i = num2; i <= num; i++) {
    res.write(num3 + "x" + i + "=" + num3 * i);
    res.write("<BR>");
  }
});
app.listen(5000);
