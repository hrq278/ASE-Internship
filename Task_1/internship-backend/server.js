import express from "express";
import cors from "cors";

const app = express();  
const PORT = 5000;

app.use(cors({
    origin: "http://localhost:5173",
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
} );



//Routes 

app.get("/", (req, res) => {
  res.send("Welcome to Allied Software Engineers Internship Program");
});


app.get("/api/company", (req, res) => {
    const companyInfo = {
        name: "Allied Software Engineers",
        location: "Pakistan"
    }
    res.json(companyInfo);
})

app.get("/api/interns" , (req, res) => {
    const interns = {
        name: "Haroon Rasheed",
        domain: "MERN Stack Web Development",
        batch: "Batch 1",
        duration: "2 Months",
        supervisor: "Muhammad Ahsan Ali"
    }

    res.json(interns);
})

app.get("/api/tasks", (req, res) => {
    const tasks = [
        {taskId: 1, taskName: "Task 1", status: "In Progress"},
        {taskId: 2, taskName: "Task 2", status: "Not Started"},
        {taskId: 3, taskName: "Task 3", status: "Not Started"},
    ]
    res.json(tasks);
});

