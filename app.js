const express =require ('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const app = express();
const PORT = 3000;

let items=[];
//Set ejs as your view engine
app.set('view engine','ejs');

//Use body parser
app.use(bodyParser.urlencoded({ extended: true }));

//Use static
app.use(express.static("public"))
//POST Request on "/"
app.post("/",(req,res) => {
  item = req.body.todoItem;
  console.log(item);
  if(item!==""){
    items.push(item);
  }
  res.redirect("/");

})

//GET Request on "/"
app.get("/", (req, res) => {
 //const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

 let day = date();
 res.render("list",{kindofDay:day,  listItems:items});  
})

app.get("/about", (req,res) =>{
  res.render("about");
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})