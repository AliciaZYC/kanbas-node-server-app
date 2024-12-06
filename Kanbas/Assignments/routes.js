import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
  // app.delete("/api/assignments/:assignmentId", (req, res) => {
  //   const { assignmentId } = req.params;
  //   assignmentsDao.deleteAssignment(assignmentId);
  //   res.sendStatus(204);
  // });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
  // app.put("/api/assignments/:assignmentId", (req, res) => {
  //   const { assignmentId } = req.params;
  //   const assignmentUpdates = req.body;
  //   assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
  //   res.sendStatus(204);
  // });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(status);
  });
}
