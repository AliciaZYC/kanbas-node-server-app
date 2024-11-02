const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
const module = {
  id: 101,
  name: "Implementing Node Web Server APIs, Assignment 5",
  description:
    "`Implementing Node Web Server APIs` involves building RESTful APIs using Node.js and Express.js to enable communication between a server and client applications. By creating endpoints for CRUD operations (Create, Read, Update, Delete), these APIs allow clients to interact with server data, facilitating seamless data retrieval and modification through structured HTTP requests.",
  course: "CS5610 Web Development",
};

export default function WorkingWithObjects(app) {
  // assignment part
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = Number(newScore);
    res.json(assignment);
  });
  app.get("/lab5/assignment/completed/:isCompleted", (req, res) => {
    assignment.completed = isCompleted === "true";
    res.json(assignment);
  });
  //module part
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  });
}
