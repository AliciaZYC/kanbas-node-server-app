import Database from "../Database/index.js";
import model from "./model.js";

// Create a new quiz
export function createQuiz(quizData) {
  // const newQuiz = { ...quizData, _id: Date.now().toString() }; // Add unique ID
  // Database.quizzes = [...Database.quizzes, newQuiz];
  // return newQuiz;
  delete quizData._id;
  return model.create(quizData);
}

// Find quizzes by course ID
export function findQuizzesForCourse(courseId) {
  // const { quizzes } = Database;
  // return quizzes.filter((quiz) => quiz.course === courseId);
  return model.find({ course: courseId });
}

// Find a quiz by its ID
export function findQuizById(quizId) {
  // const { quizzes } = Database;
  // return quizzes.find((quiz) => quiz._id === quizId);
  return model.findById(quizId);
}

//update and delete
export function updateQuiz(quizId, quizUpdates) {
  // const { quizzes } = Database;
  // const quiz = quizzes.find((quiz) => quiz._id === quizId);
  // Object.assign(quiz, quizUpdates);
  // return quiz;
  return model.updateOne({ _id: quizId }, quizUpdates);
}
export function deleteQuiz(quizId) {
  // const { quizzes } = Database;
  // Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
  return model.deleteOne({ _id: quizId });
}
