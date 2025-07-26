const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

let employee = [];
let tasks = []; 


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index", { employee, tasks });
});


app.get("/form", (req, res) => {
  res.render("form", { emp: null });
});


app.get("/table", (req, res) => {
  res.render("table", { employee });
});


app.get("/taskForm", (req, res) => {
  res.render("taskForm", { employee, task: null });
});

app.get("/tasks", (req, res) => {
  res.render("index", { employee, tasks });
});



app.post("/", (req, res) => {
  let obj = {
    id: Date.now(),
    username: req.body.username,
    department: req.body.department,
    salary: req.body.salary,
    email: req.body.email,
    joinDate: req.body.joinDate,
    status: req.body.status
  };
  employee.push(obj);
  console.log("employees", employee);
  res.redirect("/table");
});


app.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  employee = employee.filter(emp => emp.id !== id);
  res.redirect("/table");
});


app.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const emp = employee.find(emp => emp.id === id);
  if (emp) {
    res.render("form", { emp });
  } else {
    res.render("table", { employee });
  }
});

app.post("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = employee.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employee[index] = {
      ...employee[index],
      username: req.body.username,
      department: req.body.department,
      salary: req.body.salary,
      email: req.body.email,
      joinDate: req.body.joinDate,
      status: req.body.status
    };
  }
  res.redirect("/table");
});


app.post("/tasks", (req, res) => {
  let task = {
    id: Date.now(),
    employeeId: parseInt(req.body.employeeId),
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    assignedBy: req.body.assignedBy,
    status: "Pending"
  };
  tasks.push(task);
  console.log("tasks", tasks);
  res.redirect("/"); 
});


app.post("/tasks/status/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) {
    if (task.status === "Pending") task.status = "In Progress";
    else if (task.status === "In Progress") task.status = "Completed";
    else task.status = "Pending";
  }
  res.redirect("/");
});


app.post("/tasks/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.redirect("/");
});


app.get("/tasks/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) {
    res.render("taskForm", { employee, task });
  } else {
    res.redirect("/");
  }
});

app.post("/tasks/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks[index] = {
      ...tasks[index],
      employeeId: parseInt(req.body.employeeId),
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
      assignedBy: req.body.assignedBy,
      status: tasks[index].status
    };
  }
  res.redirect("/");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is started on port:", port);
  }
});
