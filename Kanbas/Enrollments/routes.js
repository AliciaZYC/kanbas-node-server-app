import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // Route to enroll a user in a course
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(200);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(200);
  });

  app.get("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const enrolled = dao.isUserEnrolled(userId, courseId);
    res.json({ enrolled });
  });
  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  });
  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  });
}
