import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


mongoose.connect('mongodb+srv://admin-arslan:Bisha123@cluster0.trwdvwg.mongodb.net/DailytodolistDB');
console.log ("Working");

const ItemSchema= new mongoose.Schema({
  name:String,
})

const task=mongoose.model("task",ItemSchema);
const app = express();
const port = 3000;

const Item1= new task({
  name:"Welcome to your To-do List" 
});
const Item2= new task({
  name:"Add items by putting your input and pressing the add button" 
});

const Item3= new task({
  name:"Remove or Edit your item by simply pressing the remove or edit button" 
});

var defaultItem=[Item1,Item2,Item3];

//var tasks = [""];
var complete = [""];

app.set('view engine', 'ejs');
app.use(express.static("public")); 

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  task.find()
    .then(function (tasks) {
      if (tasks.length === 0) {
        task.insertMany(defaultItem).then(function () {
          console.log("Successfully saved items");
        }).catch(function (error) {
          console.log(error);
        });
        res.redirect("/");
      } else {
        res.render('index.ejs', { task: tasks, complete: complete });
      }
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
  // ...
});



//the task array with initial placeholders for added task

//post route for adding new task
app.post('/addtask', function (req, res) {
  const newTask=req.body.newtask;
  task.create({ name: newTask }).then(function () {
    console.log("New Item Saved");
}).catch(function (error) {
    console.log(error);
});
//add the new task from the post route into the array
    console.log(newTask);
//after adding to the array go back to the root route
    res.redirect("/");
});
//render the ejs and display added task, task(index.ejs) = task(array)

//the completed task array with initial placeholders for removed task


app.post("/removetask/:id", function(req, res) {
  const id = req.params.id;
  const objid=id.toString();
  console.log(objid);


  task.findByIdAndRemove(objid)
    .then(() => {
      res.redirect("/");
      console.log(id);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.route("/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
    const objid=id.toString();
    console.log(objid);

    task.find({})
      .then(tasks => {
        res.render("edit.ejs", { todoTasks: tasks, idTask: objid });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  })
  .post((req, res) => {
    const id = req.params.id;
    task.findByIdAndUpdate(id, { name: req.body.content })
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });

/*
app.post("/removetask", function(req, res) {
     var completeTask = req.body.check;
//check for the "typeof" the different completed task, then add into the complete task
if (typeof completeTask === "string") {
     complete.push(completeTask);
//check if the completed task already exist in the task when checked, then remove using the array splice method
  task.splice(task.indexOf(completeTask), 1);
} else if (typeof completeTask === "object") {
    for (var i = 0; i < completeTask.length; i++) {     complete.push(completeTask[i]);
    task.splice(task.indexOf(completeTask[i]), 1);
}
}
   res.redirect("/");
});
*/
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });





