import db from "../Database/index.js";
export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);
    db.assignments[assignmentIndex] = {
      ...db.assignments[assignmentIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  });
  app.post("/api/courses/:cid/assignments/new", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      _id: new Date().getTime().toString(),
      course: cid,
      title: req.body.title,
      description: req.body.description || "",
      points: req.body.points || 100,
      dueDate: req.body.dueDate || "2024-05-13T23:59",
      availableFrom: req.body.availableFrom || "2024-05-06T23:59",
      availableUntil: req.body.availableUntil || "2024-05-20T23:59",
    };

    db.assignments.push(newAssignment);
    res.send(newAssignment);
  });
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    res.json(assignments);
  });
}
