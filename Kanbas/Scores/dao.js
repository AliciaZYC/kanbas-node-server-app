import Database from "../Database/index.js";
import model from "./model.js";
export function findAllScores() {
  // return Database.scores;
  return model.find();
  // .populate("student").populate("quiz");
}
export function newScore(userId, quizId, scoreValue) {
  // const { scores } = Database;
  // const newScore = {
  //   _id: Date.now().toString(),
  //   student: userId,
  //   quiz: quizId,
  //   score: scoreValue,
  // };
  // scores.push(newScore);
  // return newScore;
  const newScore = model.create({
    student: userId,
    quiz: quizId,
    score: scoreValue,
  });
  return newScore;
}
export function updateScore(userId, quizId, updatescore) {
  // const { scores } = Database;
  // const score = scores.find(
  //   (score) => score.student === userId && score.quiz === quizId
  // );
  // if (score) {
  //   Object.assign(score, updatescore);
  //   return score;
  // } else {
  //   return null;
  // }
  const updatedScore = model.findOneAndUpdate(
    { student: userId, quiz: quizId },
    updatescore,
    { new: true } // Returns the updated document
  );
  return updatedScore;
}
export function findScore(userId, quizId) {
  // const { scores } = Database;
  // return scores.find(
  //   (score) => score.student === userId && score.quiz === quizId
  // );
  return model
    .findOne({ student: userId, quiz: quizId })
    .populate("student")
    .populate("quiz");
}
