import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  app.get("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizById(qid);
    res.json(quiz);
  });

  app.put("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(qid, quizUpdates);
    res.send(status);
  });
  app.delete("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.send(status);
  });
}
